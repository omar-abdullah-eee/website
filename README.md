```markdown
# Omar Abdullah — Portfolio (Sreerekha-style)

This is a single-page static portfolio inspired by the style at https://sreerekha.com/.
It is responsive, accessible and easy to deploy.

## Files
- `index.html` — page
- `styles.css` — styling
- `script.js` — small interactivity (smooth scroll, reveal)
- `assets/` — put your images here:
  - `profile.jpg`
  - `project1.jpg`
  - `project2.jpg`
  - `project3.jpg`
- `resume.pdf` — put your resume at the repo root

## Quick local test
1. Copy files into a folder.
2. Open `index.html` in a browser, or run:
   - Python 3: `python -m http.server 8000` → http://localhost:8000

## Deploy (GitHub Pages)
1. Create a new GitHub repository (e.g., `omar-portfolio`).
2. Push files:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
3. On GitHub: Settings → Pages → Branch: `main` and folder `/ (root)`, save.
4. After a few minutes your site will be live at `https://<your-username>.github.io/<repo>/`.

Other deploy options: Vercel or Netlify (connect your GitHub repo, import, and deploy).

## Customization checklist
- Replace placeholder text (name, role, descriptions).
- Add your profile image and project thumbnails in `assets/`.
- Replace `you@example.com` with your email.
- Replace contact form action with Formspree, Netlify Forms, or backend endpoint.
- Replace project "Read more" links with actual project pages or GitHub repos.

If you want, I can:
- Customize colors and fonts to match the example exactly.
- Resize and optimize images for web (I can produce optimized images).
- Create a ready-to-push GitHub repo and push these files for you (I can provide the exact commands or push if you give repo details).

Which of the above would you like me to do next?
```