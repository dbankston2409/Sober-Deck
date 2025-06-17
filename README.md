# Sober Logic Pitch Deck

A modern, interactive pitch deck website for Sober Logic - a groundbreaking behavioral recovery platform.

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build
```bash
npm run build
npm start
```

## Tech Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Space Grotesk (Google Fonts)

## Features
- Dark mode first design
- Fully responsive layout
- Smooth scroll animations
- Interactive components
- Modern glassmorphism effects
- Professional typography

## Structure
- `/app` - Next.js app directory with layout and pages
- `/components/sections` - All deck sections as separate components
- `/public` - Static assets

## Customization
- Colors are defined in `tailwind.config.ts`
- Global styles in `app/globals.css`
- Each section is a separate component for easy editing

## Deployment
The site is ready for deployment on Vercel, Netlify, or any Next.js-compatible hosting platform.

```bash
npm run build
```

The site can be hosted on a subdomain like `deck.soberlogic.org`.