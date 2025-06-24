// components/Header.jsx
export default function Header() {
  return (
    <div className="flex justify-between items-center mb-4 px-2 md:px-0">
      <input
        type="text"
        placeholder="What do you want to play?"
        className="w-full md:w-1/2 px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-sm"
      />
      <div className="hidden md:flex items-center space-x-2">
        <img src="https://i.pravatar.cc/40" className="rounded-full w-8 h-8" alt="User" />
      </div>
    </div>
  );
}
