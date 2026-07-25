import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
export const metadata: Metadata = { title: "Luma — Designed for everyday", description: "A premium, curated e-commerce destination." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><CartProvider>{children}<CartDrawer /></CartProvider></body></html>; }
