import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="o-mnie" className="relative">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4 md:self-start md:sticky md:top-24">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
              O mnie
            </p>
          </div>

          <Reveal className="md:col-span-8">
            <h2 className="mt-[-0.1em] max-w-xl font-display text-3xl font-medium leading-[1.1] tracking-tight text-paper sm:text-4xl lg:text-5xl">
              {site.about.headline}
            </h2>

            <div className="mt-8 space-y-5">
              {site.about.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16 grid grid-cols-3 gap-x-4 gap-y-10 border-t border-line pt-8 md:mt-20 md:gap-x-8 md:pt-10">
          {site.about.facts.map((fact) => (
            <div key={fact.value}>
              <p className="font-display text-2xl font-medium tracking-tight text-paper sm:text-4xl">
                {fact.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-muted">
                {fact.labelShort ? (
                  <>
                    <span className="sm:hidden">{fact.labelShort}</span>
                    <span className="hidden sm:inline">{fact.label}</span>
                  </>
                ) : (
                  fact.label
                )}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
