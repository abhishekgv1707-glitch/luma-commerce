"use client";

import { motion } from "framer-motion";
import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem as CartItemType } from "@/types/cart";
import { useCart } from "@/context/CartContext";

export function CartItem({ item }: { item: CartItemType }) {
  const { updateQuantity, removeItem } = useCart();
  return <motion.li layout initial={{ opacity: 0, x: 18 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 36, height: 0, marginBottom: 0 }} transition={{ duration: .24 }} className="flex gap-4 overflow-hidden border-b border-black/7 pb-5">
    <img src={item.image} alt={item.name} className="size-20 rounded-xl object-cover"/>
    <div className="min-w-0 flex-1"><div className="flex justify-between gap-3"><div><p className="text-[11px] text-black/45">{item.category}</p><h3 className="mt-1 text-sm font-bold">{item.name}</h3></div><p className="text-sm font-bold">${(item.price * item.quantity).toFixed(2)}</p></div>
      <div className="mt-3 flex items-center justify-between"><div className="flex items-center rounded-full border border-black/10 bg-cloud p-0.5"><button onClick={() => updateQuantity(item.name, item.quantity - 1)} disabled={item.quantity === 1} aria-label={`Decrease ${item.name} quantity`} className="grid size-7 place-items-center rounded-full disabled:cursor-not-allowed disabled:opacity-35"><Minus size={13}/></button><span className="w-7 text-center text-xs font-bold">{item.quantity}</span><button onClick={() => updateQuantity(item.name, item.quantity + 1)} aria-label={`Increase ${item.name} quantity`} className="grid size-7 place-items-center rounded-full hover:bg-white"><Plus size={13}/></button></div><button onClick={() => removeItem(item.name)} className="flex items-center gap-1 text-[11px] font-bold text-black/45 transition hover:text-red-600" aria-label={`Remove ${item.name}`}><Trash2 size={14}/> Remove</button></div>
    </div>
  </motion.li>;
}
