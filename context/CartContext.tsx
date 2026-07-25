"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { CartItem, CartProduct } from "@/types/cart";
import { readCart, saveCart } from "@/utils/cartStorage";

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  isOpen: boolean;
  toast: string | null;
  addItem: (product: CartProduct) => void;
  removeItem: (name: string) => void;
  updateQuantity: (name: string, quantity: number) => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setItems(readCart());
    setHasHydrated(true);
  }, []);
  useEffect(() => {
    if (hasHydrated) saveCart(items);
  }, [hasHydrated, items]);
  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const addItem = useCallback((product: CartProduct) => {
    setItems((current) => {
      const existing = current.find((item) => item.name === product.name);
      return existing
        ? current.map((item) => item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item)
        : [...current, { ...product, quantity: 1 }];
    });
    setToast(`${product.name} added to your bag`);
  }, []);

  const removeItem = useCallback((name: string) => setItems((current) => current.filter((item) => item.name !== name)), []);
  const updateQuantity = useCallback((name: string, quantity: number) => {
    if (quantity < 1) return;
    setItems((current) => current.map((item) => item.name === name ? { ...item, quantity } : item));
  }, []);

  const value = useMemo(() => ({
    items,
    itemCount: items.reduce((total, item) => total + item.quantity, 0),
    subtotal: items.reduce((total, item) => total + item.price * item.quantity, 0),
    isOpen,
    toast,
    addItem,
    removeItem,
    updateQuantity,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
  }), [items, isOpen, toast, addItem, removeItem, updateQuantity]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
