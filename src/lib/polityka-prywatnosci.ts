import type { ReactNode } from "react";

export interface PolitykaSection {
  number: string;
  title: string;
  paragraphs?: ReactNode[];
  list?: string[];
  afterList?: ReactNode[];
}

export const politykaPrywatnosci = {
  title: "Polityka prywatności",
  subtitle: "Zasady przetwarzania danych osobowych",
  sections: [
    {
      number: "§1",
      title: "Postanowienia ogólne",
      paragraphs: [
        "Niniejsza Polityka prywatności określa zasady przetwarzania danych osobowych osób korzystających ze strony internetowej Trenera oraz kontaktujących się z nim za pośrednictwem dostępnych kanałów kontaktu.",
        "Administratorem danych osobowych jest Jakub Adamski.",
        "Kontakt z Administratorem w sprawach związanych z przetwarzaniem danych osobowych jest możliwy za pośrednictwem adresu e-mail: kontakt@jakubadamski.pl.",
        "Administrator przetwarza dane osobowe zgodnie z obowiązującymi przepisami prawa, w szczególności z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO).",
        "Korzystanie ze strony internetowej nie wymaga podawania danych osobowych, z wyjątkiem sytuacji, w których użytkownik sam zdecyduje się na kontakt za pośrednictwem formularza kontaktowego lub innego dostępnego kanału komunikacji.",
      ],
    },
    {
      number: "§2",
      title: "Zakres i źródło przetwarzanych danych",
      paragraphs: [
        "Administrator może przetwarzać dane osobowe przekazane dobrowolnie przez użytkownika za pośrednictwem formularza kontaktowego.",
        "W ramach formularza kontaktowego mogą być przetwarzane:",
      ],
      list: [
        "imię,",
        "adres e-mail,",
        "numer telefonu, jeżeli zostanie podany,",
        "treść wiadomości.",
      ],
      afterList: [
        "Dane są przekazywane Administratorowi bezpośrednio przez osobę, której dotyczą.",
        "Administrator nie wymaga podawania danych innych niż niezbędne do obsługi zapytania lub prowadzenia kontaktu.",
        "Użytkownik powinien przekazywać wyłącznie dane prawdziwe i aktualne oraz nie powinien przekazywać za pośrednictwem formularza danych osób trzecich bez odpowiedniej podstawy do ich przekazania.",
      ],
    },
    {
      number: "§3",
      title: "Cele i podstawy przetwarzania danych",
      paragraphs: [
        "Dane osobowe przekazane za pośrednictwem formularza kontaktowego są przetwarzane w celu:",
        "udzielenia odpowiedzi na przesłane zapytanie,",
        "nawiązania i prowadzenia kontaktu z użytkownikiem,",
        "przedstawienia informacji dotyczących oferowanych usług,",
        "podjęcia działań na żądanie użytkownika przed rozpoczęciem współpracy,",
        "w przypadku rozpoczęcia współpracy — realizacji i obsługi usług.",
        "Podstawą przetwarzania danych może być:",
        "niezbędność przetwarzania do podjęcia działań na żądanie osoby przed zawarciem umowy lub do wykonania umowy,",
        "prawnie uzasadniony interes Administratora, w szczególności polegający na obsłudze korespondencji, ochronie przed nadużyciami oraz dochodzeniu lub obronie przed roszczeniami,",
        "zgoda osoby, której dane dotyczą, jeżeli jest wymagana przez obowiązujące przepisy prawa.",
        "Podanie danych oznaczonych jako wymagane w formularzu jest dobrowolne, ale może być niezbędne do obsługi zapytania i udzielenia odpowiedzi.",
        "Podanie numeru telefonu jest dobrowolne.",
      ],
    },
    {
      number: "§4",
      title: "Odbiorcy danych i korzystanie z usług zewnętrznych",
      paragraphs: [
        "Dane przekazane za pośrednictwem formularza kontaktowego są przesyłane do Administratora za pośrednictwem infrastruktury strony internetowej, a następnie przekazywane za pośrednictwem usługi Resend w celu dostarczenia wiadomości na adres e-mail Administratora.",
        "Dostawca usługi pocztowej może przetwarzać dane zawarte w wiadomości w zakresie niezbędnym do świadczenia usługi przesyłania poczty elektronicznej.",
        "Strona internetowa korzysta z usług Vercel w zakresie hostingu i infrastruktury technicznej. W związku z korzystaniem ze strony mogą być przetwarzane standardowe dane techniczne związane z obsługą żądań, takie jak adres IP, informacje o urządzeniu lub przeglądarce oraz informacje dotyczące czasu i sposobu korzystania z infrastruktury.",
        "Administrator korzysta z zewnętrznych serwisów, takich jak Instagram, Facebook oraz Google Maps, wyłącznie poprzez zwykłe odnośniki prowadzące do tych serwisów. Strona internetowa nie osadza ich treści ani skryptów śledzących.",
        "Szczegółowe informacje dotyczące zasad przetwarzania danych przez zewnętrznych dostawców są dostępne w ich własnych politykach prywatności.",
      ],
    },
    {
      number: "§5",
      title: "Przechowywanie danych",
      paragraphs: [
        "Dane przekazane za pośrednictwem formularza kontaktowego są przechowywane w korespondencji e-mail Administratora.",
        "Dane są przechowywane przez okres niezbędny do obsługi zapytania i prowadzenia kontaktu, a następnie przez okres niezbędny do zabezpieczenia ewentualnych roszczeń lub wykonania obowiązków wynikających z przepisów prawa.",
        "Okres przechowywania danych może być uzależniony od charakteru kontaktu oraz podstawy prawnej ich przetwarzania.",
        "Dane mogą być przechowywane dłużej, jeżeli jest to wymagane przez obowiązujące przepisy prawa lub niezbędne do ustalenia, dochodzenia albo obrony przed roszczeniami.",
      ],
    },
    {
      number: "§6",
      title: "Prawa osoby, której dane dotyczą",
      paragraphs: [
        "Osobie, której dane są przetwarzane, przysługują prawa wynikające z obowiązujących przepisów prawa, w szczególności:",
      ],
      list: [
        "prawo dostępu do swoich danych,",
        "prawo do ich sprostowania,",
        "prawo do usunięcia danych,",
        "prawo do ograniczenia przetwarzania,",
        "prawo do przenoszenia danych, w przypadkach określonych w przepisach,",
        "prawo do wniesienia sprzeciwu wobec przetwarzania danych, jeżeli podstawą przetwarzania jest prawnie uzasadniony interes Administratora,",
        "prawo do cofnięcia zgody, jeżeli przetwarzanie odbywa się na podstawie zgody.",
      ],
      afterList: [
        "Cofnięcie zgody nie wpływa na zgodność z prawem przetwarzania dokonanego przed jej cofnięciem.",
        "W celu realizacji swoich praw osoba, której dane dotyczą, może skontaktować się z Administratorem za pośrednictwem adresu e-mail wskazanego w §1.",
        "Osobie, której dane dotyczą, przysługuje również prawo wniesienia skargi do właściwego organu nadzorczego, jeżeli uzna, że przetwarzanie jej danych osobowych narusza obowiązujące przepisy prawa.",
      ],
    },
    {
      number: "§7",
      title: "Cookies i podobne technologie",
      paragraphs: [
        "Strona internetowa nie wykorzystuje własnych plików cookies w celu śledzenia aktywności użytkowników.",
        "Strona nie wykorzystuje narzędzi analitycznych ani marketingowych takich jak Google Analytics, Google Tag Manager, Meta Pixel ani podobnych technologii.",
        "Strona nie wykorzystuje localStorage ani sessionStorage do przechowywania danych użytkowników.",
        "Niektóre dane techniczne mogą być przetwarzane przez dostawcę infrastruktury hostingowej w ramach standardowej obsługi strony internetowej i bezpieczeństwa infrastruktury.",
      ],
    },
    {
      number: "§8",
      title: "Bezpieczeństwo danych",
      paragraphs: [
        "Administrator stosuje odpowiednie środki techniczne i organizacyjne mające na celu ochronę danych osobowych przed ich utratą, nieuprawnionym dostępem, zmianą, ujawnieniem lub innym niezgodnym z prawem przetwarzaniem.",
        "Dostęp do danych przekazywanych za pośrednictwem formularza kontaktowego jest ograniczony do osób uprawnionych przez Administratora.",
        "Administrator podejmuje działania mające na celu zapewnienie bezpieczeństwa komunikacji oraz infrastruktury wykorzystywanej do obsługi strony internetowej.",
      ],
    },
    {
      number: "§9",
      title: "Zmiany Polityki prywatności",
      paragraphs: [
        "Administrator może dokonywać zmian w Polityce prywatności w szczególności w przypadku zmiany przepisów prawa, sposobu funkcjonowania strony internetowej, wykorzystywanych usług lub zakresu przetwarzanych danych.",
        "Aktualna wersja Polityki prywatności jest publikowana na stronie internetowej.",
        "Każda wersja Polityki prywatności zawiera informację o dacie jej wejścia w życie.",
      ],
    },
    {
      number: "§10",
      title: "Postanowienia końcowe",
      paragraphs: [
        "Niniejsza Polityka prywatności obowiązuje od dnia 10 września 2026 r.",
        "W sprawach nieuregulowanych w Polityce prywatności zastosowanie mają obowiązujące przepisy prawa.",
        "Polityka prywatności jest dostępna na stronie internetowej w sposób umożliwiający jej zapisanie i odtworzenie.",
      ],
    },
  ] as PolitykaSection[],
};
