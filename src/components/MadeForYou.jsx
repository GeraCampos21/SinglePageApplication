// components/MadeForYou.jsx
export default function MadeForYou() {
  return (
    <section className="mb-6">
      <h3 className="text-xl font-bold mb-2">Made For Gera Chávez</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="bg-zinc-800 p-4 rounded-lg">
            <img src="https://misc.scdn.co/liked-songs/liked-songs-640.png" className="mb-2 rounded" />
            <p className="font-semibold text-sm">Daily Mix 0{idx + 1}</p>
            <p className="text-xs text-zinc-400">Your personalized playlist</p>
          </div>
        ))}
      </div>
    </section>
  );
}
