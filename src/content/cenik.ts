// Ceník. Pro změnu ceny nebo délky stačí upravit tento soubor.
export type Varianta = { delka: string; cena: string };
export type Polozka = { nazev: string; popis?: string; varianty: Varianta[] };

export const cenik: Polozka[] = [
  {
    nazev: 'Hluboce relaxační masáž',
    popis: 'celé tělo včetně hlavy a obličeje',
    varianty: [
      { delka: '60 min', cena: '1 300 Kč' },
      { delka: '120 min', cena: '2 500 Kč' },
    ],
  },
  {
    nazev: 'Klasická masáž',
    varianty: [{ delka: '60 min', cena: '1 100 Kč' }],
  },
  {
    nazev: 'AromaTouch',
    popis: 'esenciální oleje dōTERRA · hlava, záda, chodidla',
    varianty: [{ delka: '60 min', cena: '1 350 Kč' }],
  },
  {
    nazev: 'Indická masáž hlavy',
    popis: 'v sedě, v bavlněném tričku',
    varianty: [{ delka: '60 min', cena: '1 100 Kč' }],
  },
  {
    nazev: 'Dárkový poukaz',
    popis: 'na vybranou masáž',
    varianty: [{ delka: 'dle výběru', cena: 'dle masáže' }],
  },
];
