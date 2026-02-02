"use client";
import { useState } from 'react';

export default function SubscribePage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (res.ok) setStatus('Merci — inscrit.'); else setStatus('Erreur — réessaie.');
    } catch {
      setStatus('Erreur réseau.');
    }
  }
  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-bold mb-4">S'inscrire à la newsletter</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="ton@email" className="w-full border rounded p-2" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">S'inscrire</button>
      </form>
      {status && <p className="mt-3 text-sm">{status}</p>}
    </main>
  );
}
