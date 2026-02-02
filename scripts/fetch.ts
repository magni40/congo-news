import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';

type Feed = { name: string; url: string; region: 'FI' | 'CD' | 'OTHER' };

const feeds: Feed[] = [
  // Finland local/general
  { name: 'Yle Uutiset (recent)', url: 'https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_UUTISET', region: 'FI' },
  { name: 'City of Helsinki (EN)', url: 'https://www.hel.fi/uutiset/en/rss', region: 'FI' },
  // DRC / Africa FR
  { name: 'RFI Afrique', url: 'https://www.rfi.fr/fr/afrique/rss', region: 'CD' },
  { name: 'Radio Okapi', url: 'https://www.radiookapi.net/rss.xml', region: 'CD' },
  { name: 'Jeune Afrique – RD Congo', url: 'https://www.jeuneafrique.com/pays/rd-congo/feed/', region: 'CD' },
  { name: 'Actualite.cd', url: 'https://actualite.cd/rss', region: 'CD' },
];

async function main() {
  const parser = new Parser();
  const items: any[] = [];
  for (const f of feeds) {
    try {
      const feed = await parser.parseURL(f.url);
      for (const it of feed.items.slice(0, 10)) {
        items.push({
          source: f.name,
          region: f.region,
          title: it.title,
          link: it.link,
          pubDate: it.pubDate || it.isoDate,
          summary: it.contentSnippet || '',
        });
      }
    } catch (e) {
      items.push({ source: f.name, region: f.region, error: String(e) });
    }
  }
  items.sort((a, b) => (new Date(b.pubDate || 0).getTime()) - (new Date(a.pubDate || 0).getTime()));
  const outDir = path.join(process.cwd(), 'data');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'news.json'), JSON.stringify({ generatedAt: new Date().toISOString(), items }, null, 2));
  console.log(`Wrote ${items.length} items to data/news.json`);
}

main().catch(err => { console.error(err); process.exit(1); });
