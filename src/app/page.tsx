"use client";
import { genreImages } from "../app/games/game_gen_img";
import { games } from "../app/games/data";
import Link from "next/link";
import { useState } from "react";

export default function AllGamesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const genres = Array.from(new Set(games.map((game) => game.genre)));
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string>("");

  const platforms = [
    {
      id: "pc",
      name: "PC",
    },
    {
      id: "web browser",
      name: "Web Game",
    },
  ];

  const filteredGames = games.filter((game) => {
    const matchGenre = selectedGenre === "All" || game.genre === selectedGenre;

    const matchSearch = game.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchPlatform =
      selectedPlatforms === "" ||
      selectedPlatforms === "all" ||
      game.platform.toLowerCase().includes(selectedPlatforms);

    return matchGenre && matchSearch && matchPlatform;
  });

  const [sortedRelevance, setSortedRelevance] = useState("");

  const sortedGames = [...filteredGames].sort((a, b) => {
    if (sortedRelevance === "id") {
      return a.id - b.id;
    }

    if (sortedRelevance === "name") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  return (
    <div className="max-w-full flex flex-row h-screen overflow-hidden bg-linear-to-br from-[#120c1d] via-[#07173d] to-[#110e32] text-slate-100 scroll-behavior: smooth;">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-1/3 left-0-translate-y-1/2 z-50 lg:hidden bg-linear-to-b from-indigo-500 to-purple-600 text-white px-1 py-7 rounded-r-xl shadow-[5px_0_20px_rgba(99,102,241,0.4)] border-y border-r border-white/20 transition-all duration-300 hover:px-2 hover:shadow-[5px_0_25px_rgba(168,85,247,0.5)] active:scale-90"
      >
        {sidebarOpen ? "❮" : "❯"}
      </button>

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen w-56 bg-[#0b0f2a] border-r border-white/5 z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:translate-x-0 z-40 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]`}
      >
        <p className="font-extrabold text-3xl mt-10 p-6 bg-clip-text text-transparent bg-linear-to-r from-blue-700 via-fuchsia-700 to-purple-500">
          Genres
        </p>
        <div className="grid grid-cols-1 gap-5 px-4">
          <button
            className="flex flex-row font-bold text-gray-400 text-md cursor-pointer items-center gap-2 group"
            onClick={() => {
              setSelectedGenre("All");
              setSidebarOpen(false);
            }}
          >
            <img
              className="w-10 h-10 rounded-md transition-transform group-hover:scale-110"
              src="https://media.craiyon.com/2025-04-08/-oTYTlfWQqiyASOnYVxH4g.webp"
              alt="all"
            />
            <span>All Games</span>
          </button>
          {genres.map((genre) => (
            <a
              key={genre}
              className="flex flex-row items-center gap-2 cursor-pointer group"
              onClick={() => {
                setSelectedGenre(genre);
                setSidebarOpen(false);
              }}
            >
              <img
                src={
                  genreImages[genre] ||
                  "https://img.freepik.com/free-photo/world-collapse-doomsday-scene-digital-painting_456031-63.jpg?semt=ais_hybrid&w=740&q=80"
                }
                alt={genre}
                className="w-10 h-10 rounded-md "
              />
              <span className="group-hover:text-indigo-300 text-gray-400 text-sm transition-colors">
                {genre}
              </span>
            </a>
          ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] p-3 lg:p-3">
        {/* HEADER SECTION */}
        <div className="flex flex-col gap-7 mb-5">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3 ">
              <div className="w-13 md:w-14 aspect-square rounded-3xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)">
                <img
                  src="https://media.craiyon.com/2025-04-08/-oTYTlfWQqiyASOnYVxH4g.webp"
                  alt=""
                  className=" rounded-full "
                />
              </div>

              <div className="flex flex-col">
                <h1 className="text-[25px] md:text-[45px] font-extrabold bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-purple-600 to-purple-500 leading-tight">
                  Discovery Library
                </h1>
                <p className="text-purple-500 text-sm md:text-sm font-medium tracking-wide">
                  Find your next adventure
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 px-6 p-2 rounded-full backdrop-blur-md mr-10">
              <span className="text-purple-400 font-bold text-lg">
                {filteredGames.length}
              </span>
              <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                games
              </span>
            </div>
          </div>
        </div>
        {/* Search Bar and select optoins */}
        <div className="flex flex-col sm:flex-row sm:gap-3 mb-6 sticky -top-3 z-10 bg-linear-to-br from-[#181027] via-[#07173d] to-[#110e32] shadow-[0_10px_20px_rgba(25,16,45,2)]">
          <div className="left-5 w-full rounded-full flex items-center backdrop-blur-md   ">
            <input
              type="text"
              placeholder="Search for games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-10 rounded-full text-[14px] text-gray-300 placeholder-slate-400 px-5 py-2 bg-white/5 backdrop-blur-md border-2 border-white/10 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 hover:border-indigo-400/50 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(129,140,248,0.4)] hover:scale-[1.02] hover:shadow-indigo-500/20
"
            />
          </div>
          <div className="flex felx-col gap-3 sm:gap-3 mt-3 sm:mt-0 ">
            <select
              className="w-50 h-10 rounded-full text-sm text-gray-400 placeholder-slate-400 px-3 py-2 bg-white/5 backdrop-blur-md border-2 border-white/10 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 hover:border-indigo-400/50 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(129,140,248,0.4)] hover:scale-[1.02] hover:shadow-indigo-500/20"
              value={sortedRelevance}
              onChange={(e) => setSortedRelevance(e.target.value)}
            >
              <option className=" bg-blue-950 text-gray-400 " value="all">
                Sorted Games
              </option>
              <option className="bg-blue-950 text-gray-400" value="id">
                ID
              </option>
              <option className="bg-blue-950 text-gray-400" value="name">
                Name
              </option>
            </select>

            <select
              className="w-50 h-10 rounded-full text-sm text-gray-400 placeholder-slate-400 px-3 py-2 bg-white/5 backdrop-blur-md border-2 border-white/10 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 hover:border-indigo-400/50 hover:bg-white/10 hover:shadow-[0_0_25px_rgba(129,140,248,0.4)] hover:scale-[1.02] hover:shadow-indigo-500/20"
              onChange={(e) => {
                setSelectedPlatforms(e.target.value);
              }}
            >
              {" "}
              <option className="bg-blue-950 text-white" value="all">
                All Platforms
              </option>
              {platforms.map((item) => {
                return (
                  <option
                    key={item.id}
                    className="bg-blue-950 text-white"
                    value={item.id}
                  >
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {/*CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 scroll-behavior: smooth; ">
          {sortedGames.map((game) => (
            <Link key={game.id} href={`/games/${game.id}`}>
              <div className="group relative rounded-2xl overflow-hidden bg-transparent backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-2 border-2 border-white/20 hover:border-blue-500 shadow-lg ring-1 ring-white/10 hover:ring-2 hover:ring-blue-900/60 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]">
                <div className="relative aspect-video w-full overflow-hidden border-b border-white/5">
                  <img
                    src={game.thumbnail}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-3 relative  ">
                  <div className="flex justify-between">
                    <h2 className="text-base font-bold mb-1 group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
                      {game.title}
                    </h2>
                    <span className=" mt-1.5 text-[13px] tracking-wider text-gray-400 group-hover:text-white transition-colors duration-300 ">
                      {game.id}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-wider text-gray-400 group-hover:text-white transition-colors duration-300 ">
                      {game.genre}
                    </span>
                    <div className="transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
