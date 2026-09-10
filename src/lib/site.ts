export const site = {
  name: "Jakub Adamski",
  role: "Trener Personalny",
  location: "Białystok",
  hero: {
    name: "Jakub Adamski",
    role: "Trener personalny · Białystok",
    headline: "Ruch to coś więcej niż trening.",
    description:
      "Pomagam zacząć, wrócić do formy albo trenować świadomie — z planem dopasowanym do Ciebie, Twojego celu i Twojego życia.",
    ctaPrimary: "Umów konsultację",
    ctaSecondary: "Poznaj ofertę",
  },
  about: {
    headline: "Ruch i trening są obecne w moim życiu od lat.",
    paragraphs: [
      "Sport był obecny w moim życiu już wcześniej — grałem w siatkówkę, chodziłem na SKS-y i reprezentowałem szkołę w zawodach. W wieku 15 lat zacząłem regularnie trenować na siłowni i równolegle rozpocząłem kickboxing. Przez kolejne lata nie ograniczałem się do jednego sposobu trenowania. Trening siłowy, ćwiczenia z własnym ciężarem, praca nad dynamiką i różne formy treningu pozwoliły mi dobrze poznać różne sposoby pracy nad ciałem i sprawnością.",
      "Przez ponad 8 lat trenowałem kickboxing, a od ponad 4 lat tańczę bachatę. Dziś trening i taniec są ważną częścią mojego życia, ale aktywność nie kończy się dla mnie na siłowni — lubię po prostu być w ruchu.",
      "Wcześniej pracowałem już jako trener personalny. Miałem własnych podopiecznych, prowadziłem zajęcia, układałem plany treningowe i pomagałem również w kwestiach związanych z żywieniem. Teraz wracam do pracy z ludźmi, łącząc to doświadczenie z latami własnego treningu.",
      "Dzięki temu na trening patrzę szerzej niż tylko przez pryzmat ciężaru na sztandze czy liczby powtórzeń. Liczy się dla mnie siła, sprawność, dynamika, koordynacja i to, jak ciało działa w ruchu. Chcę, żeby trening realnie pomagał lepiej funkcjonować na co dzień.",
    ],
    facts: [
      {
        value: "14 lat",
        label: "regularnego treningu na siłowni",
        labelShort: "treningu",
      },
      { value: "8+ lat", label: "kickboxingu" },
      { value: "4+ lata", label: "bachaty" },
    ] as { value: string; label: string; labelShort?: string }[],
  },
  audience: {
    headline: "Nie musisz być osobą, która kocha siłownię.",
    intro:
      "Współpraca nie jest tylko dla zaawansowanych. Pracuję z osobami w różnych sytuacjach — od powrotu do aktywności po trening uzupełniający do innej dyscypliny. Jeśli któraś z tych sytuacji brzmi znajomo, prawdopodobnie dobrze się dogadamy.",
    items: [
      {
        number: "01",
        title: "Wracasz do treningu",
        description:
          "Po przerwie chcesz wrócić do aktywności i potrzebujesz spokojnego, sensownego początku.",
      },
      {
        number: "02",
        title: "Nie czujesz się pewnie na siłowni",
        description:
          "Nie wiesz, co robić, jak wykonywać ćwiczenia albo jak ułożyć trening i wolisz zacząć z kimś, kto Ci to pokaże.",
      },
      {
        number: "03",
        title: "Chcesz być lepszy w tym, co już robisz",
        description:
          "Tańczysz, trenujesz sporty walki albo uprawiasz inną dyscyplinę? Trening może uzupełnić Twój główny sport o pracę nad siłą, stabilizacją, dynamiką, core czy innymi elementami, których potrzebujesz.",
      },
      {
        number: "04",
        title: "Dużo siedzisz i chcesz odzyskać sprawność",
        description:
          "Praca przy biurku i wiele godzin przed komputerem sprawiają, że ruszasz się coraz mniej. Chcesz odzyskać siłę, sprawność i swobodę ruchu.",
      },
      {
        number: "05",
        title: "Chcesz po prostu być w lepszej formie",
        description:
          "Chcesz poprawić siłę, kondycję, sylwetkę albo ogólną sprawność i potrzebujesz planu dopasowanego do siebie.",
      },
    ],
  },
  process: {
    label: "Jak pracuję",
    headline: "Prosty proces. Przemyślany trening.",
    steps: [
      {
        number: "01",
        title: "Zaczynamy od rozmowy",
        description:
          "Zanim spotkamy się na treningu, poznaję Twój cel, doświadczenie, oczekiwania i najważniejsze informacje dotyczące treningu. Możemy porozmawiać telefonicznie, przez Messenger lub e-mail.",
      },
      {
        number: "02",
        title: "Układam kierunek",
        description:
          "Na podstawie rozmowy dobieram sposób pracy do Twojego celu, poziomu i tego, jak wygląda Twoje życie.",
      },
      {
        number: "03",
        title: "Trenujemy",
        description:
          "Na treningu pokazuję Ci, jak wykonywać ćwiczenia i na bieżąco dopasowuję obciążenie oraz sposób pracy.",
      },
      {
        number: "04",
        title: "Robimy progres",
        description:
          "Obserwujemy postępy i stopniowo rozwijamy trening, zamiast bezmyślnie robić cały czas to samo.",
      },
    ],
  },
  services: {
    label: "Oferta",
    headline: "Wybierz sposób współpracy, który pasuje do Ciebie.",
    intro:
      "Od pojedynczego treningu po pełne prowadzenie przez cały miesiąc. Każda forma jest dopasowana do Twojego celu, poziomu i tego, jak wygląda Twoje życie.",
    single: {
      name: "Trening personalny",
      price: "120 zł",
      unit: "/ 60 min",
      description:
        "Indywidualny trening dopasowany do Twojego celu, poziomu i aktualnych możliwości.",
    },
    packages: {
      name: "Pakiety treningów",
      note: "Pakiety są przeznaczone do regularnej współpracy.",
      options: [
        { count: "4 treningi", price: "440 zł", per: "110 zł / trening" },
        { count: "8 treningów", price: "800 zł", per: "100 zł / trening" },
        { count: "12 treningów", price: "1080 zł", per: "90 zł / trening" },
      ],
    },
    coaching: {
      name: "Prowadzenie treningowe",
      tag: "Najbardziej kompleksowa opcja",
      price: "1500 zł",
      unit: "/ miesiąc",
      description:
        "Dla osób, które chcą regularnie trenować, mieć realny wpływ na kierunek swojej pracy i móc liczyć na moje wsparcie także poza treningami.",
      includes: [
        "12 treningów 1:1 w miesiącu",
        "indywidualny plan treningowy",
        "realny wpływ na kierunek i zawartość planu",
        "cotygodniowa konsultacja do 45 minut, jeśli jej potrzebujesz",
        "kontakt między treningami w sprawach związanych z treningiem",
        "wskazówki dotyczące odżywiania",
      ],
    },
    note: "Możliwość treningu w dwie osoby — szczegóły ustalamy indywidualnie.",
    location: {
      text: "Treningi odbywają się w Stars Gym w Białymstoku.",
      mapsLabel: "Zobacz na mapie",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Stars+Gym+Bia%C5%82ystok",
    },
  },
  faq: {
    label: "FAQ",
    headline: "Najczęściej zadawane pytania",
    items: [
      {
        question: "Jak wygląda pierwsze spotkanie?",
        answer:
          "Zanim spotkamy się na treningu, kontaktujemy się telefonicznie, przez Messenger lub e-mail i ustalamy najważniejsze informacje dotyczące współpracy. Na pierwszym spotkaniu przechodzimy do treningu i poznaję Cię już w praktyce.",
      },
      {
        question: "Czy muszę mieć doświadczenie w treningu?",
        answer:
          "Nie. Możesz przyjść zarówno jako osoba początkująca, jak i ktoś, kto trenuje od lat. Sposób prowadzenia i dobór ćwiczeń dopasowuję do Twojego poziomu.",
      },
      {
        question: "Czy mogę trenować w dwie osoby?",
        answer:
          "Tak. Możemy trenować w dwie osoby. Szczegóły i cenę ustalamy indywidualnie.",
      },
      {
        question: "Gdzie odbywają się treningi?",
        answer: "Treningi odbywają się w Stars Gym w Białymstoku.",
      },
      {
        question: "Czy mogę zacząć od pojedynczego treningu?",
        answer:
          "Tak. Nie musisz od razu decydować się na pakiet. Możesz zacząć od pojedynczego treningu i zobaczyć, czy taki sposób współpracy Ci odpowiada.",
      },
      {
        question: "Czy mogę zmienić ćwiczenie, którego nie lubię?",
        answer:
          "Jasne. Jeśli jakieś ćwiczenie Ci nie odpowiada, warto o tym powiedzieć. Szukamy wtedy rozwiązania, które nadal realizuje założony cel treningowy, ale lepiej pasuje do Ciebie.",
      },
      {
        question:
          "Czy mogę powiedzieć, na czym chcę się skupić podczas treningów?",
        answer:
          "Tak. Twój cel i priorytety są punktem wyjścia do planowania treningu. Jeśli zależy Ci szczególnie na określonym obszarze, umiejętności czy rodzaju pracy, uwzględniamy to w treningu.",
      },
      {
        question: "Co jeśli nie mogę przyjść na trening?",
        answer:
          "Zasady odwoływania i przekładania treningów określa Regulamin.",
      },
    ],
  },
  contact: {
    label: "Kontakt",
    headline: "Zacznijmy od rozmowy.",
    intro:
      "Opowiedz mi, czego szukasz i nad czym chcesz pracować. Zanim umówimy pierwszy trening, porozmawiamy o Twoim celu i ustalimy, czy taka forma współpracy będzie dla Ciebie odpowiednia.",
    form: {
      nameLabel: "Imię",
      namePlaceholder: "Jak masz na imię?",
      emailLabel: "E-mail",
      emailPlaceholder: "twoj@email.pl",
      phoneLabel: "Telefon",
      phonePlaceholder: "123 456 789",
      messageLabel: "Wiadomość",
      messagePlaceholder: "Napisz, czego szukasz…",
      privacyLabel: "Zapoznałem/am się z Polityką prywatności.",
      privacyHref: "/polityka-prywatnosci",
      submit: "Wyślij wiadomość",
      success: "Dziękuję za wiadomość. Odpiszę tak szybko, jak to możliwe.",
      error:
        "Coś poszło nie tak. Spróbuj ponownie lub napisz bezpośrednio na kontakt@jakubadamski.pl.",
    },
    channels: {
      title: "Możesz też napisać bezpośrednio",
      email: {
        label: "E-mail",
        value: "kontakt@jakubadamski.pl",
        href: "mailto:kontakt@jakubadamski.pl",
      },
      messenger: {
        label: "Facebook",
        value: "Jakub Adamski",
        href: "https://www.facebook.com/jakub.adamski.35513/",
      },
      instagram: {
        label: "Instagram",
        value: "@jakub_code_lift_dance_repeat",
        href: "https://www.instagram.com/jakub_code_lift_dance_repeat/",
      },
    },
  },
} as const;

export const nav = [
  { label: "O mnie", href: "#o-mnie" },
  { label: "Oferta", href: "#oferta" },
  { label: "Jak pracuję", href: "#jak-pracuje" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
] as const;
