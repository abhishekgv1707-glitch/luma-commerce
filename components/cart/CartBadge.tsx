"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function CartBadge() {
  const { itemCount, openCart } = useCart();
  return <button onClick={openCart} aria-label={`Shopping bag, ${itemCount} ${itemCount === 1 ? "item" : "items"}`} className="relative grid size-10 place-items-center rounded-full transition hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-ink">
    <ShoppingBag size={19}/>
    {itemCount > 0 && <span aria-hidden="true" className="absolute right-0 top-0 grid size-4 place-items-center rounded-full bg-ink text-[9px] font-bold text-white">{itemCount}</span>}
  </button>;
}
