import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/footer";
import { LegalPage } from "@/components/legal/legal-page";
import { politykaPrywatnosci } from "@/lib/polityka-prywatnosci";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Zasady przetwarzania danych osobowych przez Jakuba Adamskiego — Trenera Personalnego w Białymstoku.",
  alternates: {
    canonical: "/polityka-prywatnosci",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PolitykaPrywatnosciPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalPage
          title={politykaPrywatnosci.title}
          subtitle={politykaPrywatnosci.subtitle}
          sections={politykaPrywatnosci.sections}
        />
      </main>
      <Footer />
    </>
  );
}
