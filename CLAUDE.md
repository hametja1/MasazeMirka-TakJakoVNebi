# Pokyny pro práci na tomto projektu

Statický prezentační web masérky (Astro, bez frameworku v prohlížeči). Web je hotový
a v provozu; úkoly jsou typicky drobné úpravy textů, cen a vzhledu. Cílem je udržet
kód čitelný i pro člověka, který do něj sáhne ručně.

## Komunikace

- Odpovídej česky a vykej.
- Po úpravě napiš jednou větou, co se změnilo a ve kterém souboru.

## Kde se mění obsah

- Ceny a délky masáží: `src/content/cenik.ts`. Nikde jinde ceny nepiš.
- Telefon, e-mail, web, adresy a termíny: `src/content/kontakt.ts`. Stránky i patička
  je berou odtud, takže se mění na jednom místě.
- Texty masáží: `src/pages/masaze.astro`. Text o masérce: `src/pages/o-mne.astro`.
- Titulek a popis pro vyhledávače: atributy `title` a `description` u `<Layout>`
  v konkrétní stránce.

## Styly

- Barvy, písma a rozměry jsou proměnné v `src/styles/tokens.css`. Vždy používej je,
  nikdy nepiš barvu natvrdo do pravidla.
- `base.css` = reset a typografie, `layout.css` = hlavička a patička,
  `components.css` = opakující se prvky, `pages.css` = styly jednotlivých stránek.
  Nové pravidlo patří do souboru podle toho, čeho se týká.
- Velikosti písma jsou laděné přes `clamp()`. Když je potřeba něco zvětšit nebo zmenšit,
  uprav existující `clamp()`, nepřidávej konkurenční pravidlo.
- Web je záměrně jen ve světlé variantě, tmavý režim neřešíme.

## Pravidla

- Bez ptaní nepřidávej nové závislosti, analytiku ani externí skripty a fonty.
- Nepřepisuj web na jiný framework a nezaváděj Tailwind.
- Zachovej skutečné URL (`/o-mne`, `/masaze`, `/cenik`, `/kontakt`), nevracej se
  k navigaci přes `#hash`.
- Obrázky patří do `public/img/`. Velké fotky před vložením zmenši; na portrét
  používáme poměr 4:5.
- Ikony jsou SVG sprite v `src/components/Icons.astro`, používají se přes
  `<svg><use href="#i-nazev" /></svg>`. Nová ikona patří do sprite, ne do stránky.
- Texty jsou psané hlasem masérky. Oprav překlep, ale nepřepisuj styl a nepřidávej
  marketingová tvrzení, která nedodala.
- Nevymýšlej zdravotní tvrzení ani ceny; co není zadané, nech být a zeptej se.

## Kontrola po úpravě

Před odevzdáním spusť `npm run build`. Když jde o vzhled, zkontroluj stránku i v šířce
zhruba 390 px, tedy na mobilu.
