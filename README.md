# Ubaid Nabi — Personal Portfolio

A premium, cinematic red-and-black portfolio built with plain **HTML, CSS and JavaScript** (no frameworks, no build step, no dependencies besides Google Fonts).

## Run it locally

**Quickest:** double-click `index.html` to open it in your browser.

**Recommended (local server):**

```bash
cd portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

## Folder structure

```
portfolio/
├── index.html               Page structure and all sections
├── README.md
├── css/style.css            Design system (colours, type, layout, animations)
├── js/script.js             Navigation, animations, rendering, form logic
├── data/                    ← the files you edit as you grow
│   ├── projects.js          Add projects here
│   ├── journey.js           Timeline milestones
│   ├── achievements.js      Certificates, awards, competitions, courses
│   └── social.js            Social links
└── assets/
    ├── images/              profile-photo.jpg / .webp, profile-photo-sm.webp
    │   └── projects/        (create this) put project screenshots here
    └── icons/favicon.svg
```

## How to update the site

### Add a project
Open `data/projects.js` and add an object inside the array:

```js
{
  title: "My First App",
  description: "A short description of what it does.",
  image: "assets/images/projects/my-first-app.jpg",
  tech: ["Python", "HTML", "CSS"],
  github: "https://github.com/your-username/my-first-app",
  live: "https://example.com",
  details: "https://example.com/details"
}
```
Only `title` and `description` are required. The "Projects Coming Soon" empty state disappears automatically once there is at least one project.

### Add an achievement
Open `data/achievements.js` and add an entry (type, title, issuer, date, description, link). The placeholder is replaced automatically.

### Update the journey
Edit `data/journey.js`. Each milestone has a `status`: `done`, `active` or `future`. Future goals are visibly marked as goals, not achievements.

### Add your social profile links
Exact profile URLs weren't provided, so none were invented. In `data/social.js`, paste the real URL into `url` for Instagram, Facebook and Telegram. Until then each shows your handle as a non-clickable "link soon" item. Email is already a working `mailto:` link.

### Change the photo
Replace `assets/images/profile-photo.jpg` and `profile-photo.webp` (keep the names). The crop focus is set by `object-position` on `.portrait__frame img` in `css/style.css`.

### Change colours
All colours are CSS variables at the top of `css/style.css` (`--red`, `--red-deep`, `--bg`, …).

## Notes

- **Contact form:** it is a frontend-only form. It validates input but sends nothing, and says so on screen. To make it real, connect a form service (e.g. Formspree, Web3Forms) or your own backend and replace the submit handler in `js/script.js`.
- **Accessibility:** semantic landmarks, skip link, keyboard-friendly menu, visible focus states, `aria-current` on the active link, and full `prefers-reduced-motion` support (animations and the particle canvas are turned off).
- **Fonts:** loaded from Google Fonts (Space Grotesk, Inter, JetBrains Mono). Offline, the site falls back to system fonts.
- **Hosting:** upload the folder as-is to GitHub Pages, Netlify or Vercel.
