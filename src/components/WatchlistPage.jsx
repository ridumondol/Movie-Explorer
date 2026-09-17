import { MOVIES } from "../data/movies";
import MovieCard from "./MovieCard";

export default function WatchlistPage({ onDetails, watchlist, toggleWatchlist, setPage }) {
  const movies = MOVIES.filter(movie => watchlist.has(movie.id));

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-white mb-2">My Watchlist</h1>
        <p className="text-gray-500 mb-10">{movies.length} saved titles</p>

        {movies.length ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} onDetails={onDetails} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />)}
          </div>
        ) : (
          <div className="text-center py-24">
            <h2 className="text-2xl font-bold text-white mb-2">Nothing saved yet</h2>
            <p className="text-gray-500 mb-6">Bookmark movies to build your watchlist.</p>
            <button onClick={() => setPage("movies")} className="px-6 py-3 rounded-xl text-white font-bold" style={{ background: "linear-gradient(135deg,#8b5cf6,#e5383b)" }}>Browse Movies</button>
          </div>
        )}
      </div>
    </div>
  );
}


