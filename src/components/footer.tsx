import Link from "next/link";
import { site } from "@/lib/site";

const socialLinks = [
  {
    label: site.contact.channels.instagram.label,
    href: site.contact.channels.instagram.href,
  },
  {
    label: site.contact.channels.messenger.label,
    href: site.contact.channels.messenger.href,
  },
];

const legalLinks = [
  { label: "Regulamin", href: "/regulamin" },
  { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-8">
          {/* Branding */}
          <div>
            <p className="font-display text-lg font-semibold tracking-tight text-paper">
              {site.name}
            </p>
            <p className="mt-1 text-sm text-muted">{site.hero.role}</p>
          </div>

          {/* Linki */}
          <nav
            aria-label="Linki społecznościowe i prawne"
            className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8"
          >
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            ))}
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Dolna linia */}
        <div className="mt-12 border-t border-line pt-6 md:mt-16">
          <p className="text-xs text-muted">
            © {year} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
