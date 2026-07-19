# Vic & Vicky's Playlist App

A minimal music playlist player (supporting YouTube & Spotify) for long trips, film scores, classical music, Disney songs, and FreeCover sessions.

🚀 **Live at: [vic-youtube-playlist.vercel.app](https://vic-youtube-playlist.vercel.app/)**

## Playlists

| Mood | Playlist | Tone |
|---|---|---|
| 🚗 Road focus | Vic's Long Trips | Expansive, cinematic |
| 🎬 Score mode | Playlist de Film Scores | Dramatic, emotional |
| 🎼 Classical room | Playlist de Classical Music | Clear, elegant |
| 🎵 Disney gems | Disney Songs That Slap | Nostalgic, high-energy |
| 🎵 Disney vocals | Best Disney Songs to Belt | High-energy, theatrical |
| 💃 Salsa time | Salsa Mix | Rhythmic, vibrant |
| 🇻🇪 Free Cover | FreeCover Venezuela | Festive, high-energy |

## Tech Stack

- [Next.js 16](https://nextjs.org/) + [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [vinext](https://github.com/cloudflare/vinext) (Cloudflare-first meta-framework, used for local dev)
- Deployed on **Vercel** and **Netlify**

## Local Development

### Prerequisites

- Node.js `>=22.13.0`

### Quick Start

```bash
npm install
npm run dev
```

App runs at `http://localhost:3000/`

## Deployment

### Vercel

Connect this repo at [vercel.com/new](https://vercel.com/new). Vercel auto-reads `vercel.json`:

```json
{
  "buildCommand": "npm run build:vercel",
  "outputDirectory": ".next",
  "framework": "nextjs"
}
```

### Netlify

Connect this repo at [app.netlify.com](https://app.netlify.com). Netlify auto-reads `netlify.toml`:

```toml
[build]
  command = "npm run build:netlify"
  publish = ".next"
```

## Useful Commands

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server (vinext/Cloudflare) |
| `npm run build:vercel` | Build for Vercel (`next build`) |
| `npm run build:netlify` | Build for Netlify (`next build`) |
| `npm run lint` | Run ESLint |
| `npm run db:generate` | Generate Drizzle migrations |
