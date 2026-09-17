export default function MovieCard({ movie, onDetails, watchlist, toggleWatchlist }) {
  const saved = watchlist.has(movie.id);

  return (
    <div className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2" style={{ background: "#16161a", border: "1px solid rgba(255,255,255,.06)" }}>
      <div className="relative aspect-[2/3] overflow-hidden">
        <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 px-2 py-1 rounded-lg text-xs text-white bg-black/70">{movie.year}</div>
        <div className="absolute top-3 right-3 px-2 py-1 rounded-lg text-xs font-bold text-amber-400 bg-black/70">★ {movie.rating}</div>
        <button onClick={() => toggleWatchlist(movie.id)} className="absolute bottom-3 right-3 w-9 h-9 rounded-xl text-white" style={{ background: saved ? "#8b5cf6" : "rgba(0,0,0,.7)" }}>
          {saved ? "✓" : "+"}
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-white mb-2">{movie.title}</h3>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {movie.genres.slice(0, 2).map(genre => (
            <span key={genre} className="px-2 py-1 rounded-full text-[11px]" style={{ color: "#a78bfa", background: "rgba(139,92,246,.12)" }}>{genre}</span>
          ))}
        </div>
        <button onClick={() => onDetails(movie)} className="w-full py-2.5 rounded-xl text-sm font-semibold text-white" style={{ background: "linear-gradient(135deg,#8b5cf6,#e5383b)" }}>
          See Details
        </button>
      </div>
    </div>
  );
}

