import type { Metadata } from "next";
import "./globals.css";

import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "ШПИНАТ",
  description: "Эко-продукты и полезное питание",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
          <div className="min-h-screen">
            {children}

            <footer className="border-t border-[#b89c6d]/40 bg-[#d7c29a] px-5 pb-32 pt-6 text-center md:pb-6">
              <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 text-sm font-bold text-[#355f28] md:flex-row md:gap-8">
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