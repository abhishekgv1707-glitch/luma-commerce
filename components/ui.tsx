"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
export function Button({ children, className="", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) { return <motion.span whileTap={{ scale:.97 }} whileHover={{ y:-2 }} className="inline-flex"><button className={`inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 ${className}`} {...props}>{children}<ArrowUpRight size={16}/></button></motion.span> }
export function Reveal({ children, delay=0, className="" }: {children:ReactNode; delay?:number; className?:string}) { return <motion.div initial={{ opacity:0, y:22 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-60px" }} transition={{ duration:.55, delay }} className={className}>{children}</motion.div> }
