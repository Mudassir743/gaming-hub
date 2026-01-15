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
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center p-4 overflow-hidden bg-black text-white">
      <div
        className="fixed inset-0 w-full h-full z-0 pointer-events-none "
        style={{
          backgroundImage: `url(${game.thumbnail})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px) brightness(0.3)",
          transform: "scale(1.1)",
        }}
      />

      {/* 3. MAIN GLASS CARD CONTAINER */}
      <div className="relative z-5 w-full max-w-6xl mt-10 bg-black/40 backdrop-blur-3xl flex border border-gray-700 rounded-[3rem] p-6 md:p-10 flex-col md:flex-row items-center gap-5 shadow-2xl">
        <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
          <img
            src={game.thumbnail}
            alt={game.title}
            className="w-full h-auto object-cover "
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col space-y-5">
          <div className="space-y-5 ">
            <h2 className="  text-3xl md:text-4xl font-black w-full tracking-tight bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-600 to-purple-500 leading-tight ">
              {game.title}
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md -">
              {game.short_description}
            </p>
          </div>
          <hr className="border-gray-800 " />
          <div className="grid grid-cols-2 ">
            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">
                Rating
              </p>
              <p className="text-white text-[20px] font-black italic">
                4.8 / 5.0
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                Platform
              </p>
              <p className=" text-[20px] font-black text-white">
                {game.platform}
              </p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={game.game_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center w-full md:w-auto px-12 py-5 overflow-hidden rounded-full font-black uppercase text-sm tracking-[0.2em] text-whitetransition-all duration-500 ease-out bg-linear-to-br from-indigo-700 via-indigo-600 to-purple-600 border-white/20 shadow-[0_0_15px_rgba(79,70,229,0.3)]hover:scale-105 hover:shadow-[0_0_35px_rgba(147,51,234,0.6)] hover:border-white/50 active:scale-95"
            >
              {/* 1. Animated Shimmer Effect (Button ke andar se light guzregi) */}
              <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform"></span>

              {/* 2. Background Glow on Hover */}
              <span className="absolute inset-0 bg-linear-to-tr from-indigo-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

              {/* Text Layer */}
              <span className="relative z-10 flex items-center gap-2 text-sm h-4 w-full justify-center">
                Play Game
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="relative z-100 mt-5 max-w-2xl text-center">
        <p className="text-zinc-500 italic text-md pb-4">
          "A cross-platform {game.genre} developed by {game.developer} and
          Published by {game.publisher}"
        </p>
        <div className="mt-5 mb-10">
          <Link
            href="/"
            className="bg-white/10 hover:bg-white/20 border border-white/10 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all"
          >
            Back to Library
          </Link>
        </div>
      </div>
    </div>
  );
}
