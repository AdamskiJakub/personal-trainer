export function sanitizeName(value: string) {
  return value.replace(/[^A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż\s'’-]/g, "");
}

export function sanitizePhone(value: string) {
  return value.replace(/[^0-9+\s()-]/g, "");
}
