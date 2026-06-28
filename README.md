# NovationCloud

NovationCloud is a Next.js website for a Melbourne-based engineering consultancy serving businesses across Australia. The site presents services for AI automation, web and mobile app development, app modernisation, chatbot development, and cloud cost optimisation.

The public site is available at [novationcloud.com](https://novationcloud.com).

## What this project includes

- A marketing homepage for NovationCloud's AI, software, and cloud consulting services.
- Service pages and SEO-focused service guides for:
  - AI automation service
  - Web and mobile app development
  - App modernisation
  - Cloud optimisation
- About and contact pages.
- A contact form backed by a Next.js API route, Cloudflare Turnstile verification, and Resend email delivery.
- SEO metadata, sitemap, robots configuration, Open Graph metadata, and structured data.

## Tech stack

- Next.js 14 with the App Router
- React 18
- TypeScript
- Tailwind CSS 4
- Resend for contact form email delivery
- Cloudflare Turnstile for spam protection

## Requirements

- Node.js 20.9.0 or newer
- npm

If you use `nvm`, run:

```bash
nvm use
```

## Run locally

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.development.local .env.local
```

Update `.env.local` with valid values for the services you want to test:

```bash
RESEND_API_KEY=
TURNSTILE_SECRET_KEY=
NEXT_PUBLIC_TURNSTILE_SITE_KEY=
NEXT_PUBLIC_CF_BEACON_TOKEN=
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Useful commands

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project structure

```text
app/                 Next.js App Router pages, metadata, API routes, sitemap, robots
components/          Shared UI components such as Header, Footer, Hero, ContactForm
lib/                 Service and blog/service-guide content
public/              Logos, icons, and static assets
deploy.sh            Production deploy helper for npm build and PM2 restart
ecosystem.config.js  PM2 process configuration
```

## Environment variables

| Variable | Purpose | Required locally |
| --- | --- | --- |
| `RESEND_API_KEY` | Sends contact form submissions through Resend. | Only for testing contact form delivery |
| `TURNSTILE_SECRET_KEY` | Verifies Cloudflare Turnstile tokens on the server. | Only for testing contact form submission |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Renders the Turnstile widget in the browser. | Only for testing contact form submission |
| `NEXT_PUBLIC_CF_BEACON_TOKEN` | Enables Cloudflare Web Analytics. | No |

Without the Resend and Turnstile values, the site can still run locally, but the contact form cannot complete a real submission.

## Production notes

Build the app before starting it in production:

```bash
npm run build
npm run start
```

This repository also includes a PM2-oriented deployment helper:

```bash
./deploy.sh
```

