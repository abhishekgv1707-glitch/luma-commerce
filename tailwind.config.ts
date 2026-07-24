import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./sections/**/*.{ts,tsx}"], theme: { extend: { colors: { ink: "#101112", cloud: "#f6f7f8", mint: "#d8f5e7" }, boxShadow: { soft: "0 18px 50px rgba(16,17,18,.10)" } } }, plugins: [] };
export default config;
