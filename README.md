# Congo News — Finland & RD Congo (FR)

Local-first, low-RAM news aggregator with email capture.

- Stack: Next.js (App Router) + Tailwind
- Data: RSS fetcher to data/news.json (no DB)
- Pages:
  - /news — aggregated headlines with filters (Finlande / RD Congo)
  - /subscribe — email capture (appends to data/subscribers.csv)

## Run locally

```bash
npm install
npm run fetch
npm run dev -- -p 3001
# Open http://localhost:3001/news
```

## Fetch feeds

```bash
npm run fetch
# Writes data/news.json
```

Sources configured:
- Finland: Yle recent, City of Helsinki (EN)
- RD Congo: Radio Okapi, Actualite.cd, Jeune Afrique, RFI Afrique

You can extend `scripts/fetch.ts` with more feeds.

## Deploy

Recommended: Vercel (free tier). Set build command `npm run build`.

## Roadmap
- [ ] Polish UI FR (copy, footer/legal)
- [ ] Add more Finland local feeds (HS/Helsinki Times) via browser scrape if needed
- [ ] Newsletter generator (Markdown → HTML) & CSV export
- [ ] Basic analytics (privacy-friendly)
