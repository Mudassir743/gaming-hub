import { games } from "../data";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function GamePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const game = games.find((g) => g.id.toString() === id);

  if (!game) notFound();

  return (
    <div className="min-h-screen bg-linear-to-br from-[#120c1d] via-[#07173d] to-[#110e32] text-slate-100 flex items-center justify-center p-4 md:p-8">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden ">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Main Glass Card */}
      <div className="relative z-10 w-full max-w-6xl  bg-white/3 backdrop-blur-2xl border border-white/10 rounded-4xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-150">
        {/* LEFT: Image Section with Smart Fit */}
        <div className="w-full md:w-1/2 relative bg-black/40  flex items-center justify-center overflow-hidden border-r border-white/5">
          {/* Background Blur for the Image area */}
          <img
            src={game.thumbnail}
            className="absolute inset-0 w-full h-full object-cover opacity-30 blur-2xl scale-125 "
            alt="bg-blur"
          />

          <img
            src={game.thumbnail}
            alt={game.title}
            className="relative z-10 w-full h-full object-contain md:p-4  drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* RIGHT: Details Section */}
        <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center">
          <div className="mb-auto">
            <Link
              href="/"
              className="inline-flex items-center text-xs font-bold tracking-widest text-slate-500 hover:text-indigo-400 mb-10 transition-all group uppercase"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Library
            </Link>

            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">
                {game.genre}
              </span>

              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] bg-clip-text text-transparent bg-linear-to-r from-indigo-700 to-purple-700">
                {game.title}
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed max-w-md font-medium">
                Step into the universe of{" "}
                <span className="text-white">{game.title}</span>. Experience
                top-tier {game.genre} gameplay with stunning visuals.
              </p>

              <div className="flex gap-8 py-8 border-y border-white/5">
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">
                    Rating
                  </p>
                  <p className="text-xl font-bold text-yellow-500">4.8 / 5</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">
                    Platform
                  </p>
                  <p className="text-xl font-bold text-slate-200">PC / Web</p>
                </div>
              </div>
            </div>
          </div>

          {/* PLAY NOW Button */}
          <div className="mt-12">
            <a
              href={game.game_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-12 py-5 bg-indigo-600 hover:bg-indigo-600 text-white font-black text-sm uppercase tracking-widest rounded-full shadow-[0_15px_30px_-5px_rgba(79,70,229,0.5)] transition-all duration-300 hover:-translate-y-1 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Play Game
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
