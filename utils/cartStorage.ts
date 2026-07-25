import type { CartItem } from "@/types/cart";

const CART_STORAGE_KEY = "luma-cart";

export function readCart(): CartItem[] {
  if (typeof window === "undefined") return [];

  try {
    const saved = window.localStorage.getItem(CART_STORAGE_KEY);
    return saved ? (JSON.parse(saved) as CartItem[]) : [];
  } catch {
    return [];
  }
}

export function saveCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}
