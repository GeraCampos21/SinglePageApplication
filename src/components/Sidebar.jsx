// components/Sidebar.jsx
import {
  Library,
  Plus,
  Search,
  ListMusic,
  Clock4,
} from "lucide-react"; // O tus propios SVGs
import { libraryData } from "../data/libraryData";

export default function Sidebar() {
  return (
     <aside className="hidden md:block lg:block w-full max-w-xs h-full bg-black text-white p-4 space-y-4 overflow-y-auto">
      
      {/* Encabezado */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Library className="w-5 h-5" />
          <h2 className="text-lg font-semibold">Your Library</h2>
        </div>
        <button>
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Filtros */}
      <div className="flex gap-2 text-sm font-medium">
        <button className="px-3 py-1 bg-zinc-800 rounded-full">Playlists</button>
        <button className="px-3 py-1 bg-zinc-800 rounded-full">Albums</button>
        <button className="px-3 py-1 bg-zinc-800 rounded-full">Artists</button>
      </div>

      {/* Buscador y orden */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-zinc-400">
          <Search className="w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-sm outline-none placeholder-zinc-400"
          />
        </div>
        <button className="text-sm text-zinc-400 flex items-center gap-1">
          Recents <Clock4 className="w-4 h-4" />
        </button>
      </div>

      {/* Lista de Playlists */}
      <div className="space-y-2 mt-2 text-sm">
        {libraryData.map((item, i) => (
          <div key={i} className="flex items-center gap-3 hover:bg-zinc-800 p-2 rounded-md">
            <img src={item.img} alt="cover" className="w-12 h-12 rounded" />
            <div className="flex flex-col truncate">
              <p className="text-sm font-medium truncate">{item.title}</p>
              <p className="text-xs text-zinc-400 truncate">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
