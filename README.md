# Misha Saraf — Portfolio

A React + TypeScript portfolio site: research, projects, experience, Model UN,
achievements and letters of recommendation. Every certificate, letter and paper
can be opened in an in-page viewer.

## Run it locally

You'll need [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

This produces a static `dist/` folder you can deploy anywhere (Vercel, Netlify,
GitHub Pages…). `npm run preview` serves the built version locally first.

## Adding certificates, letters and papers

1. Put the file (image or PDF) in the `public/` folder, e.g.
   `public/certificates/go-coderz.jpg`.
2. In `src/data/profile.ts`, add its path to the entry:

```ts
{ event: "Go Coderz", result: "Coding Champion", level: "National", grade: 10,
  certificate: "/certificates/go-coderz.jpg" },
```

That's it — a paper-clip icon appears next to the entry and opens the file.

| What | Field | Folder |
| --- | --- | --- |
| Achievement or MUN certificate | `certificate` | `public/certificates/` |
| Internship letter of recommendation ("Here's what they had to say") | `lor` | `public/letters/` |
| Research paper | `pdf` | `public/research/` |

Each internship already has a commented-out `lor` line — save the PDF with that
name and remove the `//`.

## Where everything lives

- **All content:** `src/data/profile.ts` — profile, grades, research papers,
  projects, internships, MUN conferences, achievements, letters. Edit that file
  to update anything without touching layout code.
- **Research papers:** the `research` array. `abstract`, `status`, `venue`,
  `year` and `url` are optional and only appear once filled in.
- **Projects:** the `projects` array, taken from github.com/Mishasaraf.
  The optional `context` line shows in italics under the description.
- **Colours, fonts, spacing:** `src/styles/global.css` — design tokens are the
  CSS variables at the top (`:root`).
- **Pop-up viewer:** `src/components/DocModal.tsx` (the pop-up) and
  `src/components/DocLink.tsx` (the button that opens it).
- **Sections:** one file each in `src/components/`, in page order in `src/App.tsx`.

## Stack

Vite + React 18 + TypeScript, fonts self-hosted via Fontsource (Alegreya,
Alegreya Sans, Alegreya Sans SC). No backend — it's a static site.
