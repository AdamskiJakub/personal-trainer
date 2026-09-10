import type { ReactNode } from "react";

export interface RegulaminDefinition {
  term: string;
  definition: string;
}

export interface RegulaminSection {
  number: string;
  title: string;
  paragraphs?: ReactNode[];
  definitions?: RegulaminDefinition[];
  list?: string[];
  afterList?: ReactNode[];
}

export const regulamin = {
  title: "Regulamin",
  subtitle: "Regulamin świadczenia usług treningu personalnego",
  sections: [
    {
      number: "§1",
      title: "Postanowienia ogólne",
      paragraphs: [
        "Niniejszy Regulamin określa zasady świadczenia usług treningu personalnego oraz usług prowadzenia treningowego przez Jakuba Adamskiego.",
        "Regulamin określa w szczególności zasady korzystania z usług, dokonywania płatności, rezerwowania i odwoływania treningów, korzystania z pakietów treningowych oraz zasady dotyczące bezpieczeństwa podczas treningów.",
        "Usługi świadczone są na terenie Stars Gym w Białymstoku, a także w innych miejscach, jeżeli zostanie to indywidualnie uzgodnione z Klientem.",
        "Treningi odbywają się w terminach ustalanych indywidualnie pomiędzy Trenerem a Klientem. Strona internetowa nie służy obecnie do automatycznej rezerwacji terminów ani dokonywania płatności za usługi.",
        "Rozpoczęcie współpracy następuje po indywidualnym ustaleniu jej warunków pomiędzy Trenerem a Klientem oraz dokonaniu wymaganej płatności.",
        "Trening personalny ma charakter usługowy i rekreacyjno-sportowy. Nie stanowi świadczenia usług medycznych, diagnostycznych ani rehabilitacji medycznej.",
        "Regulamin jest dostępny nieodpłatnie na stronie internetowej Trenera w sposób umożliwiający jego zapisanie i odtworzenie.",
      ],
    },
    {
      number: "§2",
      title: "Definicje",
      paragraphs: [
        "Na potrzeby niniejszego Regulaminu poniższe określenia oznaczają:",
      ],
      definitions: [
        {
          term: "Trener",
          definition:
            "Jakub Adamski, świadczący usługi treningu personalnego oraz prowadzenia treningowego na zasadach określonych w Regulaminie.",
        },
        {
          term: "Klient",
          definition:
            "osoba fizyczna korzystająca z usług Trenera lub zamierzająca rozpocząć z nim współpracę.",
        },
        {
          term: "Trening personalny",
          definition:
            "indywidualna sesja treningowa prowadzona przez Trenera, dostosowana do celu, poziomu zaawansowania, możliwości oraz aktualnej dyspozycji Klienta.",
        },
        {
          term: "Pakiet treningowy",
          definition:
            "z góry opłacony pakiet określonej liczby treningów personalnych, możliwych do wykorzystania w określonym okresie ważności.",
        },
        {
          term: "Prowadzenie treningowe",
          definition:
            "miesięczna forma współpracy obejmująca 12 treningów personalnych oraz dodatkowe elementy wsparcia określone w aktualnej ofercie Trenera.",
        },
        {
          term: "Trening 2:1",
          definition:
            "trening, w którym jednocześnie uczestniczy dwóch Klientów. Warunki oraz cena takiego treningu są ustalane indywidualnie przed rozpoczęciem współpracy.",
        },
        {
          term: "Regulamin",
          definition:
            "niniejszy Regulamin świadczenia usług treningu personalnego.",
        },
      ],
    },
    {
      number: "§3",
      title: "Zakres i sposób świadczenia usług",
      paragraphs: ["Trener świadczy usługi obejmujące:"],
      list: [
        "treningi personalne 1:1,",
        "treningi w formule 2:1,",
        "pakiety treningów personalnych,",
        "prowadzenie treningowe w formule miesięcznej.",
      ],
      afterList: [
        "Standardowy czas trwania jednego treningu personalnego wynosi 60 minut.",
        "Treningi personalne są prowadzone indywidualnie i mogą obejmować w szczególności pracę nad siłą, sprawnością, kondycją, koordynacją ruchową, mobilnością, techniką wykonywania ćwiczeń oraz innymi celami ustalonymi z Klientem.",
        "Zakres i sposób prowadzenia treningu są dobierane z uwzględnieniem celu Klienta, jego doświadczenia treningowego, możliwości, preferencji oraz informacji dotyczących jego aktualnej dyspozycji i stanu zdrowia przekazanych Trenerowi.",
        "Trener może na bieżąco modyfikować dobór ćwiczeń, obciążenie, intensywność oraz sposób prowadzenia treningu, jeżeli jest to uzasadnione celem współpracy, przebiegiem treningu lub aktualną dyspozycją Klienta.",
        "Treningi odbywają się w Stars Gym w Białymstoku, chyba że Trener i Klient indywidualnie uzgodnią inne miejsce.",
        "W przypadku treningów 2:1 zakres i sposób prowadzenia treningu są ustalane z uwzględnieniem potrzeb i celów obu uczestników.",
        "Prowadzenie treningowe jest miesięczną formą współpracy obejmującą 12 treningów personalnych oraz dodatkowe elementy wsparcia określone w aktualnej ofercie Trenera.",
        "Szczegółowe ceny poszczególnych usług, zasady korzystania z pakietów oraz warunki prowadzenia treningowego określają odpowiednie postanowienia Regulaminu oraz aktualna oferta Trenera.",
      ],
    },
    {
      number: "§4",
      title: "Zawarcie współpracy i rezerwacja treningów",
      paragraphs: [
        "Współpraca pomiędzy Trenerem a Klientem rozpoczyna się po ustaleniu przez obie strony zakresu współpracy oraz jej podstawowych warunków.",
        "Termin treningu jest ustalany indywidualnie pomiędzy Trenerem a Klientem, w szczególności za pośrednictwem telefonu, wiadomości, poczty elektronicznej lub komunikatora.",
        "Rezerwacja terminu następuje po jego uzgodnieniu przez Trenera i Klienta.",
        "Termin treningu jest przeznaczony dla Klienta, który dokonał jego rezerwacji. Klient zobowiązuje się do punktualnego stawienia się na umówiony trening.",
        "W przypadku korzystania z pakietu treningowego lub prowadzenia treningowego Klient może korzystać z treningów w ramach wykupionej usługi zgodnie z ustalonymi terminami oraz zasadami określonymi w Regulaminie.",
        "Strona internetowa Trenera ma charakter informacyjny i kontaktowy. Nie stanowi systemu automatycznej rezerwacji terminów ani sprzedaży usług.",
        "Samo przesłanie formularza kontaktowego lub nawiązanie kontaktu za pośrednictwem strony internetowej nie powoduje automatycznego zawarcia umowy ani rezerwacji terminu treningu.",
      ],
    },
    {
      number: "§5",
      title: "Ceny i płatności",
      paragraphs: [
        "Ceny usług świadczonych przez Trenera są określone w aktualnej ofercie dostępnej na stronie internetowej Trenera. W przypadkach, w których cena jest ustalana indywidualnie, jej wysokość jest uzgadniana z Klientem przed rozpoczęciem współpracy.",
        "Płatność za pojedynczy trening, pakiet treningowy lub prowadzenie treningowe następuje z góry, przed rozpoczęciem świadczenia danej usługi, chyba że Trener i Klient indywidualnie uzgodnią inaczej.",
        "W przypadku pakietu treningowego płatność obejmuje całość pakietu przed wykorzystaniem pierwszego treningu w ramach tego pakietu.",
        "W przypadku prowadzenia treningowego płatność obejmuje dany miesiąc współpracy i jest dokonywana z góry.",
        "Cena ustalona z Klientem przed dokonaniem płatności obowiązuje w odniesieniu do opłaconej usługi lub pakietu i nie ulega zmianie w trakcie ich wykorzystania.",
        "Zmiana cen usług dostępnych w aktualnej ofercie nie wpływa na usługi lub pakiety, które zostały już opłacone przez Klienta.",
        "Cena treningu 2:1 jest ustalana indywidualnie przed rozpoczęciem współpracy.",
      ],
    },
    {
      number: "§6",
      title: "Pakiety treningowe",
      paragraphs: [
        "Trener oferuje pakiety obejmujące określoną liczbę treningów personalnych. Aktualna liczba treningów oraz cena poszczególnych pakietów są określone w aktualnej ofercie Trenera.",
        "Pakiet treningowy jest opłacany z góry, przed rozpoczęciem korzystania z treningów objętych pakietem.",
        "Pakiet może być wykorzystywany wyłącznie przez Klienta, dla którego został zakupiony, chyba że Trener wyrazi zgodę na inne rozwiązanie.",
        "Okres ważności pakietu wynosi:",
      ],
      list: [
        "30 dni w przypadku pakietu 4 treningów,",
        "60 dni w przypadku pakietu 8 treningów,",
        "90 dni w przypadku pakietu 12 treningów.",
      ],
      afterList: [
        "Okres ważności pakietu rozpoczyna się od dnia pierwszego treningu w ramach danego pakietu, chyba że Trener i Klient ustalą inaczej.",
        "Niewykorzystane treningi należy wykorzystać w okresie ważności pakietu. Po jego upływie niewykorzystane treningi co do zasady wygasają.",
        "W uzasadnionych przypadkach, w szczególności z powodu dłuższej choroby, urazu lub innych wyjątkowych okoliczności, Trener może indywidualnie uzgodnić z Klientem przedłużenie okresu ważności pakietu.",
        "Pakiet nie stanowi rezerwacji konkretnych terminów treningowych. Terminy poszczególnych treningów są ustalane indywidualnie pomiędzy Trenerem a Klientem.",
        "Zasady dotyczące odwoływania i przekładania treningów objętych pakietem określa §8 Regulaminu.",
      ],
    },
    {
      number: "§7",
      title: "Prowadzenie treningowe",
      paragraphs: [
        "Prowadzenie treningowe jest miesięczną formą współpracy przeznaczoną dla Klientów, którzy chcą trenować regularnie oraz korzystać ze wsparcia Trenera również poza indywidualnymi treningami.",
        "W ramach prowadzenia treningowego Trener zapewnia:",
      ],
      list: [
        "12 indywidualnych treningów personalnych w miesiącu,",
        "indywidualny plan treningowy,",
        "możliwość wpływania przez Klienta na kierunek i zawartość planu treningowego,",
        "cotygodniową konsultację do 45 minut, w razie potrzeby,",
        "kontakt z Trenerem pomiędzy treningami w sprawach związanych z realizacją planu i treningiem,",
        "wskazówki dotyczące odżywiania i wsparcie w zakresie nawyków związanych z realizacją celu treningowego.",
      ],
      afterList: [
        "Zakres planu treningowego oraz sposób jego realizacji są ustalane z uwzględnieniem celu Klienta, jego możliwości, doświadczenia, preferencji oraz przebiegu współpracy.",
        "Trener może modyfikować plan treningowy w trakcie współpracy, jeżeli jest to uzasadnione postępami Klienta, jego aktualną dyspozycją, zmianą celu lub innymi okolicznościami związanymi z realizacją współpracy.",
        "Opłata za prowadzenie treningowe jest pobierana z góry za dany miesiąc współpracy, zgodnie z zasadami określonymi w §5 Regulaminu.",
        "Niewykorzystane w danym miesiącu treningi w ramach prowadzenia treningowego nie przechodzą automatycznie na kolejny miesiąc.",
        "W uzasadnionych przypadkach Trener może indywidualnie uzgodnić z Klientem inne zasady wykorzystania niewykorzystanych treningów, w szczególności ich przeniesienie na kolejny okres współpracy.",
        "Prowadzenie treningowe nie obejmuje automatycznego przedłużenia współpracy na kolejny miesiąc. Kontynuacja współpracy wymaga uzgodnienia jej dalszego trwania oraz dokonania płatności za kolejny okres.",
        "Wskazówki dotyczące odżywiania przekazywane w ramach prowadzenia treningowego mają charakter ogólnych wskazówek wspierających realizację celu treningowego i nie stanowią indywidualnej porady medycznej ani świadczenia dietetycznego wymagającego diagnozy lub leczenia.",
      ],
    },
    {
      number: "§8",
      title: "Odwoływanie i przekładanie treningów",
      paragraphs: [
        "Klient może odwołać lub przełożyć umówiony trening bez jego rozliczenia jako wykorzystanego, jeżeli poinformuje o tym Trenera najpóźniej do godziny 23:59 dnia poprzedzającego termin treningu.",
        "Odwołanie lub prośba o przełożenie treningu dokonana od godziny 00:00 w dniu, na który został zaplanowany trening, a także niepojawienie się Klienta na umówionym treningu, powoduje rozliczenie tego treningu jako wykorzystanego.",
        "Zasada określona w ust. 2 obowiązuje niezależnie od przyczyny odwołania lub nieobecności Klienta.",
        "W szczególnych sytuacjach Trener może, według własnego uznania, odstąpić od rozliczenia treningu jako wykorzystanego i umożliwić jego przełożenie. Jest to indywidualna decyzja Trenera i nie stanowi zmiany zasad obowiązujących przy kolejnych rezerwacjach.",
        "W przypadku konieczności odwołania lub przełożenia treningu przez Trenera, Trener poinformuje Klienta o tym możliwie niezwłocznie i zaproponuje inny termin treningu.",
        "Odwołanie lub przełożenie treningu przez Trenera nie powoduje pomniejszenia liczby treningów przysługujących Klientowi w ramach wykupionego pakietu lub prowadzenia treningowego.",
        "Jeżeli z przyczyn leżących po stronie Trenera przełożenie treningu na inny termin nie będzie możliwe, niewykorzystany trening zostanie odpowiednio przeniesiony na kolejny okres albo rozliczony z Klientem w inny uzgodniony sposób.",
        "W przypadku choroby, niedyspozycji, nagłej sytuacji osobistej, obowiązków zawodowych lub innych uzasadnionych okoliczności Trener może odwołać lub przełożyć wcześniej umówiony trening.",
        "Klient powinien poinformować Trenera o konieczności odwołania lub przełożenia treningu za pośrednictwem uzgodnionego kanału kontaktu, w szczególności telefonicznie, wiadomością, pocztą elektroniczną lub komunikatorem.",
        "Spóźnienie Klienta nie powoduje automatycznego przedłużenia czasu trwania treningu ani obniżenia jego ceny. Jeżeli pozwala na to harmonogram Trenera, Trener może według własnego uznania przedłużyć trening o czas spóźnienia Klienta.",
      ],
    },
    {
      number: "§9",
      title: "Bezpieczeństwo i obowiązki Klienta",
      paragraphs: [
        "Klient zobowiązuje się do przekazania Trenerowi przed rozpoczęciem współpracy informacji, które mogą mieć znaczenie dla bezpiecznego przeprowadzenia treningu, w szczególności informacji o urazach, dolegliwościach, przeciwwskazaniach do wysiłku fizycznego oraz innych istotnych ograniczeniach dotyczących aktywności fizycznej.",
        "Klient zobowiązuje się niezwłocznie poinformować Trenera o każdej zmianie swojego stanu zdrowia lub dyspozycji, która może mieć wpływ na możliwość bezpiecznego wykonania treningu.",
        "Klient zobowiązuje się informować Trenera podczas treningu o wystąpieniu bólu, zawrotów głowy, duszności, osłabienia, nudności lub innych niepokojących objawów.",
        "Trener może zmienić zakres, intensywność lub sposób wykonania ćwiczenia, a także przerwać lub zakończyć trening, jeżeli uzna, że jego dalsze prowadzenie może być niebezpieczne dla Klienta.",
        "Klient zobowiązuje się wykonywać ćwiczenia zgodnie z instrukcjami Trenera oraz korzystać ze sprzętu treningowego w sposób zgodny z jego przeznaczeniem.",
        "W przypadku wystąpienia objawów lub okoliczności wskazujących na możliwość zagrożenia zdrowia Klienta Trener może zalecić przerwanie treningu oraz, w razie potrzeby, skorzystanie z pomocy odpowiedniego specjalisty.",
        "Trening personalny nie zastępuje konsultacji lekarskiej ani diagnostyki medycznej. W przypadku wątpliwości dotyczących możliwości podejmowania aktywności fizycznej Klient powinien skonsultować się z odpowiednim specjalistą przed rozpoczęciem treningów.",
        "Klient zobowiązuje się do przestrzegania zasad bezpieczeństwa obowiązujących w miejscu prowadzenia treningu, w szczególności regulaminu obiektu, w którym odbywa się trening.",
      ],
    },
    {
      number: "§10",
      title: "Odpowiedzialność",
      paragraphs: [
        "Trener zobowiązuje się do świadczenia usług z należytą starannością, zgodnie z charakterem świadczonych usług oraz zasadami bezpieczeństwa.",
        "Trener ponosi odpowiedzialność za niewykonanie lub nienależyte wykonanie usług na zasadach określonych w obowiązujących przepisach prawa.",
        "Trener nie ponosi odpowiedzialności za skutki wynikające z podania przez Klienta nieprawdziwych, niepełnych lub nieaktualnych informacji dotyczących jego stanu zdrowia, możliwości fizycznych lub innych okoliczności mających znaczenie dla bezpiecznego prowadzenia treningu, o ile skutki te pozostają w związku z brakiem lub nieprawidłowością przekazanych informacji.",
        "Trener nie ponosi odpowiedzialności za skutki działań Klienta podejmowanych wbrew instrukcjom Trenera, zasadom bezpieczeństwa lub przeznaczeniu sprzętu treningowego, o ile skutki te wynikają z takich działań.",
        "Postanowienia niniejszego paragrafu nie wyłączają ani nie ograniczają odpowiedzialności Trenera w zakresie, w jakim takie ograniczenie byłoby niedopuszczalne na podstawie obowiązujących przepisów prawa.",
        "Klient przyjmuje do wiadomości, że aktywność fizyczna wiąże się z naturalnym ryzykiem wystąpienia urazów lub innych nieprzewidzianych reakcji organizmu, a zakres tego ryzyka zależy między innymi od indywidualnego stanu zdrowia, poziomu sprawności oraz sposobu wykonywania ćwiczeń.",
      ],
    },
    {
      number: "§11",
      title: "Reklamacje",
      paragraphs: [
        "Klient ma prawo zgłosić reklamację dotyczącą niewykonania lub nienależytego wykonania usługi przez Trenera.",
        "Reklamacja może zostać złożona za pośrednictwem poczty elektronicznej, wiadomości lub innego uzgodnionego kanału kontaktu.",
        "Reklamacja powinna, w miarę możliwości, zawierać opis problemu oraz okoliczności, których dotyczy.",
        "Trener rozpatruje reklamację bez zbędnej zwłoki i udziela Klientowi odpowiedzi.",
        "Samo niezadowolenie Klienta z efektów treningu, jego subiektywna ocena sposobu prowadzenia treningu lub brak oczekiwanych rezultatów nie stanowią podstawy do zwrotu zapłaconej ceny, jeżeli usługa została wykonana zgodnie z ustalonym zakresem i z należytą starannością.",
        "Jeżeli reklamacja okaże się zasadna, Trener może, stosownie do okoliczności, zaproponować odpowiednie rozwiązanie, w szczególności wykonanie niewykonanej części usługi w innym terminie, uzupełnienie usługi lub inne rozwiązanie przewidziane przez obowiązujące przepisy prawa.",
        "Postanowienia niniejszego paragrafu nie ograniczają praw Klienta wynikających z obowiązujących przepisów prawa.",
      ],
    },
    {
      number: "§12",
      title: "Odstąpienie od umowy",
      paragraphs: [
        "Klient będący konsumentem, który zawarł umowę na odległość lub poza lokalem przedsiębiorstwa, może odstąpić od umowy w przypadkach i terminie określonych w obowiązujących przepisach prawa.",
        "Co do zasady termin na odstąpienie od umowy zawartej na odległość wynosi 14 dni od dnia zawarcia umowy.",
        "Jeżeli Klient zażąda rozpoczęcia świadczenia usług przed upływem terminu do odstąpienia od umowy, Klient może być zobowiązany do zapłaty za świadczenia spełnione do chwili odstąpienia, zgodnie z obowiązującymi przepisami prawa.",
        "Jeżeli usługa zostanie w pełni wykonana przed upływem terminu do odstąpienia od umowy, za wyraźną zgodą Klienta i po poinformowaniu go o skutkach takiej zgody, prawo odstąpienia może nie przysługiwać na zasadach określonych w obowiązujących przepisach prawa.",
        "Oświadczenie o odstąpieniu od umowy Klient może złożyć w szczególności pocztą elektroniczną lub w inny sposób umożliwiający Trenerowi zapoznanie się z jego treścią.",
        "W przypadku skutecznego odstąpienia od umowy Trener dokonuje zwrotu należnych płatności zgodnie z obowiązującymi przepisami prawa.",
        "Postanowienia niniejszego paragrafu nie ograniczają praw Klienta wynikających z bezwzględnie obowiązujących przepisów prawa.",
      ],
    },
    {
      number: "§13",
      title: "Rozwiązanie współpracy i rozliczenie niewykorzystanych usług",
      paragraphs: [
        "Klient może w każdym czasie poinformować Trenera o rezygnacji z dalszej współpracy.",
        "Sama rezygnacja Klienta z dalszego korzystania z usług po rozpoczęciu realizacji opłaconego pakietu lub okresu prowadzenia treningowego nie powoduje automatycznie obowiązku zwrotu środków za niewykorzystane treningi.",
        "W przypadku rezygnacji z dalszej współpracy w trakcie realizacji pakietu treningowego rezygnacja nie powoduje automatycznego anulowania niewykorzystanych treningów. Klient może wykorzystać pozostałe treningi w ramach okresu ważności pakietu określonego w §6, chyba że Klientowi przysługuje zwrot na podstawie obowiązujących przepisów prawa.",
        "W przypadku prowadzenia treningowego rezygnacja z dalszej współpracy dotyczy kolejnych okresów współpracy i nie powoduje automatycznego zwrotu opłaty za rozpoczęty miesiąc.",
        "Jeżeli z przyczyn leżących po stronie Trenera opłacona usługa nie może zostać zrealizowana, niewykorzystana część usługi zostanie rozliczona z Klientem w sposób odpowiedni do okoliczności, z uwzględnieniem obowiązujących przepisów prawa.",
        "Postanowienia niniejszego paragrafu nie ograniczają praw Klienta wynikających z bezwzględnie obowiązujących przepisów prawa, w szczególności prawa do odstąpienia od umowy lub innych uprawnień związanych z niewykonaniem albo nienależytym wykonaniem usługi.",
      ],
    },
    {
      number: "§14",
      title: "Dane osobowe",
      paragraphs: [
        "Dane osobowe Klienta są przetwarzane przez Trenera w zakresie niezbędnym do świadczenia usług, kontaktu z Klientem oraz realizacji innych obowiązków wynikających z obowiązujących przepisów prawa.",
        "Szczegółowe informacje dotyczące przetwarzania danych osobowych, w tym podstaw prawnych przetwarzania, celów przetwarzania, okresu przechowywania danych oraz praw Klienta, zostały określone w Polityce prywatności dostępnej na stronie internetowej Trenera.",
        "Klient zobowiązuje się do podawania danych niezbędnych do realizacji współpracy zgodnych ze stanem faktycznym.",
        "Podanie danych osobowych jest dobrowolne, jednak podanie danych niezbędnych do realizacji danej usługi może być konieczne do rozpoczęcia lub prawidłowego wykonania współpracy.",
      ],
    },
    {
      number: "§15",
      title: "Zmiany Regulaminu",
      paragraphs: [
        "Trener może dokonywać zmian w Regulaminie w przypadku zmiany przepisów prawa, zakresu świadczonych usług, sposobu ich świadczenia lub z innych uzasadnionych przyczyn.",
        "O zmianach Regulaminu Trener informuje poprzez publikację jego zaktualizowanej wersji na stronie internetowej.",
        "Zmiany Regulaminu nie wpływają na warunki usług lub pakietów, które zostały opłacone przez Klienta przed wejściem zmian w życie.",
        "W przypadku trwającej współpracy zmiany Regulaminu mają zastosowanie do usług świadczonych po ich wejściu w życie, z zastrzeżeniem praw nabytych przez Klienta oraz obowiązujących przepisów prawa.",
      ],
    },
    {
      number: "§16",
      title: "Postanowienia końcowe",
      paragraphs: [
        "Regulamin jest dostępny na stronie internetowej Trenera w sposób umożliwiający jego zapisanie, odtworzenie i zapoznanie się z jego treścią.",
        "W sprawach nieuregulowanych w Regulaminie zastosowanie mają obowiązujące przepisy prawa polskiego.",
        "Jeżeli którekolwiek z postanowień Regulaminu okaże się nieważne lub bezskuteczne, nie wpływa to na ważność pozostałych postanowień Regulaminu, chyba że obowiązujące przepisy prawa stanowią inaczej.",
        "Regulamin wchodzi w życie z dniem 10 września 2026 r.",
      ],
    },
  ] as RegulaminSection[],
};
