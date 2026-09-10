import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/footer";
import { LegalPage } from "@/components/legal/legal-page";
import { regulamin } from "@/lib/regulamin";

export const metadata: Metadata = {
  title: "Regulamin",
  description:
    "Regulamin świadczenia usług treningu personalnego oraz usług prowadzenia treningowego przez Jakuba Adamskiego.",
  alternates: {
    canonical: "/regulamin",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RegulaminPage() {
  return (
    <>
      <Navbar />
      <main>
        <LegalPage
          title={regulamin.title}
          subtitle={regulamin.subtitle}
          sections={regulamin.sections}
        />
      </main>
      <Footer />
    </>
  );
}
