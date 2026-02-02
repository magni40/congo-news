export default function Home() {
  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-3xl font-bold mb-4">Congo News — Finlande & RD Congo</h1>
      <p className="text-gray-700 mb-6">
        Agrégateur FR pour suivre l'actualité en Finlande et en RD Congo, avec une newsletter simple.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <a className="text-blue-600" href="/news">Consulter les actus (filtres Finlande / RD Congo)</a>
        </li>
        <li>
          <a className="text-blue-600" href="/subscribe">S'inscrire à la newsletter</a>
        </li>
      </ul>
    </main>
  );
}
