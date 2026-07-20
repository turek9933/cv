# tomaszturek.fit — założenia projektu

## Cel

Self-hosted strona CV/portfolio prezentująca osobę i projekty (T-Learning,
Product-Catalogue, Rohan, DOCX-App) z linkami do live demo. Jedna strona
typu long-scroll, trzy motywy wizualne, dwa języki.

## Zakres (scope)

Świadomie prosty projekt — bez CMS, bez backendu, bez bazy danych. Cała
treść jako statyczne dane w repo. Priorytet: szybka implementacja,
łatwe utrzymanie przez jedną osobę.

Poza zakresem (na teraz): blog, panel admina, formularz kontaktowy z
backendem (link mailto lub link do LinkedIn wystarczy), analytics poza
czymś minimalnym self-hosted (opcjonalnie Plausible/Umami, nie w v1).

## Stack

- Next.js (App Router), TypeScript, `output: export` — brak treści
  dynamicznej per-request (wszystko z `content/` w buildzie), więc
  statyczny eksport jest wystarczający; kontener to lekki serwer
  plików (nginx alpine) zamiast runtime Node.js
- Tailwind CSS
- next-intl — routing PL/EN (`/pl`, `/en`), słowniki jako pliki JSON per język

## Motywy

Trzy tryby: `dark` (domyślny), `light`, `simple`.

Kolor akcentu dla `dark`/`light` domyślnie zielony (klasyczny terminal).
Wartość ma siedzieć w jednej CSS variable (np. `--terminal-accent`) w
`globals.css`, nie rozproszona po komponentach — zmiana koloru to
edycja jednej linii, nie refaktor.

- `dark` / `light` — wariant terminalowy: monospace, prompt-style
  nawigacja, karty projektów jako "commit cards"
- `simple` — układ CV-podobny: sans-serif, klasyczne karty, bez
  efektów terminalowych, pod rekrutera nietechnicznego

### Mechanizm

`dark`/`light` różnią się tylko paletą (CSS variables) — to jeden
layout terminalowy w dwóch kolorystykach. `simple` to osobny zestaw
komponentów prezentacyjnych dla tych samych danych, nie wariant CSS tego
samego DOM-u (układ terminalowy i CV-podobny są strukturalnie różne).

Stan motywu: React Context (`ThemeProvider`) + `localStorage`. Wartość
motywu ląduje jako `data-theme` na `<html>`, Tailwind czyta ją przez
`data-[theme=...]:` warianty lub CSS variable overrides w
`globals.css`.

Każda sekcja (`Hero`, `Projects`, `About`, `Timeline`, `Skills`,
`Contact`) ma dwa komponenty prezentacyjne: `*.terminal.tsx` i
`*.simple.tsx`, oba czytają z tego samego źródła danych. Komponent
kontenerowy (`Hero.tsx`) wybiera wariant na podstawie kontekstu motywu.

## Treść

Statyczne pliki TypeScript w `content/`, typowane, z kluczami `pl`/`en`
dla każdego pola tekstowego.

```
content/
  about.ts
  projects.ts
  timeline.ts
  skills.ts
  cv/
    cv-pl.pdf
    cv-en.pdf
```

Przykładowy typ danych projektu:

```typescript
type Project = {
  slug: string
  title: { pl: string; en: string }
  description: { pl: string; en: string }
  stack: string[]
  demoUrl?: string
  repoUrl?: string
}
```

Zmiana treści = edycja pliku, bez ruszania logiki komponentów.

## Struktura sekcji (long-scroll, jedna strona)

1. **Hero** — imię, rola, w wariancie terminalowym: animowany prompt
   uruchamiający "skrypt" strony
2. **About** — krótki opis, kilka zdań o hobby (elektronika, homelab)
   bez szczegółów lokalizacyjnych
3. **Timeline** — studia, praktyki, kluczowe kamienie milowe (kilka
   pozycji, nie pełny życiorys)
4. **Skills** — stack jako pogrupowane tagi (frontend, backend,
   DevOps/infra), osobna sekcja niezależna od kart projektów
5. **Projects** — karty: T-Learning, Product-Catalogue, Rohan,
   DOCX-App — tytuł, krótki opis, stack, link do repo i live demo
6. **Contact** — mail, GitHub, LinkedIn, przycisk pobrania CV (PDF,
   osobny plik per język)

## CV jako PDF

Statyczny plik PDF per język w `content/cv/`, link do pobrania w sekcji
Contact. Generowany ręcznie (nie generowany dynamicznie ze strony) —
upraszcza implementację, nie wymaga silnika renderującego PDF.

## Deployment

Ten sam wzorzec co reszta infrastruktury:

- Dockerfile (multi-stage build: Next.js `output: export` w etapie
  builda, finalny obraz to nginx alpine serwujący wyeksportowane pliki)
- Docker Compose service, port z puli 3000–3009
- Caddy `virtualHosts` wpis routujący `tomaszturek.fit` na lokalny port
- Cloudflare Tunnel — publiczny dostęp bez otwierania portów, TLS
  terminowany na Cloudflare
- Systemd unit wrapujący `docker compose up` dla tej usługi (zgodnie z
  istniejącym wzorcem per-app)

## Kolejność budowy (pod ograniczony czas)

1. Szkielet Next.js + Tailwind + routing next-intl (PL/EN działa,
   pusta strona)
2. System motywów: `ThemeProvider`, `data-theme`, przełącznik w UI,
   trzy palety w `globals.css` — bez pełnych komponentów sekcji,
   wystarczy Hero jako proof of concept
3. Typy i dane w `content/` — uzupełnienie treści dla wszystkich sekcji
4. Komponenty sekcji, wariant terminalowy (`dark`/`light` gratis, bo to
   ta sama struktura w innych kolorach)
5. Komponenty sekcji, wariant `simple`
6. Dockerfile + Compose + wpis w Caddy + Cloudflare Tunnel — deploy
7. Przegląd końcowy: responsywność, kontrast kolorów w obu trybach,
   test PL/EN

## Otwarte decyzje (do ustalenia w trakcie implementacji)

- Dokładny odcień zieleni i pozostałe stopnie palety `dark`/`light`
- Treść i liczba pozycji w Timeline
