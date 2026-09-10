import { site } from "@/lib/site";

export function Process() {
  return (
    <section id="jak-pracuje" className="relative">
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-6 sm:px-8 md:pb-32 md:pt-8">
        {/* Nagłówek sekcji */}
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
            {site.process.label}
          </p>
          <h2 className="mt-6 font-display text-3xl font-medium leading-[1.1] tracking-tight text-paper sm:text-4xl lg:text-5xl">
            {site.process.headline}
          </h2>
        </div>

        {/* Kroki — poziomo na desktopie, pionowo na mobile */}
        <ol className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 border-t border-line pt-10 sm:grid-cols-2 md:mt-24 md:grid-cols-4 md:gap-x-10 md:pt-12">
          {site.process.steps.map((step) => (
            <li key={step.number} className="flex flex-col">
              <span className="font-display text-sm font-medium tracking-tight text-muted">
                {step.number}
              </span>
              <h3 className="mt-5 font-display text-xl font-medium tracking-tight text-paper sm:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 max-w-xs text-base leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
