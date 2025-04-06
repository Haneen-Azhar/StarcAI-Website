# StarcAI Website

Live at: [https://starcai.us](https://starcai.us)

This is the official product site for **StarcAI** — an AI-powered tool that helps companies shape investor sentiment and improve financial communication.

---

## Overview

- **Purpose**: Explain what StarcAI does, show its impact, and direct users to try the product or view a demo.
- **Stack**: Vanilla HTML, CSS, and JavaScript. No frameworks or libraries.
- **Deployment**: Static hosting (currently live on starcai.us). No backend or build process required.

---

## Key Features

- Hero section with logo, tagline, and CTAs
- Animated result counters triggered on scroll
- Video comparison (original vs. StarcAI rewrite)
- Visual feature explanations
- Real testimonials with branding
- Team section with links
- Interactive FAQ (accordion style)

---

## File Overview

- `index.html`: Main page
- `style.css`: Core visual styles
- `global.css`: Base layout/reset
- `phone.css`: Responsive adjustments
- `FAQ.css`: FAQ-specific styles
- `number-counter.css`: Styles for stat animation
- `index.js`: Scroll-based number counter
- `FAQ.js`: FAQ accordion logic
- `nav.js`: Opens all links in new tabs
- `assets/`: Images, logos, and videos

> Note: There is no build step. All files are plain and directly editable.

---

## Design Choices

- **No frameworks** to keep performance fast and editing easy
- **Modular CSS** files for clarity and easier maintenance
- **Responsive media queries** tailored to various screen widths
- **IntersectionObserver** for scroll-based animation
- **Inline video switcher** to highlight StarcAI’s rewriting capability

---

## Development Notes

- Works entirely in-browser
- Tested on Chrome, Safari, Firefox
- Mobile-friendly from ~360px screen width upward
- Custom JS only; no jQuery or dependencies

---

## Updating

- To update content: edit `index.html`
- To change visuals: replace files in `assets/`
- To tweak layout/styling: use the corresponding CSS file
- To deploy: push to your host (e.g., GitHub Pages, Netlify, Vercel)

---

## Contact

For product inquiries or feedback:  
📬 `founders@starcai.us`
