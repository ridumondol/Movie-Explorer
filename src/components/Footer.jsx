
import {
  FilmIcon,
  GithubIcon,
  TwitterXIcon,
  InstagramIcon,
  FacebookIcon,
} from "./icons";

function Footer({ setPage }) {
  const go = (page) => {
    setPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socials = [
    {
      label: "GitHub",
      Icon: GithubIcon,
      url: "https://github.com/",
    },
    {
      label: "X",
      Icon: TwitterXIcon,
      url: "https://x.com/",
    },
    {
      label: "Instagram",
      Icon: InstagramIcon,
      url: "https://www.instagram.com/",
    },
    {
      label: "Facebook",
      Icon: FacebookIcon,
      url: "https://www.facebook.com/",
    },
  ];

  return (
    <footer
      style={{
        background: "#0a0a0d",
        borderTop: "1px solid rgba(255,255,255,0.055)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg,#8b5cf6,#e5383b)",
                }}
              >
                <FilmIcon size={15} />
              </div>

              <span
                className="font-bold text-[17px]"
                style={{
                  fontFamily: "Manrope,sans-serif",
                  color: "#f8f8f8",
                }}
              >
                Movie
                <span
                  style={{
                    background:
                      "linear-gradient(90deg,#a78bfa,#f87171)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Explorer
                </span>
              </span>
            </div>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "#4b5563" }}
            >
              Discover movies, explore new stories, and find something
              worth watching.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-[11px] font-bold tracking-widest mb-4"
              style={{ color: "#374151" }}
            >
              NAVIGATION
            </p>

            <div className="flex flex-col gap-2.5">
              {[
                ["home", "Home"],
                ["movies", "Movies"],
                ["watchlist", "Watchlist"],
                ["about", "About"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className="text-left text-sm w-fit transition-colors"
                  style={{ color: "#6b7280" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#d1d5db")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#6b7280")
                  }
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <p
              className="text-[11px] font-bold tracking-widest mb-4"
              style={{ color: "#374151" }}
            >
              FOLLOW US
            </p>

            <div className="flex gap-2.5">
              {socials.map(({ label, Icon, url }) => (
                <a
                  key={label}
                  href={url}
                  title={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    color: "#6b7280",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(139,92,246,0.15)";
                    e.currentTarget.style.color = "#d1d5db";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.05)";
                    e.currentTarget.style.color = "#6b7280";
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{
            borderColor: "rgba(255,255,255,0.05)",
            color: "#374151",
          }}
        >
          <span>© 2026 MovieExplorer. All rights reserved.</span>

          <span>Made with ♥ for cinema lovers</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;