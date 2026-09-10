/** Imię — tylko litery (polskie znaki), spacje, apostrofy i myślniki. */
export function sanitizeName(value: string) {
  return value.replace(/[^A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż\s'’-]/g, "");
}

/** Telefon — tylko cyfry, spacje, plus, nawiasy i myślniki. */
export function sanitizePhone(value: string) {
  return value.replace(/[^0-9+\s()-]/g, "");
}
