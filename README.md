# Masáže Mirka – Tak jako v nebi

Prezentační web masérky Mirky Kotrčové. Statický web postavený na [Astru](https://astro.build),
bez frameworku na straně prohlížeče. Jediný JavaScript na stránce obsluhuje mobilní menu.

## Spuštění

```bash
npm install
npm run dev      # vývojový server na http://localhost:4321
npm run build    # produkční build do dist/
npm run preview  # náhled produkčního buildu
```

Vyžaduje Node 18.17 nebo novější.

## Struktura

```
src/
  pages/        jedna stránka = jeden soubor = jedna URL
                index.astro (/), o-mne.astro, masaze.astro, cenik.astro, kontakt.astro
  layouts/      Layout.astro  – hlavička, patička, meta tagy, načtení stylů a fontů
  components/   Header, Footer, Icons (SVG sprite), PriceList, PlaceCard
  content/      cenik.ts      – ceny a délky masáží
                kontakt.ts    – telefon, e-mail, web, adresy, termíny
  styles/       tokens.css    – barvy, písma, rozměry (identita webu)
                base.css      – reset, typografie, sdílené třídy
                layout.css    – hlavička a patička
                components.css– ornament, tlačítka, seznam kontaktů
                pages.css     – styly jednotlivých stránek
public/
  img/          nebe.jpg (pozadí), strom.jpg, mirka.jpg (portrét),
                poukaz.jpg (dárkový poukaz), og.jpg (náhled při sdílení)
  favicon.svg, robots.txt
```

## Kde se co mění

| Co                                 | Kde                                                          |
| ---------------------------------- | ------------------------------------------------------------ |
| Ceny a délky masáží                | `src/content/cenik.ts`                                       |
| Telefon, e-mail, adresy, termíny   | `src/content/kontakt.ts`                                     |
| Texty masáží                       | `src/pages/masaze.astro`                                     |
| Text o masérce                     | `src/pages/o-mne.astro`                                      |
| Barvy a písma                      | `src/styles/tokens.css`                                      |
| Titulek a popis stránky pro Google | atribut `title` a `description` u `<Layout>` v každé stránce |
| Doména pro sitemapu a sdílení      | `astro.config.mjs` (konstanta `SITE`) a `public/robots.txt`  |

## Písma

Písma Cinzel, Cormorant Garamond, EB Garamond a Parisienne se načítají přes balíčky
`@fontsource/*`, tedy z vlastní domény, ne ze serverů Googlu. Kvůli GDPR je to v Česku
čistší řešení. Pokud by některý řez v balíčku chyběl a build na tom spadl, upravte
příslušný `import` v `src/layouts/Layout.astro`.

## Nasazení na Cloudflare Pages

1. Repozitář nahrajte na GitHub.
2. V Cloudflare dashboardu zvolte **Workers & Pages → Create → Pages → Connect to Git**
   a vyberte repozitář.
3. Nastavení buildu: framework preset **Astro**, build command `npm run build`,
   output directory `dist`.
4. Po prvním nasazení přidejte v záložce **Custom domains** vlastní doménu a nasměrujte
   na ni DNS podle pokynů Cloudflare. HTTPS certifikát se vystaví sám.
5. Doména: hlavní varianta je `https://masazemirka-takjakovnebi.cz` (bez www),
   `www` se na ni přesměrovává pravidlem Redirect Rules v Cloudflare.

Každý push do větve `main` nasadí novou verzi, pull requesty dostanou náhledovou adresu.

## Co ještě chybí

- Text ke klasické masáži na stránce Masáže (v ceníku už je).
- Odkaz na rezervační systém, až bude vybraný – přibude k tlačítkům „Objednat se“.
