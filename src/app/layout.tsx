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
          <div className="min-h-screen flex flex-col">
            <div className="flex-1">
              {children}
            </div>

            <footer className="border-t border-[#b89c6d]/40 bg-[#d7c29a] px-5 py-5 text-center">
              <div className="flex flex-col items-center gap-3 text-sm font-bold text-[#355f28]">
                <a
                  href="/privacy"
                  className="transition hover:text-[#39A935]"
                >
                  Политика конфиденциальности
                </a>

                <a
                  href="/terms"
                  className="transition hover:text-[#39A935]"
                >
                  Пользовательское соглашение
                </a>
              </div>
            </footer>
          </div>
        </CartProvider>
      </body>
    </html>
  );
}