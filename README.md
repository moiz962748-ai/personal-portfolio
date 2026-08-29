<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/56a73f4e-da87-4717-b9f4-5511df0173b7

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
# ⚡ Abdul Moiz | Front-End & Full-Stack Developer Portfolio

A modern, high-performance developer portfolio built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed with an engineering-first dark aesthetic, fluid marquee tech tickers, and interactive project showcases.

---

## 🚀 Live Demo

- **Live URL:** [https://abdulmoiz-dev.vercel.app](https://abdulmoiz-dev.vercel.app)
- **Deployment Platform:** Vercel / Netlify

---

## ✨ Key Features

- 🎨 **Modern Dark Aesthetic:** Minimalist UI with ambient gradient spotlights and glowing grid patterns.
- 📱 **Fully Responsive & Cross-Device Font Locking:** Enforced typography across iOS, Android, and Desktop via Google Web Fonts (*Plus Jakarta Sans* & *JetBrains Mono*).
- ⚡ **Interactive Components:**
  - Dynamic Hero section with key metrics and downloadable resume integration.
  - Infinite sliding tech stack marquee ticker.
  - Detailed project showcases with live preview and source code modals.
  - Instant direct-copy email badge and contact inquiry form.
- 🛠️ **Optimized Production Build:** Fast asset bundling and minification using Vite.

---

## 🛠️ Tech Stack & Arsenal

- **Frontend:** React, TypeScript, Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Deployment:** Vercel / Netlify

---

## 📦 Project Structure

```text
├── public/                 # Static assets (Favicons, Web Manifest, Resume PDF)
│   ├── favicon.ico
│   ├── resume.pdf
│   └── site.webmanifest
├── src/
│   ├── components/         # Modular UI Components (Hero, Projects, Contact, etc.)
│   ├── data/               # Structured portfolio data configuration
│   ├── types/              # TypeScript interfaces & types
│   ├── App.tsx             # Main Application layout
│   ├── index.css           # Global Tailwind & base styling rules
│   └── main.tsx            # Vite entry point
├── index.html              # HTML shell & font definitions
├── package.json            # Dependencies & scripts
└── vite.config.ts          # Vite configuration