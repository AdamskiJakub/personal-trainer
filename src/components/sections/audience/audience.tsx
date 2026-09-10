import { site } from "@/lib/site";
import { Photo } from "@/components/ui/photo";

export function Audience() {
  return (
    <section id="dla-kogo" className="relative">
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-6 sm:px-8 md:pb-32 md:pt-8">
        {/* GÓRNA CZĘŚĆ — zdjęcie po lewej, treść po prawej (odwrócone jak Hero) */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
          {/* KOLUMNA ZDJĘCIA */}
          <div className="md:col-span-6 lg:col-span-6 grayscale">
            <Photo
              src="/images/ddd.jpeg"
              alt="Trening personalny — praca z podopiecznym"
              className="h-105 sm:h-120 md:aspect-4/5 md:h-auto"
            />
          </div>

          {/* KOLUMNA TREŚCI */}
          <div className="md:col-span-6 lg:col-span-6">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
              Dla kogo
            </p>
            <h2 className="mt-6 max-w-xl font-display text-3xl font-medium leading-[1.1] tracking-tight text-paper sm:text-4xl lg:text-5xl">
              {site.audience.headline}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {site.audience.intro}
            </p>
          </div>
        </div>

        {/* LISTA 01–05 — editorialowe wiersze z numeracją */}
        <ul className="mt-16 border-t border-line md:mt-24">
          {site.audience.items.map((item) => (
            <li
              key={item.number}
              className="grid grid-cols-1 gap-2 border-b border-line py-8 sm:grid-cols-12 sm:gap-6 md:py-10"
            >
              <span className="font-display text-sm font-medium tracking-tight text-muted sm:col-span-2 sm:pt-1.5">
                {item.number}
              </span>
              <div className="sm:col-span-10">
                <h3 className="font-display text-xl font-medium tracking-tight text-paper sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
