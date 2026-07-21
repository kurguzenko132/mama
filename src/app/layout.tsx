import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({ subsets:["cyrillic","latin"], variable:"--font-cormorant" });
const manrope = Manrope({ subsets:["cyrillic","latin"], variable:"--font-manrope" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const metadata: Metadata = { metadataBase:new URL(siteUrl), title:"Подолог в Минске — профессиональный уход за стопами", description:"Безопасная помощь подолога: лечение вросшего ногтя, мозолей, трещин и грибковых поражений.", alternates:{canonical:"/"}, openGraph:{type:"website", locale:"ru_RU", title:"PODOLOG — профессиональный уход за стопами", description:"Бережная и безопасная помощь подолога.", url:"/", images:["/assets/images/hero/hero-podologist.webp"]}, twitter:{card:"summary_large_image"}, robots:{index:true,follow:true} };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="ru"><body className={`${cormorant.variable} ${manrope.variable}`}>{children}<Analytics/><SpeedInsights/></body></html>; }
