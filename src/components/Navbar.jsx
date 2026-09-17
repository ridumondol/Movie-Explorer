import { useEffect, useState } from "react";
import { FilmIcon, MenuIcon, XIcon } from "./icons";

function Navbar({ page, setPage, watchlistCount }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const go = (pageName) => {
    setPage(pageName);
    setOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navItems = ["home", "movies", "watchlist", "about"];

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(8,8,8,0.94)"
          : "linear-gradient(180deg,rgba(8,8,8,0.7) 0%,transparent 100%)",
        backdropFilter: scrolled
          ? "blur(20px) saturate(1.4)"
          : "blur(4px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.055)"
          : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => go("home")}
          className="flex items-center gap-2.5 group flex-shrink-0"
        >
          {/* Logo */}
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
            style={{
              background: "linear-gradient(135deg,#8b5cf6,#e5383b)",
            }}
          >
            <FilmIcon size={15} />
          </div>

          {/* Brand Name */}
          <span
            className="text-[17px] font-bold"
            style={{
              fontFamily: "Manrope, sans-serif",
              color: "#ffffff",
            }}
          >
            Movie
            <span
              style={{
                background: "linear-gradient(90deg,#a78bfa,#f87171)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Explorer
            </span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((id) => {
            const label =
              id === "watchlist"
                ? `Watchlist${
                    watchlistCount > 0 ? ` (${watchlistCount})` : ""
                  }`
                : id.charAt(0).toUpperCase() + id.slice(1);

            const active = page === id;

            return (
              <button
                key={id}
                onClick={() => go(id)}
                className="relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-200"
                style={{
                  color: active ? "#f8f8f8" : "#9ca3af",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = "#e5e7eb";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.color = "#9ca3af";
                  }
                }}
              >
                {active && (
                  <span
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: "rgba(139,92,246,0.13)",
                      border: "1px solid rgba(139,92,246,0.22)",
                    }}
                  />
                )}

                <span className="relative">{label}</span>
              </button>
            );
          })}

          {/* Explore Movies Button */}
          <button
            onClick={() => go("movies")}
            className="ml-2 flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl transition-all hover:brightness-115 hover:scale-105 active:scale-95 shadow-lg"
            style={{
              background: "linear-gradient(135deg,#8b5cf6,#e5383b)",
              color: "#fff",
            }}
          >
            Explore Movies
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl"
          style={{
            background: "rgba(255,255,255,0.06)",
            color: "#d1d5db",
          }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <XIcon size={16} /> : <MenuIcon size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{
            background: "rgba(10,10,14,0.97)",
            borderColor: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="px-4 py-4 space-y-1">
            {navItems.map((id) => {
              const label =
                id === "watchlist"
                  ? `Watchlist${
                      watchlistCount > 0 ? ` (${watchlistCount})` : ""
                    }`
                  : id.charAt(0).toUpperCase() + id.slice(1);

              return (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className="w-full text-left px-4 py-3 text-sm font-medium rounded-xl"
                  style={{
                    color: page === id ? "#f8f8f8" : "#9ca3af",
                    background:
                      page === id
                        ? "rgba(139,92,246,0.13)"
                        : "transparent",
                  }}
                >
                  {label}
                </button>
              );
            })}

            {/* Mobile Explore Button */}
            <button
              onClick={() => go("movies")}
              className="w-full mt-2 py-3 text-sm font-bold rounded-xl text-white"
              style={{
                background: "linear-gradient(135deg,#8b5cf6,#e5383b)",
              }}
            >
              Explore Movies
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;