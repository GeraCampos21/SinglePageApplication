// components/Sidebar.jsx
export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 bg-zinc-900 flex-col p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Your Library</h2>
      <ul className="space-y-2 text-sm">
        <li className="text-green-400 font-semibold">Liked Songs</li>
        <li>Imagine Dragons - Best Songs</li>
        <li>OFFICE MUSIC CHILL 2025</li>
        <li>Piano Romántico</li>
        <li>Bachata de las viejitas</li>
        <li>AVENTURA MEJORES ÉXITOS</li>
        <li>Un Verano Sin Ti</li>
      </ul>
    </aside>
  );
}
