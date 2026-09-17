import { useEffect, useState } from "react";
import { FEATURED_IDS, MOVIES } from "../data/movies";

export default function Hero({ onDetails, watchlist, toggleWatchlist }) {
  const featured = FEATURED_IDS.map(id => MOVIES.find(movie => movie.id === id));
  const [index, setIndex] = useState(0);
  const movie = featured[index];
  const saved = watchlist.has(movie.id);

  useEffect(() => {
    const timer = setInterval(() => setIndex(current => (current + 1) % featured.length), 7000);
    return () => clearInterval(timer);
  }, [featured.length]);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      <img src={movie.backdrop} alt="" className="absolute inset-0 w-full h-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-5" style={{ color: "#a78bfa", background: "rgba(139,92,246,.14)" }}>
            DISCOVER • WATCH • ENJOY
          </span>

          <div className="flex gap-2 mb-4">
            {movie.genres.map(genre => <span key={genre} className="px-3 py-1 rounded-full text-xs" style={{ color: "#a78bfa", background: "rgba(139,92,246,.13)" }}>{genre}</span>)}
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-5">{movie.title}</h1>
          <div className="flex gap-4 text-sm text-gray-400 mb-5">
            <span className="text-amber-400 font-bold">★ {movie.rating}</span>
            <span>{movie.year}</span>
            <span>{movie.runtime}</span>
          </div>
          <p className="text-gray-400 leading-relaxed mb-8 max-w-xl">{movie.overview}</p>

          <div className="flex flex-wrap gap-3">
            <button onClick={() => onDetails(movie)} className="px-7 py-3.5 rounded-2xl font-bold text-white" style={{ background: "linear-gradient(135deg,#8b5cf6,#e5383b)" }}>
              ▶ Watch Now
            </button>
            <button onClick={() => onDetails(movie)} className="px-7 py-3.5 rounded-2xl text-white bg-white/10">ⓘ More Info</button>
            <button onClick={() => toggleWatchlist(movie.id)} className="px-5 py-3.5 rounded-2xl text-white bg-white/10">
              {saved ? "✓ Saved" : "+ Save"}
            </button>
          </div>

          <div className="flex gap-2 mt-8">
            {featured.map((item, i) => (
              <button key={item.id} onClick={() => setIndex(i)} className="h-2 rounded-full transition-all" style={{ width: i === index ? 28 : 8, background: i === index ? "#8b5cf6" : "#444" }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

