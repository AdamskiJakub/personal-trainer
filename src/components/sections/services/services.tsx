import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function Services() {
  const { services } = site;

  return (
    <section id="oferta" className="relative">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16 md:py-20">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
            {services.label}
          </p>
          <h2 className="mt-6 font-display text-3xl font-medium leading-[1.1] tracking-tight text-paper sm:text-4xl lg:text-5xl">
            {services.headline}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {services.intro}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-14 border-t border-line pt-10 md:mt-20 md:grid-cols-2 md:gap-x-16 md:pt-12">
          <Reveal className="flex flex-col">
            <h3 className="font-display text-2xl font-medium tracking-tight text-paper sm:text-3xl">
              {services.single.name}
            </h3>
            <p className="mt-5 font-display text-3xl font-medium tracking-tight text-paper sm:text-4xl">
              {services.single.price}
              <span className="ml-2 text-base font-normal text-muted">
                {services.single.unit}
              </span>
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              {services.single.description}
            </p>
          </Reveal>

          <Reveal className="flex flex-col" delay={100}>
            <h3 className="font-display text-2xl font-medium tracking-tight text-paper sm:text-3xl">
              {services.packages.name}
            </h3>
            <ul className="mt-6">
              {services.packages.options.map((option) => (
                <li
                  key={option.count}
                  className="flex items-baseline justify-between gap-6 border-b border-line py-4 first:border-t"
                >
                  <span className="text-base text-paper sm:text-lg">
                    {option.count}
                  </span>
                  <span className="text-right">
                    <span className="font-display text-lg font-medium tracking-tight text-paper sm:text-xl">
                      {option.price}
                    </span>
                    <span className="ml-2 text-sm text-muted">
                      {option.per}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              {services.packages.note}
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-16 rounded-2xl border border-line bg-surface p-7 sm:p-10 md:mt-20 md:p-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
                {services.coaching.tag}
              </p>
              <h3 className="mt-5 font-display text-2xl font-medium leading-tight tracking-tight text-paper sm:text-3xl">
                {services.coaching.name}
              </h3>
              <p className="mt-6 font-display text-4xl font-medium tracking-tight text-paper sm:text-5xl">
                {services.coaching.price}
                <span className="ml-2 text-base font-normal text-muted sm:text-lg">
                  {services.coaching.unit}
                </span>
              </p>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
                {services.coaching.description}
              </p>
              <div className="mt-9">
                <ButtonLink href="#kontakt" variant="primary">
                  Umów konsultację
                </ButtonLink>
              </div>
            </div>

            <div className="md:col-span-7">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
                W cenie
              </p>
              <ul className="mt-6 space-y-4">
                {services.coaching.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 border-b border-line pb-4 last:border-b-0 last:pb-0"
                  >
                    <span
                      className="mt-3 h-px w-5 shrink-0 bg-paper/40"
                      aria-hidden="true"
                    />
                    <span className="text-base leading-relaxed text-paper/90">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <p>{services.note}</p>
          <p className="sm:text-right">
            {services.location.text}{" "}
            <a
              href={services.location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-paper transition-colors hover:text-muted"
            >
              {services.location.mapsLabel}
              <span aria-hidden="true">→</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
