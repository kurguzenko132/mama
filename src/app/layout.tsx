import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["cyrillic", "latin"],
  variable: "--font-cormorant",
});
const manrope = Manrope({
  subsets: ["cyrillic", "latin"],
  variable: "--font-manrope",
});
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://mama-cyan-six.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Подолог в Горках — Кургузенко Алеся | Уход за ногами",
  description:
    "Подолог Кургузенко Алеся в Горках: профессиональный уход за ногами, лечение вросшего ногтя, мозолей, трещин и грибковых поражений.",
  keywords: [
    "подолог Горки",
    "подолог в Горках",
    "медицинский педикюр Горки",
    "лечение вросшего ногтя Горки",
    "Кургузенко Алеся",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "Подолог Кургузенко Алеся в Горках",
    description: "Профессиональная и бережная помощь подолога в Горках.",
    url: "/",
    siteName: "Podolog Kurguzenko",
    images: ["/assets/images/hero/hero-podologist-new.png"],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${cormorant.variable} ${manrope.variable}`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
