import type { Metadata } from "next";
import "./globals.css";

import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "ШПИНАТ",
  description: "Эко-продукты и полезное питание",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <CartProvider>
          {children}

          <div className="fixed bottom-24 right-4 z-40 flex flex-col gap-2 rounded-2xl border border-[#b89c6d] bg-white/70 px-4 py-3 text-xs font-bold text-[#1f5f2a] shadow-xl backdrop-blur-xl md:bottom-4 md:right-4">
            <a href="/privacy" className="hover:text-[#39A935]">
              Политика конфиденциальности
            </a>

            <a href="/terms" className="hover:text-[#39A935]">
              Пользовательское соглашение
            </a>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}