# DreamSpace Atelier — React Frontend Application

A modern, high-performance architectural and interior atelier web application converted from Google Stitch design into a modular, production-ready React frontend.

## 🏛️ Architecture Overview

The application is structured into modular components and dedicated pages using **React 18 + Vite + React Router DOM + Tailwind CSS**.

### 📁 Directory Structure
```
frontend/
├── index.html                   # HTML entry with typography (Playfair Display & Plus Jakarta Sans)
├── package.json                 # Dependencies & build scripts
├── vite.config.js               # Vite bundler configuration
├── tailwind.config.js           # Exact Stitch design system color tokens & typography
├── postcss.config.js            # PostCSS configuration
├── src/
│   ├── main.jsx                 # Application entry point with BrowserRouter & ModalProvider
│   ├── App.jsx                  # Main routing layout & global overlays
│   ├── index.css                # Base Tailwind directives, scrollbar reset, keyframe animations
│   │
│   ├── components/              # Shared UI components
│   │   ├── Navbar.jsx           # Fixed top navigation with brand monogram, responsive links, and CTA
│   │   ├── MobileDrawer.jsx     # Slide-out navigation drawer with smooth backdrop blur
│   │   ├── SubNav.jsx           # Sticky quick-jump bar with active route pills
│   │   ├── BlueprintModal.jsx   # Architectural floor plans & specifications CAD modal
│   │   ├── ScrollToTop.jsx      # Route transition scroll restoration
│   │   └── Footer.jsx           # Comprehensive architectural firm footer
│   │
│   ├── pages/                   # Dedicated pages for each design section
│   │   ├── HomePage.jsx         # Hero showcase, overview stats, and section highlights
│   │   ├── AboutPage.jsx        # Studio philosophy, Elena Vance profile, and 4 materiality pillars
│   │   ├── HomeDesignsPage.jsx  # 6 architectural typologies, comparison matrix, and blueprint modals
│   │   ├── InteriorDesignPage.jsx # 5 living chambers with interactive tab switcher & material swatches
│   │   ├── ExteriorDesignPage.jsx # Facade envelopes, xeriscapes, bioclimatic pergolas, and pivot portals
│   │   ├── GalleryPage.jsx      # Curated archive with category filters and interactive lightbox modal
│   │   └── ContactPage.jsx      # Consultation booking form with live validation and studio directory
│   │
│   ├── context/
│   │   └── ModalContext.jsx     # Global state to trigger architectural blueprint modals from anywhere
│   │
│   └── data/                    # Centralized, typed project & atelier data
│       ├── designsData.js       # 6 architectural typologies, CAD schematics, and specs
│       ├── interiorsData.js     # Living chambers, photography, and material palettes
│       ├── exteriorsData.js     # Facades, landscapes, terraces, and portal specifications
│       ├── galleryData.js       # Portfolio monographs and photography archive
│       └── aboutData.js         # Elena Vance & Associates credentials, stats, and timeline
```

---

## 🚀 Getting Started

### 1. Development Server
To start the live local development server:
```bash
cd frontend
npm run dev
```
Open your browser at `http://localhost:3000` (or the port Vite outputs).

### 2. Production Build
To create an optimized production build:
```bash
cd frontend
npm run build
```

### 3. Preview Production Build
```bash
cd frontend
npm run preview
```

---

## 🎨 Design System Tokens
- **Primary Color:** `#032217` (Deep Obsidian Forest)
- **Secondary Color:** `#715b33` (Warm Travertine Bronze)
- **Background:** `#fef8f4` (Limestone Alabaster)
- **Serif Font:** `Playfair Display` (Headlines and editorial accents)
- **Sans-Serif Font:** `Plus Jakarta Sans` (Body, labels, and architectural metadata)
- **Icons:** Google Material Symbols Outlined

