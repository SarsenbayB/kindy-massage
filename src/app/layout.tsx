import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { buildLocalBusinessSchema } from "@/shared/lib/schema";
import { SITE_URL } from "@/shared/config/site";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  // TODO: меншікті домен қосылған соң NEXT_PUBLIC_SITE_URL env арқылы ауыстыру
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL),
  title: "Балалар және ересектерге арналған массаж | Мақтаарал | Жәмила Бақытбек",
  description:
    "Мақтаарал ауданы, Атамұра ауылындағы кәсіби массаж орталығы: балалар массажы мен ересектерге арналған классикалық, от, бет әлпетке, бамбук және бал массажы. Үйге шақыру бар. WhatsApp арқылы жазылыңыз.",
  openGraph: {
    title: "Балалар және ересектерге арналған массаж | Мақтаарал | Жәмила Бақытбек",
    description: "Мақтаарал ауданы, Атамұра ауылындағы кәсіби массаж орталығы: балалар массажы және ересектерге арналған релаксация қызметтері. Үйге шақыру бар.",
    images: ["/assets/photoshoot/hero.png"],
    locale: "kk_KZ",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = buildLocalBusinessSchema();
  return (
    <html lang="kk" className={cn("font-sans", manrope.variable, playfairDisplay.variable)}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
