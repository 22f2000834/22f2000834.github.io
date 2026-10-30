# Mohammad Dalwai · Data Science Portfolio

A fast, dependency-free personal portfolio built with plain HTML, CSS, and JavaScript.

## Editing content

**All content lives in [`js/data.js`](js/data.js).** Change your bio, skills, projects,
experience, publications, and links there. You don't need to touch the HTML.

- **Add a project:** copy one object in `projects` and edit it. `categories` drive the
  filter chips; `links.demo` / `links.github` / `links.model` / `links.paper` show buttons
  when not empty. Add `featured: true` to make one card full width.
- **Update your resume:** replace `assets/resume.pdf` (keep the same filename).
- **Hero code card:** edit `profileCard`.
- **Typing effect:** edit `roles`.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. You can also double-click `index.html`.

## Deploy to GitHub Pages

1. Create a public repo on GitHub named **`<your-username>.github.io`**
   (for example `mohammaddalwai.github.io`).
2. Push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**. Set the source to **Deploy from a branch**,
   choose `main` / `(root)`, and save.
4. After a minute, the site is live at `https://<your-username>.github.io`.

If you use a different repo name (e.g. `portfolio`), the URL becomes
`https://<your-username>.github.io/portfolio/`.

## Structure

```
index.html        page shell and section containers
css/style.css     theme tokens (light/dark), layout, responsive rules
js/data.js        all content
js/main.js        renders content, theme toggle, nav, filters, animations
assets/           resume.pdf and optional images
```
