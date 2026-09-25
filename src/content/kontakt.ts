// Kontaktní údaje na jednom místě. Používá je úvodní stránka, patička i stránka Kontakt.
export const kontakt = {
  jmeno: "Mirka Kotrčová",
  znacka: "Masáže Mirka",
  motto: "Tak jako v nebi.",
  telefon: "+420 739 562 244",
  telefonHref: "tel:+420739562244",
  email: "takjakovnebi@gmail.com",
  web: "www.masazemirka-takjakovnebi.cz",
};

export type Misto = {
  mesto: string;
  ulice: string;
  mapa: string;
  terminy?: string;
};

// Pořadí v poli určuje pořadí na webu. Dobříš je záměrně první.
export const mista: Misto[] = [
  {
    mesto: "Dobříš",
    ulice: "Na kole 726",
    mapa: "https://mapy.cz/?q=Na%20kole%20726%2C%20Dob%C5%99%C3%AD%C5%A1",
    terminy: "Úterý až pátek",
  },
  {
    mesto: "Praha 6 – Bubeneč",
    ulice: "Jaselská 542/32",
    mapa: "https://mapy.cz/?q=Jaselsk%C3%A1%20542%2F32%2C%20Praha%206",
    terminy: "Pondělky a po domluvě pátky",
  },
];
