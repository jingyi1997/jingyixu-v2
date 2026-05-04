# Site Workflow

## Setup on a new machine

```bash
git clone --recurse-submodules https://github.com/jingyi1997/jingyixu-v2.git
```

## Making changes and publishing

1. Edit files in `content/` (e.g. `content/home/recent.md`, `content/home/publications.md`)
2. Preview locally:
   ```bash
   hugo server
   # open http://localhost:1313/
   ```
3. Build:
   ```bash
   hugo
   ```
4. Commit and push:
   ```bash
   git add -u
   git commit -m "your message"
   git push origin main
   ```

## Adding a new publication image

```bash
# Copy image to static/img/
cp yourimage.png static/img/

# Build (copies image to public/img/ automatically)
hugo

# Stage both — public/ is gitignored so needs -f
git add static/img/yourimage.png
git add -f public/img/yourimage.png

git add -u
git commit -m "your message"
git push origin main
```

## How it deploys

Netlify serves the `public/` folder directly. No build step runs on Netlify — always rebuild locally with `hugo` before pushing.
