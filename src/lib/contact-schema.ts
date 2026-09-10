import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Podaj imię")
    .max(100)
    .regex(/^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż\s'’-]+$/, "Imię nie może zawierać cyfr"),
  email: z.string().trim().email("Podaj poprawny adres e-mail").max(200),
  phone: z
    .string()
    .trim()
    .min(7, "Podaj numer telefonu")
    .max(30)
    .regex(/^[0-9+\s()-]+$/, "Telefon może zawierać tylko cyfry"),
  message: z
    .string()
    .trim()
    .min(10, "Wiadomość jest zbyt krótka")
    .max(2000, "Wiadomość jest zbyt długa"),
  privacy: z
    .boolean()
    .refine((value) => value === true, "Zaakceptuj politykę prywatności"),
  website: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
