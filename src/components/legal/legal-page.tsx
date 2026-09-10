import type { ReactNode } from "react";

interface LegalDefinition {
  term: string;
  definition: string;
}

interface LegalSection {
  number: string;
  title: string;
  paragraphs?: ReactNode[];
  definitions?: LegalDefinition[];
  list?: string[];
  afterList?: ReactNode[];
}

interface LegalPageProps {
  title: string;
  subtitle?: string;
  sections: LegalSection[];
}

export function LegalPage({ title, subtitle, sections }: LegalPageProps) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
      <header className="border-b border-line pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Dokument
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 text-base leading-relaxed text-muted">
            {subtitle}
          </p>
        )}
      </header>

      <div className="mt-12 space-y-12">
        {sections.map((section) => (
          <section key={section.number}>
            <h2 className="font-display text-xl font-semibold tracking-tight text-paper">
              {section.number}. {section.title}
            </h2>
            {section.paragraphs && (
              <div className="mt-5 space-y-4">
                {section.paragraphs.map((paragraph, i) => (
                  <div
                    key={i}
                    className="text-[15px] leading-relaxed text-paper/80"
                  >
                    {paragraph}
                  </div>
                ))}
              </div>
            )}
            {section.list && (
              <ul className="mt-5 space-y-3">
                {section.list.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] leading-relaxed text-paper/80"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.6em] h-1 w-1 shrink-0 rounded-full bg-muted"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {section.afterList && (
              <div className="mt-5 space-y-4">
                {section.afterList.map((paragraph, i) => (
                  <div
                    key={i}
                    className="text-[15px] leading-relaxed text-paper/80"
                  >
                    {paragraph}
                  </div>
                ))}
              </div>
            )}
            {section.definitions && (
              <dl className="mt-5 space-y-4">
                {section.definitions.map((definition) => (
                  <div
                    key={definition.term}
                    className="text-[15px] leading-relaxed text-paper/80"
                  >
                    <dt className="inline font-semibold text-paper">
                      {definition.term}
                    </dt>
                    <dd className="inline">
                      {" – "}
                      {definition.definition}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
