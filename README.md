# CV
<i>Tomasz Turek\
2026</i>

[Polski](#życiorys) | [English](#curriculum-vitae)

# Życiorys

# Spis treści

- [Opis](#opis)
- [Funkcjonalności](#funkcjonalności)
- [Architektura](#architektura)
- [Co zostało zrealizowane](#co-zostało-zrealizowane)
- [Instalacja](#instalacja)
- [Docker](#docker)
- [Technologie](#technologie)
- [Licencja](#licencja)


## Opis

**CV** to statyczna strona portfolio/CV zbudowana przy użyciu Next.js (App Router) w TypeScript.<br>
Prezentuje osobę i projekty z linkami do repozytoriów oraz wersji demo. Trzy motywy wizualne, dwa języki (PL/EN).

Brak CMS, backendu i bazy danych — cała treść w plikach JSON i18n. Strona generowana statycznie (`output: export`) i serwowana przez nginx.


## Funkcjonalności

- **Long-scroll:** jedna strona z wieloma sekcjami (Hero, About, Timeline, Skills, Projects, Contact).
- **Trzy motywy:** dark (domyślny terminalowy), light (jasny terminalowy), simple (CV-podobny, sans-serif).
- **Internacjonalizacja:** obsługa języka polskiego i angielskiego (next-intl).
- **Pobieranie CV:** link do pliku PDF w sekcji kontakt.
- **Kontakt:** mail, GitHub, LinkedIn.
- **Responsywność:** dostosowanie do różnych rozmiarów ekranów.


## Architektura

- **Podział na foldery:** `app`, `components`, `context`, `i18n`.
- **Routing:** Next.js App Router z `[locale]` dla obsługi języków (`/en`, `/pl`).
- **System motywów:** React Context (`ThemeProvider`) + `localStorage`, `data-theme` na `<html>`.
- **Komponenty sekcji:** każda sekcja (Hero, About, itd.) ma dwa warianty — `terminal.tsx` (dark/light) i `simple.tsx` (CV).
- **Treść:** pliki JSON w `i18n/locales/` per język.
- **Eksport statyczny:** `output: export`, finalny obraz to nginx alpine.
- **Infrastruktura:** Docker + docker-compose.


## Co zostało zrealizowane

- Pełna struktura strony (6 sekcji).
- Działające przełączanie języków (PL/EN).
- Trzy motywy wizualne z zapisem stanu w `localStorage`.
- Komponenty prezentacyjne dla wariantów terminalowego i CV.
- Responsywny interfejs (Tailwind CSS v4).
- Konfiguracja Docker + nginx.
- Dane projektów z polami `author` i `date`.


## Instalacja

### Wymagania wstępne

- Node.js >= 20
- Bun (lub npm/yarn/pnpm)

### Instalacja

1. **Zainstaluj zależności:**
   ```bash
   bun install
   ```

2. **Uruchom serwer deweloperski:**
   ```bash
   bun dev
   ```

3. **Otwórz w przeglądarce:** [http://localhost:3000](http://localhost:3000)

### Budowanie wersji produkcyjnej

```bash
bun run build
```

Gotowe pliki statyczne znajdują się w katalogu `out/`.


## Docker

### Wymagania wstępne

- Docker
- Docker Compose

### Budowanie obrazu

```bash
docker build -t cv .
```

### Uruchamianie

```bash
docker compose up -d
```

Strona będzie dostępna pod adresem [http://localhost:3000](http://localhost:3000).


### Zatrzymywanie

```bash
docker compose down
```

### Uwagi

- Port 3000 w kompozycji mapuje na port 80 kontenera (nginx).
- Przekierowanie z `/` na `/en` obsługiwane przez nginx.
- Pliki statyczne serwowane z `Cache-Control: public, immutable` dla assetów (CSS, JS, obrazy).


## Technologie

- Next.js 16 (App Router, `output: export`)
- TypeScript
- Tailwind CSS v4
- next-intl
- Bun
- Docker + nginx alpine
- ESLint


## Licencja

MIT &copy; 2026 Tomasz Turek — zobacz [LICENSE](LICENSE)

---

# Curriculum Vitae

# Table of Contents

- [Description](#description)
- [Features](#features)
- [Architecture](#architecture)
- [What has been implemented](#what-has-been-implemented)
- [Installation](#installation-1)
- [Docker](#docker-1)
- [Technologies](#technologies-1)
- [License](#license)


## Description

**CV** is a static portfolio/CV page built with Next.js (App Router) in TypeScript.<br>
It presents a person and their projects with links to repositories and live demos. Three visual themes, two languages (PL/EN).

No CMS, backend, or database — all content is stored in i18n JSON files. The page is statically generated (`output: export`) and served via nginx.


## Features

- **Long-scroll:** single page with multiple sections (Hero, About, Timeline, Skills, Projects, Contact).
- **Three themes:** dark (default terminal), light (bright terminal), simple (CV-like, sans-serif).
- **Internationalization:** Polish and English language support (next-intl).
- **CV download:** PDF file link in the contact section.
- **Contact:** email, GitHub, LinkedIn.
- **Responsive:** adapts to different screen sizes.


## Architecture

- **Folder structure:** `app`, `components`, `context`, `i18n`.
- **Routing:** Next.js App Router with `[locale]` for language support (`/en`, `/pl`).
- **Theme system:** React Context (`ThemeProvider`) + `localStorage`, `data-theme` on `<html>`.
- **Section components:** each section (Hero, About, etc.) has two variants — `terminal.tsx` (dark/light) and `simple.tsx` (CV).
- **Content:** JSON files in `i18n/locales/` per language.
- **Static export:** `output: export`, final image is nginx alpine.
- **Infrastructure:** Docker + docker-compose.


## What has been implemented

- Full page structure (6 sections).
- Working language switch (PL/EN).
- Three visual themes with `localStorage` persistence.
- Presentation components for terminal and CV variants.
- Responsive interface (Tailwind CSS v4).
- Docker + nginx configuration.
- Project data with `author` and `date` fields.


## Installation

### Prerequisites

- Node.js >= 20
- Bun (or npm/yarn/pnpm)

### Setup

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Start the development server:**
   ```bash
   bun dev
   ```

3. **Open in browser:** [http://localhost:3000](http://localhost:3000)

### Production build

```bash
bun run build
```

Static files are generated in the `out/` directory.

---

## Docker

### Prerequisites

- Docker
- Docker Compose

### Building the image

```bash
docker build -t cv .
```

### Running

```bash
docker compose up -d
```

The site will be available at [http://localhost:3000](http://localhost:3000).


### Stopping

```bash
docker compose down
```

### Notes

- Port 3000 in compose maps to container port 80 (nginx).
- Redirect from `/` to `/en` is handled by nginx.
- Static assets (CSS, JS, images) are served with `Cache-Control: public, immutable`.


## Technologies

- Next.js 16 (App Router, `output: export`)
- TypeScript
- Tailwind CSS v4
- next-intl
- Bun
- Docker + nginx alpine
- ESLint


## License

MIT &copy; 2026 Tomasz Turek — see [LICENSE](LICENSE)
