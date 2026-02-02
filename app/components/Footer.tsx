export default function Footer() {
  return (
    <footer className="mt-10 py-6 text-center text-xs text-gray-500 border-t">
      <p>
        © {new Date().getFullYear()} Congo News — Agrégateur non officiel. Sources citées. 
        <span className="block sm:inline"> Aucun contenu hébergé n'appartient à Congo News.</span>
      </p>
      <p className="mt-1">Contact: contact@example.com • Mentions légales à venir</p>
    </footer>
  );
}
