import { useMemo, useState } from "react";
import { ALL_GENRES, MOVIES } from "../data/movies";
import MovieCard from "./MovieCard";

export default function MoviesPage({ onDetails, watchlist, toggleWatchlist }) {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [sort, setSort] = useState("default");

  const results = useMemo(() => {
    let list = MOVIES.filter(movie => {
      const q = search.toLowerCase().trim();
      const matchesSearch = !q || movie.title.toLowerCase().includes(q) || movie.genres.some(g => g.toLowerCase().includes(q));
      const matchesGenre = !genre || movie.genres.includes(genre);
      return matchesSearch && matchesGenre;
    });

    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === "year") list = [...list].sort((a, b) => b.year - a.year);
    return list;
  }, [search, genre, sort]);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">Explore Movies</h1>
          <p className="text-gray-500">Search and discover your next favorite movie.</p>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search for a movie..." className="w-full px-5 py-4 rounded-2xl outline-none text-white bg-[#16161a] border border-white/10" />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <button onClick={() => setGenre("")} className="px-4 py-2 rounded-full text-xs" style={{ background: !genre ? "#8b5cf6" : "#18181b", color: "#fff" }}>All</button>
          {ALL_GENRES.map(g => <button key={g} onClick={() => setGenre(genre === g ? "" : g)} className="px-4 py-2 rounded-full text-xs text-gray-300 bg-[#18181b]">{g}</button>)}
          <select value={sort} onChange={e => setSort(e.target.value)} className="ml-auto px-4 py-2 rounded-xl bg-[#18181b] text-gray-300 border border-white/10">
            <option value="default">Default</option>
            <option value="rating">Top Rated</option>
            <option value="year">Newest</option>
          </select>
        </div>

        <p className="text-xs text-gray-600 mb-5">{results.length} titles found</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {results.map(movie => <MovieCard key={movie.id} movie={movie} onDetails={onDetails} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />)}
        </div>
      </div>
    </div>
  );
}


