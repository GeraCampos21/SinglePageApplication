// components/Header.jsx
import { ChevronLeft, ChevronRight, Bell, Users, House, Search, PanelTopOpen   } from 'lucide-react';


export default function Header() {
  return (
    <div className="hidden md:block lg:block w-full px-4 md:px-8 py-2">
      <div className="flex items-center justify-between gap-4">

        {/* IZQUIERDA */}
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-zinc-700">
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button className="p-2 rounded-full hover:bg-zinc-700">
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
          <button className="p-2 rounded-full hover:bg-zinc-700 hidden md:inline-flex">
            <House className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* CENTRO: BÚSQUEDA */}
        <div className="flex items-center w-full max-w-md bg-zinc-800 border border-zinc-700 rounded-full px-4 py-2">
          <Search className="text-zinc-400 w-5 h-5 mr-2" />
          <input
            type="text"
            placeholder="What do you want to play?"
            className="flex-1 bg-transparent text-sm text-white outline-none"
          />
          <PanelTopOpen className="text-zinc-400 w-5 h-5 ml-2 cursor-pointer" />
        </div>

        {/* DERECHA */}
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-zinc-700">
            <Bell className="w-5 h-5 text-white" />
          </button>
          <button className="p-2 rounded-full hover:bg-zinc-700">
            <Users className="w-5 h-5 text-white" />
          </button>
          <div className="hidden md:flex items-center space-x-2">
            <img
              src="https://i.pravatar.cc/40"
              className="rounded-full w-8 h-8"
              alt="User"
            />
          </div>
        </div>

      </div>
    </div>
  );
}





















































/*
<input
        type="text"
        placeholder="What do you want to play?"
        className="w-full md:w-1/2 px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-sm"
      />
      <div className="hidden md:flex items-center space-x-2">
        <img src="https://i.pravatar.cc/40" className="rounded-full w-8 h-8" alt="User" />
      </div>
      */