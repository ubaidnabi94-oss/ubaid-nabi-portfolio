# Ubaid Nabi — Personal Portfolio

A responsive, single-page portfolio built with HTML, CSS and vanilla JavaScript. The content presents Ubaid as a first-semester computer science student and keeps projects and achievements truthful and ready to update.

## Publish with GitHub Pages

1. Create a repository on GitHub.
2. Upload all six files in this folder to the repository root. `index.html`, `style.css`, `script.js`, `ubaid-nabi.png`, `favicon.svg` and `README.md` should appear together at the top level.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
5. Use the site address GitHub shows on that Pages screen.

To make future changes, edit the same files, then commit or upload the updated files to the repository. GitHub Pages will publish the new version.

## Run locally

Open `index.html` in a browser, or serve this folder with a local static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000` from this folder. The Google Fonts link is optional; the site has local system-font fallbacks.

## Update the site

- Replace `ubaid-nabi.png` to change the portrait.
- Add project objects to the `projects` array near the top of `js/script.js`. Each supports `name`, `image`, `imageAlt`, `description`, `technologies`, `github`, `live` and `details`.
- Update the `milestones` array in `js/script.js` as new steps happen. Future goals are labeled as future goals.
- Social links use the supplied Facebook link, Telegram username `@Ubi6266`, WhatsApp username `@ubaidnabi07`, and Instagram handle `@ubai.d2821`.
- The WhatsApp link is `https://wa.me/ubaidnabi07`. Because a username key is required, first-time visitors may need that key to start a chat. The key is not included on this public page.
- The contact form uses `mailto:` to prepare an email draft. It does not send or store messages itself.

## Structure

```text
index.html
style.css
script.js
ubaid-nabi.png
favicon.svg
README.md
```
