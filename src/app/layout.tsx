import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jakub Adamski — Trener Personalny Białystok",
    template: "%s — Jakub Adamski",
  },
  description:
    "Trening personalny 1:1 w Białymstoku. Pomagam zacząć, wrócić do formy i trenować świadomie — z planem dopasowanym do Twojego celu.",
  metadataBase: new URL("https://personal-trainer.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jakub Adamski — Trener Personalny Białystok",
    description:
      "Trening personalny 1:1 w Białymstoku. Zacznij, wróć do formy albo trenuj świadomie — z planem dopasowanym do Ciebie.",
    url: "/",
    siteName: "Jakub Adamski — Trener Personalny",
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Jakub Adamski — Trener Personalny Białystok",
    description:
      "Trening personalny 1:1 w Białymstoku. Zacznij, wróć do formy albo trenuj świadomie — z planem dopasowanym do Ciebie.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-paper">{children}</body>
    </html>
  );
}
