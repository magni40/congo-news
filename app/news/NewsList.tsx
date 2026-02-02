"use client";
import { useMemo, useState } from 'react';

type Item = { source: string; region?: 'CD'|'OTHER'; title: string; link: string; pubDate?: string; summary?: string };

export default function NewsList({ items }: { items: Item[] }) {
  const [region, setRegion] = useState<'ALL'|'CD'>('ALL');
  const filtered = useMemo(() => {
    if (region === 'ALL') return items;
    return items.filter(it => it.region === region);
  }, [items, region]);

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button onClick={()=>setRegion('ALL')} className={`px-3 py-1 rounded border ${region==='ALL'?'bg-blue-600 text-white':'bg-white'}`}>Tous</button>
        <button onClick={()=>setRegion('CD')} className={`px-3 py-1 rounded border ${region==='CD'?'bg-blue-600 text-white':'bg-white'}`}>RD Congo</button>
      </div>
      <ul className="space-y-4">
        {filtered.slice(0,50).map((it, idx) => (
          <li key={idx} className="border rounded p-4 hover:bg-gray-50">
            <div className="text-xs text-gray-500">{it.source} • {it.pubDate ? new Date(it.pubDate).toLocaleString() : ''}</div>
            <a href={it.link} className="text-blue-600 font-medium" target="_blank" rel="noopener noreferrer">{it.title}</a>
            {it.summary && <p className="text-sm mt-2">{it.summary}</p>}
          </li>
        ))}
        {filtered.length===0 && <li className="text-sm text-gray-600">Aucun contenu pour ce filtre.</li>}
      </ul>
    </div>
  );
}
