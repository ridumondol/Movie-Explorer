export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-[#080808]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="w-20 h-20 mx-auto mb-7 rounded-3xl flex items-center justify-center text-3xl" style={{ background: "linear-gradient(135deg,#8b5cf6,#e5383b)" }}>🎬</div>
        <h1 className="text-4xl md:text-5xl font-black text-white mb-5">About MovieExplorer</h1>
        <p className="text-gray-400 leading-relaxed mb-5">MovieExplorer is a modern movie discovery application where users can search movies, explore genres, view detailed information, and create a personal watchlist.</p>
        <p className="text-gray-600">Built with React and Tailwind CSS.</p>
      </div>
    </div>
  );
}

