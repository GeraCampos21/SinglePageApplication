// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-zinc-900 p-4 text-sm text-center border-t border-zinc-700">
      <div className="flex justify-between items-center text-xs">
        <p>🎵 Playing on SM-A346M</p>
        <div className="flex gap-2 items-center">
          <button>⏮</button>
          <button>⏯</button>
          <button>⏭</button>
        </div>
      </div>
    </footer>
  );
}
