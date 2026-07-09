# FHA Connect — React + Vite + Tailwind

Same design as the original landing page, rebuilt as a component-based React app.

## Setup

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  components/
    Header.jsx       nav + live Lagos clock
    Hero.jsx          headline + animated satellite-to-house signal SVG
    StatsStrip.jsx     homes connected / uptime / pricing / speed stats
    HowItWorks.jsx     4-step numbered flow
    Plans.jsx          Daily/Weekly/Monthly cards, wired to WhatsApp
    Coverage.jsx       range-ring map + coverage status list
    Voices.jsx         neighbour quotes
    FAQ.jsx            accordion
    CTABand.jsx        trial CTA
    Footer.jsx
  hooks/
    useReveal.js       scroll-reveal via IntersectionObserver
    useLagosClock.js    live Africa/Lagos date & time
  whatsapp.js          WHATSAPP_NUMBER config + link builder
```

## Before deploying

Open `src/whatsapp.js` and replace the placeholder number:

```js
export const WHATSAPP_NUMBER = '234813xxxxxxx'
```

Use the international format: country code + number, no `+`, no leading `0`.
