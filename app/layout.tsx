import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Luma — Designed for everyday", description: "A premium, curated e-commerce destination." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
