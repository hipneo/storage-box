# STORAGE BOX — Landing Page

Self-storage în containere maritime, în centrul Iașului.
Landing page pentru validarea pre-lansare.

**Domain**: storage-box.ro
**Stack**: HTML5 + CSS3 + Vanilla JS (zero dependencies, zero build step)
**Deploy**: Netlify + GitHub
**Forms**: Netlify Forms (configurat în `index.html`)

---

## Structura proiectului

```
storage-box/
├── index.html              # Pagina principală (landing)
├── multumesc.html          # Pagina de mulțumire după submit form
├── netlify.toml            # Configurare Netlify (caching, headers, redirects)
├── robots.txt              # SEO - acces crawlere
├── sitemap.xml             # SEO - hartă site
├── assets/
│   ├── style.css           # Toate stilurile
│   └── script.js           # Reveal animations, mobile menu, form tracking
└── images/
    ├── hero-aerial-night.jpg    # Hero principal (Image 2 din generation)
    ├── hero-aerial-night.webp   # WebP version (recomandat)
    ├── hero-aerial-day.jpg      # Secțiunea About (Image 1)
    ├── hero-aerial-day.webp
    ├── container-product.png    # Cards dimensiuni (Image 4)
    ├── container-interior.jpg   # Secțiunea Inside (Image 5)
    ├── container-interior.webp
    ├── entrance.jpg             # Opțional: Image 3 (street view)
    ├── og-cover.jpg             # Open Graph image pentru social sharing (1200×630)
    ├── favicon.png              # 32×32
    └── apple-touch-icon.png     # 180×180
```

---

## ⚡ Quick Start

### 1. Adaugă imaginile

Plasează fișierele de imagine în folderul `images/`:

- `hero-aerial-night.jpg` — Image 2 din generation (twilight aerial) — **redenumește-l**
- `hero-aerial-day.jpg` — Image 1 (daytime aerial)
- `container-product.png` — Image 4 (single container)
- `container-interior.jpg` — Image 5 (interior)
- `og-cover.jpg` — Crop pătrat 1200×630 din hero pentru sharing

**Recomandare**: optimizează imaginile pe **squoosh.app** sau **tinypng.com** înainte de upload:
- Hero images: target <300KB la 1920×1080
- Product/interior: target <200KB
- Generează și versiune **.webp** pentru fiecare (browsers moderne încarcă automat WebP)

### 2. Configurează contactul

Editează în `index.html` și `multumesc.html`:
- Telefon: `+40700000000` (caută și înlocuiește cu numărul tău real)
- Email: `contact@storage-box.ro`
- WhatsApp: link `https://wa.me/40700000000`

### 3. Deploy pe Netlify

**Opțiunea A — GitHub + Netlify (recomandat)**:

```bash
# Inițializează repo Git
cd storage-box
git init
git add .
git commit -m "Initial commit"

# Creează repo pe GitHub și push
git remote add origin git@github.com:USERNAME/storage-box.git
git branch -M main
git push -u origin main
```

Apoi pe **netlify.com**:
1. Click "Add new site" → "Import from Git"
2. Selectează repo-ul
3. Build settings: leave empty (no build, static site)
4. Publish directory: `.` (root)
5. Click "Deploy"

**Opțiunea B — Drag & drop**:

1. Pe netlify.com, drag folderul `storage-box` direct pe dashboard
2. Site live în 10 secunde

### 4. Conectează domeniul

În Netlify dashboard:
1. Domain settings → Add custom domain → `storage-box.ro`
2. Verifică instructions pentru DNS (la rotld.ro / providerul tău)
3. Setează:
   - `A record` → IP-ul Netlify load balancer
   - `CNAME` pentru `www` → `your-site.netlify.app`
4. Activează SSL (automat, gratuit, Let's Encrypt)

### 5. Activează Netlify Forms

Formularul de pe pagină are deja `data-netlify="true"` configurat.

În dashboard Netlify:
1. Forms tab → vezi submisiunile
2. Setează notificări email pentru fiecare submit:
   - Forms → Form notifications → Add notification → Email
   - Adaugă email-ul unde primești lead-urile

### 6. Tracking — Google Ads + Analytics

În `index.html`, scoate comentariile din secțiunile:

**Google Analytics 4**: înlocuiește `G-XXXXXXXXXX` cu măsurătoarea ta:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

**Google Ads conversion**: înlocuiește `AW-XXXXXXXXXX` cu ID-ul tău:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"></script>
```

În `script.js`, scoate comentariile din `gtag('event', 'conversion', ...)` și pune conversion ID + label.

În `multumesc.html`, fă același lucru pentru thank-you page conversion fire.

---

## 🎨 Design system

### Culori
- Background: `#0F1011`
- Accent (galben muștar): `#DDA90D`
- Text: `#F5F2EA`

Variabile complete în `:root` la începutul `style.css`.

### Typography
- **Display**: Stardos Stencil (titluri, logo, headers)
- **Mono**: JetBrains Mono (numere, badges, technical info)
- **Body**: Manrope (paragrafe)

Toate de la Google Fonts, încărcate inline din `<head>`.

### Componente
- `.btn-primary` — buton galben (CTA principal)
- `.btn-secondary` — buton gri închis
- `.btn-ghost` — outline button
- `.box-card` — card pentru dimensiuni
- `.reveal` — animație fade-in on scroll (folosește `style="--delay: 0.1s"` pentru stagger)

---

## 🔧 Customizare rapidă

### Schimbi prețurile
Caută în `index.html` zonele:
```html
<span class="price-old">350 RON</span>
<span class="price-new">280<small>RON/lună</small></span>
```

Sunt 3 — câte unul pentru BOX S, M, L.

### Schimbi tagline-ul
Hero title și subtitle în `index.html`, secțiunea `.hero-content`.

### Adaugi/scoți FAQ
Secțiunea `.faq-list` are 8 `<details>` blocks. Copiezi structura unui `<details>` și schimbi conținutul.

### Schimbi formularul
Toate field-urile sunt în `.cta-form`. Adaugi/scoți `<label class="field">` blocks.
**Important**: Dacă schimbi `name="form-name"`, schimbă în ambele locuri (hidden input + form attribute).

---

## 📊 Conversion optimization

Landing-ul are deja:
- ✅ Multiple CTA-uri (4 deasupra fold + form)
- ✅ Social proof prin design premium
- ✅ Trust signals (acces 24/7, supraveghere, etc.)
- ✅ Urgență subtilă ("Primii 50 de clienți")
- ✅ Risc redus ("Rezervare gratuită, fără avans")
- ✅ Form scurt (5 câmpuri obligatorii)
- ✅ Multiple căi de contact (form, WhatsApp, telefon)
- ✅ Mobile-first responsive
- ✅ Performance < 2s pe 3G

### A/B test ideas
1. Hero headline variants
2. Pricing display: cu/fără preț vechi tăiat
3. Form length (5 fields vs 3 fields)
4. CTA copy: "Rezervă-ți boxa" vs "Vreau ofertă" vs "Mă interesează"

---

## 📞 Suport

Întrebări tehnice sau ajustări:
- Editezi cu Claude Code direct în `index.html` / `style.css`
- Re-deploy automat pe Netlify când dai push pe GitHub
