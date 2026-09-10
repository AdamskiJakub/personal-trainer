import { site } from "@/lib/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Faq() {
  const { faq } = site;
  return (
    <section id="faq" className="relative">
      <div className="mx-auto max-w-6xl px-5 pb-24 pt-6 sm:px-8 md:pb-32 md:pt-8">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
            {faq.label}
          </p>
          <h2 className="mt-6 font-display text-3xl font-medium leading-[1.1] tracking-tight text-paper sm:text-4xl lg:text-5xl">
            {faq.headline}
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-14 border-t border-line md:mt-20"
        >
          {faq.items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="font-display text-lg font-medium tracking-tight text-paper md:text-xl">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl text-paper/70">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
