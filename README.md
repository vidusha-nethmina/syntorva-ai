# ZynAIde — Project Nocturne

The official single-page marketing site for **ZynAIde**, the multi-agent AI platform, and the entry point to **ZynAIde Coco**.

- **Signature experience:** "Intelligence Awakens". The official emblem is rebuilt as a real-time 3D metallic sculpture in WebGL. It moves from brushed silver (Dormant) through a first cyan signal along the Z (First Signal) and spreading colour (Collective), and finishes on the original cyan → blue → violet identity (Awakened). It holds on the final colours, with a "Replay awakening" control and cursor-responsive rotation.
- **No build step and no dependencies.** It's plain HTML, CSS and JavaScript, so it deploys to any static host.

---

## 1. Run locally

Use any static server. Opening the file directly with `file://` works, but a server matches production more closely.

```bash
cd zynaide
python3 -m http.server 8080      # or: npx serve .
# open http://localhost:8080
```

## 2. Configure: `assets/js/config.js`

Everything you're expected to change lives in this one file:

| Setting | What it controls | Current state |
|---|---|---|
| `products[].url` (id `coco`) | **Launch ZynAIde Coco** button, portfolio card, footer link | Empty, so the site shows an honest "Coming soon" state with a contact link |
| `products[]` | The roadmap portfolio, ecosystem network and footer. Add an object to add a product. | Coco = `in-development`; 4 concepts = `future-concept` |
| `capabilities[].status` | Status tags in section 03 (`planned`, `in-development`, `implemented`) | All `planned`. **Update each one once the team confirms it.** |
| `team.members[]` | Names, roles, `photo` (path) and `linkedin` (URL) | Names and roles as supplied. No photos or LinkedIn yet, so elegant monogram plates are shown. |
| `contact.email`, `contact.phone` | Contact section, footer, and the email fallback for the form | Empty |
| `form.endpoint` | Real form submission (JSON POST) | Empty |
| `social[]` | Footer social links (hidden while empty) | Empty |

**Launch buttons appear only when a URL is set** and the product's status is `available` or `in-development`. Future concepts never get launch buttons.

### Contact form behaviour (nothing is ever faked)
1. **`form.endpoint` set:** submits JSON to it and shows "sent" only on a 2xx response; otherwise it shows an error. Works with Formspree (`https://formspree.io/f/xxxxxxx`), Getform, Basin, or your own endpoint. Fields: `name`, `email`, `organisation`, `message`. Includes a honeypot field (`_gotcha`).
2. **Only `contact.email` set:** the button becomes "Open in your email app" and opens a pre-filled email. The site says plainly that nothing is sent until the visitor sends it.
3. **Neither set (current):** the submit button is disabled and the form says enquiries aren't open yet.

Form IDs like Formspree's are public by design. **Never put secret keys in `config.js`**: the browser can read it.

### Team photos
Add portraits to `assets/team/` (for example `arshad.jpg`, 3:4 portrait, at least 900px tall), then set `photo: 'assets/team/arshad.jpg'`. They're shown in monochrome automatically.

### Coco screenshot
The product preview is currently a **clearly labelled product concept** built in HTML. When a real screenshot exists, replace the `.device__body` contents in `index.html` with an `<img>` and remove the "Product concept" label.

## 3. Brand assets: `assets/brand/`

| File | Use |
|---|---|
| `emblem.svg`, `emblem-glow.svg`, `emblem-silver.svg`, `emblem-mono.svg` | Vector emblem, **traced from the supplied artwork** and generated from the shared geometry in `assets/js/emblem-geometry.js` (`node tools/build-brand.js`) |
| `wordmark.png` | Transparent wordmark extracted from the supplied silver logo. The site recolours it with a CSS mask for dark or light surfaces. |
| `og-image.png` | 1200×630 social preview, rendered from the 3D emblem (`tools/og.html`) |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192/512.png` | Favicons and app icons |

If the team has the **original vector files** (SVG/AI) for the emblem and wordmark, drop them in with the same file names. That's the most faithful option.

## 4. Before going live
1. Choose the domain, then in `index.html` `<head>`:
   - add `<link rel="canonical" href="https://YOUR-DOMAIN/">` and `<meta property="og:url" content="https://YOUR-DOMAIN/">`
   - change `og:image` and `twitter:image` to absolute URLs: `https://YOUR-DOMAIN/assets/brand/og-image.png`
2. Fill in `config.js` (Coco URL, contact, form endpoint, team photos/LinkedIn, socials, capability statuses).
3. Review the privacy notice text (in `index.html`, `<dialog id="privacy">`) against how you actually handle enquiries. If you add analytics, update it.

## 5. Deploy (HTTPS on a .com or .lk domain)
Upload the **whole folder** as-is. There's no build.

- **Netlify:** drag the folder onto app.netlify.com/drop, or connect the Git repo (build command: none; publish directory: `/`). Under Domain settings, add the custom domain. HTTPS is automatic.
- **Vercel / Cloudflare Pages:** import the repo with Framework "Other", no build command and output directory `/`. Add the domain in the dashboard.
- **GitHub Pages:** push to a repo, then Settings → Pages → deploy from branch (root). Add the domain and tick "Enforce HTTPS".
- **cPanel / shared hosting (common for .lk):** upload the contents to `public_html/`, then enable AutoSSL or Let's Encrypt.

**DNS for the custom domain:** at your registrar (for .lk, the LK Domain Registry or your reseller), point the apex `A` and `www` `CNAME` records to the values your host gives you. Allow time for propagation, then confirm the site loads on `https://`.

Recommended cache headers: long cache on `assets/brand/*`, and short or no-cache on `index.html` and `assets/js/config.js` so config edits show up at once.

## 6. Structure
```
index.html                  all 12 sections, SEO / Open Graph metadata, privacy dialog
assets/css/main.css         Nocturne design tokens + all layout (responsive, reduced-motion)
assets/js/config.js         ← edit this
assets/js/emblem-geometry.js  emblem geometry (single source of truth)
assets/js/emblem-gl.js      WebGL sculpture + awakening choreography (no libraries)
assets/js/app.js            nav, reveals, agent network, portfolio, team, form
assets/brand/               logo, icons, social image
tools/                      asset generators (brand SVGs, OG image)
```

## 7. Accessibility & performance notes
- Semantic landmarks, skip link, keyboard-operable nav, mobile menu (Esc closes it, focus is contained), ARIA tabs for the agents (arrow keys, Home and End), and accessible form errors.
- **Reduced motion:** the emblem renders once, fully awakened, with no reveal or flow animations.
- **No WebGL:** an optimised SVG of the coloured emblem is shown instead.
- The 3D emblem pauses off-screen and when the tab is hidden, lowers its resolution on slow devices, and the closing emblem only loads near the viewport.
- Fonts (Geist, Geist Mono, Instrument Serif) load from Google Fonts with system fallbacks.
