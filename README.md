# mayank.dev — Portfolio

A static portfolio site for Mayank Purohit (Full-Stack Developer — Laravel, PHP, REST APIs).
Plain HTML/CSS/JS, no build step, no dependencies — deploys straight to GitHub Pages.

## Files
- `index.html` — all page content
- `style.css` — design system + layout
- `script.js` — typed-JSON hero animation, mobile nav
- `mayank_purohit_resume.pdf` — the résumé served by the "Download résumé" button

## Run it locally
Just open `index.html` in a browser — no server needed. Or, for a local server:
```
npx serve .
```

## Deploy on GitHub Pages (free, ~2 minutes)

1. Create a new **public** GitHub repo — e.g. `mayankpurohit14.github.io` if you want it at the
   root of your GitHub domain, or any name (e.g. `portfolio`) if you're fine with a `/portfolio` path.
2. Push these files to the repo root:
   ```
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub: go to the repo → **Settings** → **Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
5. Wait ~1 minute — your site goes live at:
   - `https://<your-username>.github.io/` (if the repo is named `<your-username>.github.io`), or
   - `https://<your-username>.github.io/<repo-name>/` (any other repo name)

## To update later
Edit the relevant file (`index.html` for content, `style.css` for styling) and:
```
git add .
git commit -m "Update content"
git push
```
GitHub Pages redeploys automatically on every push to `main`.

## Notes
- Swap `mayank_purohit_resume.pdf` for a newer version any time — the download button always points to that filename.
- Phone number was left off the public page on purpose to cut down on spam/scraping; email + LinkedIn are the contact points. Add it back in the Contact section of `index.html` if you want it visible.
- Custom domain later? Add a `CNAME` file with your domain, then point your DNS at GitHub Pages — ask if you want the exact records.
