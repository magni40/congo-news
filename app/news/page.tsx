import fs from 'fs';
import path from 'path';
import NewsList from './NewsList';

export const dynamic = 'force-dynamic';

async function getNews() {
  const p = path.join(process.cwd(), 'data', 'news.json');
  try {
    const buf = await fs.promises.readFile(p, 'utf-8');
    return JSON.parse(buf);
  } catch (e) {
    return { generatedAt: null, items: [] };
  }
}

export default async function NewsPage() {
  const data = await getNews();
  return (
    <main className="mx-auto max-w-3xl p-6">
      <h1 className="text-2xl font-bold mb-1">Actus RD Congo</h1>
      <p className="text-sm text-gray-500 mb-6">{data.generatedAt ? `Mise à jour: ${new Date(data.generatedAt).toLocaleString()}` : 'Exécutez npm run fetch pour charger les actus.'}</p>
      <NewsList items={data.items || []} />
      {(!data.items || data.items.length===0) && (
        <p className="text-sm text-gray-600">Aucun contenu. Lancez « npm run fetch » puis rechargez cette page.</p>
      )}
    </main>
  );
}
