import { useEffect } from "react";

export default function MovieModal({ movie, onClose, watchlist, toggleWatchlist }) {
  const saved = watchlist.has(movie.id);

  useEffect(() => {
    const handleKey = e => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,.88)", backdropFilter: "blur(15px)" }} onClick={onClose}>
      <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl flex flex-col md:flex-row" style={{ background: "#16161a" }} onClick={e => e.stopPropagation()}>
        <img src={movie.backdrop} alt={movie.title} className="w-full md:w-80 h-64 md:h-auto object-cover" />

        <div className="p-6 md:p-8 flex-1 relative">
          <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 text-white">✕</button>
          <h2 className="text-3xl font-black text-white pr-10 mb-4">{movie.title}</h2>

          <div className="flex flex-wrap gap-3 mb-5 text-sm">
            <span className="text-amber-400 font-bold">★ {movie.rating}/10</span>
            <span className="text-gray-400">{movie.year}</span>
            <span className="text-gray-400">{movie.runtime}</span>
          </div>

          <div className="flex gap-2 flex-wrap mb-5">
            {movie.genres.map(g => <span key={g} className="px-3 py-1 rounded-full text-xs" style={{ color: "#a78bfa", background: "rgba(139,92,246,.13)" }}>{g}</span>)}
          </div>

          <p className="text-gray-400 leading-relaxed mb-6">{movie.overview}</p>

          <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-white/5 mb-6">
            <div><small className="text-gray-500">Language</small><p className="text-white">{movie.language}</p></div>
            <div><small className="text-gray-500">Runtime</small><p className="text-white">{movie.runtime}</p></div>
            <div><small className="text-gray-500">Status</small><p className="text-white">{movie.status}</p></div>
            <div><small className="text-gray-500">Year</small><p className="text-white">{movie.year}</p></div>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 py-3 rounded-2xl font-bold text-white" style={{ background: "linear-gradient(135deg,#8b5cf6,#e5383b)" }}>▶ Watch Trailer</button>
            <button onClick={() => toggleWatchlist(movie.id)} className="px-5 py-3 rounded-2xl text-white bg-white/10">{saved ? "✓ Saved" : "+ Save"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

