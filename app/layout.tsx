import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "PizzAmore - Pizza Artesanal Premium",
  description:
    "Monte sua pizza meio-a-meio com ingredientes premium. A verdadeira pizza artesanal italiana feita com amor.",
  keywords: ["pizza", "delivery", "artesanal", "meio-a-meio", "italiana"],
};

export const viewport: Viewport = {
  themeColor: "#f97316",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
