import { site } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { Photo } from "@/components/ui/photo";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 pb-8 pt-28 sm:px-8 md:grid-cols-12 md:gap-12 md:pb-12 md:pt-36">
        <div className="order-1 md:col-span-6 lg:col-span-6">
          <div className="mb-8">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
              {site.hero.name}
            </p>
            <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-paper/80">
              <span className="h-px w-6 bg-paper/40" aria-hidden="true" />
              {site.hero.role}
            </p>
          </div>

          <h1 className="-ml-1 font-display text-4xl font-medium leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl">
            {site.hero.headline}
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            {site.hero.description}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#kontakt" variant="primary">
              {site.hero.ctaPrimary}
            </ButtonLink>
            <ButtonLink href="#oferta" variant="outline">
              {site.hero.ctaSecondary}
            </ButtonLink>
          </div>

          <p className="mt-10 flex items-center gap-2 text-sm text-muted">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-paper/40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-paper" />
            </span>
            {site.location} · treningi 1:1
          </p>
        </div>

        {/* KOLUMNA ZDJĘCIA */}
        <div className="order-2 md:col-span-6 lg:col-span-6">
          <Photo
            src="/images/main-photo.jpg"
            alt="Jakub Adamski — trener personalny w Białymstoku"
            priority
            objectFit="contain"
            className="mx-auto aspect-4/5 w-4/5 max-w-90 sm:w-3/4 sm:max-w-105 md:w-full md:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
