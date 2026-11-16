# Michelle Christiansen — Portfolio

Live site: https://mlc273.github.io/portfolio

A responsive four-page portfolio built with Next.js and Tailwind CSS, published with GitHub Pages.

- **Edit your content** in `src/data/profile.js` (bio, work history, projects, tools).
- **Assignment One** is the first version of this site, saved as plain files in `public/assignment-one/`
  and linked from the header. It's a frozen copy, so changes to `src/` don't affect it.
- **Deploys** run automatically through `.github/workflows/deploy.yml` on every push to `main`.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — Home and recent articles
- `/about` — About and social links
- `/projects` — Selected projects
- `/uses` — Recommended tools and equipment

Use the theme button in the header to switch between light and dark modes. The selection is saved in the browser.

Build and run the production version:

```bash
npm run build
npm run start
```

