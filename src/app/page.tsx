import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero/hero";
import { About } from "@/components/sections/about/about";
import { Audience } from "@/components/sections/audience/audience";
import { Process } from "@/components/sections/process/process";
import { Services } from "@/components/sections/services/services";
import { Faq } from "@/components/sections/faq/faq";
import { Contact } from "@/components/sections/contact/contact";
import { homeJsonLd } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Audience />
        <Process />
        <Services />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
