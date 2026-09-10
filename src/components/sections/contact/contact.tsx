import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "./contact-form";

export function Contact() {
  const { contact } = site;

  const channels = [
    contact.channels.email,
    contact.channels.messenger,
    contact.channels.instagram,
  ];

  return (
    <section id="kontakt" className="relative">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
              {contact.label}
            </p>
            <h2 className="mt-6 font-display text-3xl font-medium leading-[1.1] tracking-tight text-paper sm:text-4xl lg:text-5xl">
              {contact.headline}
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              {contact.intro}
            </p>

            <div className="mt-12 border-t border-line pt-8">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
                {contact.channels.title}
              </p>
              <ul className="mt-6 space-y-5">
                {channels.map((channel) => (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      target={
                        channel.href.startsWith("mailto:")
                          ? undefined
                          : "_blank"
                      }
                      rel={
                        channel.href.startsWith("mailto:")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="group flex flex-col gap-2 border-b border-line pb-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <span className="text-sm text-muted">
                        {channel.label}
                      </span>
                      <span className="font-display text-base font-medium tracking-tight text-paper transition-colors group-hover:text-muted sm:text-right sm:text-lg">
                        {channel.value}
                        <span
                          className="ml-2 inline-block text-muted transition-transform duration-200 group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal className="md:col-span-7" delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
