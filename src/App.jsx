import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieCard from "./components/MovieCard";
import MovieModal from "./components/MovieModal";
import MoviesPage from "./components/MoviesPage";
import WatchlistPage from "./components/WatchlistPage";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
import { MOVIES } from "./data/movies";

function Trending({ onDetails, watchlist, toggleWatchlist }) {
  return (
    <section className="py-20 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black text-white mb-2">Trending Now</h2>
        <p className="text-sm text-gray-500 mb-8">Popular titles worth watching right now.</p>
        <div className="flex gap-5 overflow-x-auto pb-4">
          {MOVIES.map(movie => (
            <div key={movie.id} className="min-w-[200px] w-[200px]">
              <MovieCard movie={movie} onDetails={onDetails} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [modal, setModal] = useState(null);
  const [watchlist, setWatchlist] = useState(new Set());

  const toggleWatchlist = id => {
    setWatchlist(previous => {
      const next = new Set(previous);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[#080808]">
      <Navbar page={page} setPage={setPage} watchlistCount={watchlist.size} />

      {page === "home" && (
        <>
          <Hero onDetails={setModal} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />
          <Trending onDetails={setModal} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />
        </>
      )}

      {page === "movies" && <MoviesPage onDetails={setModal} watchlist={watchlist} toggleWatchlist={toggleWatchlist} />}
      {page === "watchlist" && <WatchlistPage onDetails={setModal} watchlist={watchlist} toggleWatchlist={toggleWatchlist} setPage={setPage} />}
      {page === "about" && <AboutPage />}

      <Footer setPage={setPage} />

      {modal && (
        <MovieModal
          movie={modal}
          onClose={() => setModal(null)}
          watchlist={watchlist}
          toggleWatchlist={toggleWatchlist}
        />
      )}
    </div>
  );
}

