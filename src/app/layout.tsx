import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Снегурочка — новогодний массаж",
  description: "Новогодние праздники со Снегурочками",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${cormorantGaramond.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col justify-between">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
