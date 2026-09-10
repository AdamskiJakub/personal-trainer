import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/footer";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Nie znaleziono strony",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative">
          <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-5 py-24 sm:px-8 md:py-32">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
              404
            </p>
            <h1 className="mt-6 max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl">
              Nie ma tutaj tego, czego szukasz.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Strona, której szukasz, nie istnieje albo została przeniesiona.
            </p>
            <div className="mt-9">
              <ButtonLink href="/" variant="primary">
                Wróć na stronę główną
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
