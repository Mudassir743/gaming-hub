"use client";

import { games } from "../app/games/data";
import Link from "next/link";
import { useState } from "react";

export default function AllGamesPage() {
  const genreImages: Record<string, string> = {
    Action: "https://wallpapercave.com/wp/wp14777943.jpg",
    Racing:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJBI8VX5aDGsm0aZrtaVDzWbLDprKtTb8giw&s",
    Shooter:
      "https://play-lh.googleusercontent.com/BkB2UFUn4EWqNNIWKezeQjl32_d7wRICCKGFxFYIhXlNy0WKYONKR0pbxXvSr1wZAvo",
    Strategy:
      "https://www.shutterstock.com/image-vector/logo-strategy-games-neon-icon-600w-1403966939.jpg",
    Sports:
      "https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?semt=ais_hybrid&w=740&q=80",
    Puzzle: "",
    MMORPG:
      "https://cdn.dribbble.com/userupload/38879335/file/original-692114fd4c44ded9bc90e88f79eca5fa.jpg?resize=400x0",

    ARPG: "https://cdn.aptoide.com/imgs/3/7/9/37922a0fe9f245b66867cb489ef2157c_fgraphic.png",

    MMOARPG:
      "https://cdn.dribbble.com/userupload/38879335/file/original-692114fd4c44ded9bc90e88f79eca5fa.jpg?resize=400x0",
    Fighting:
      "https://c4.wallpaperflare.com/wallpaper/798/97/312/tekken-7-wallpaper-preview.jpg",

    MOBA: "https://c4.wallpaperflare.com/wallpaper/110/414/496/4k-battle-black-beacon-games-wallpaper-preview.jpg",

    RPG: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNwtgJcyOfxlonD6divlr5T2XmmW9UMmc-VQ&s",
    MMO: "https://img.freepik.com/free-photo/fantasy-group-adventurers_23-2151470646.jpg?semt=ais_hybrid&w=740&q=80",
    Social: "https://images4.alphacoders.com/139/thumb-350-1396376.webp",
    Fantasy:
      "https://c4.wallpaperflare.com/wallpaper/951/583/798/fantasy-art-warrior-dark-souls-iii-dark-souls-wallpaper-preview.jpg",
  };

  const [searchTerm, setSearchTerm] = useState("");
  const genres = Array.from(new Set(games.map((game) => game.genre)));
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const filteredGames = games.filter((game) => {
    const matchGenre = selectedGenre === "All" || game.genre === selectedGenre;

    const matchSearch = game.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchGenre && matchSearch;
  });

  return (
    <div className="max-w-full flex flex-row mb-12 h-screen lg-grid-cols-4 overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] bg-linear-to-br from-[#120c1d] via-[#07173d] to-[#110e32] text-slate-100 accent-cyan-400 p-2 shadow-[inset_0_200+_140px_rgba(99,102,241,0.12)]">
      <aside className="w-72 overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ">
        <div className="  grid grid-cols-1 gap-6  overflow-y-auto min-h-screen mt-5 bg-transparent  ">
          <p className=" font-extrabold text-4xl flex pl-3  bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-purple-500  ">
            {" "}
            All Genres
          </p>
          <a
            className={` flex flex-row  font-bold text-lg cursor-pointer items-center  px-4 gap-2 w-45 ${
              selectedGenre === "All"
            }`}
            onClick={() => setSelectedGenre("All")}
          >
            <img
              className=" w-10 h-10 rounded-md  "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL1epibC-N5OCsK78317n2ngiO_8mMXtp7-8dkz8-daw&s"
              alt="image "
            />{" "}
            <span>All Games</span>
          </a>
          <div className=" flex flex-col  w-full  text-left cursor-pointer">
            {genres.map((genre) => (
              <div className="  flex felx-roe ">
                <a
                  key={genre}
                  className={` px-5 py-2 text-sm flex  flex-row items-center gap-2 ${
                    selectedGenre === genre
                  }`}
                  onClick={() => setSelectedGenre(genre)}
                >
                  <img
                    src={
                      genreImages[genre] ||
                      "https://c4.wallpaperflare.com/wallpaper/800/864/33/pc-game-ps4-hellblade-wallpaper-preview.jpg"
                    }
                    alt={genre}
                    className="w-10 h-10 rounded-md object-cover "
                    loading="lazy"
                  />
                  {genre}
                </a>
              </div>
            ))}
          </div>
        </div>
      </aside>
      <div className="max-w-full flex flex-col mb-12 h-screen lg-grid-cols-4 overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]  ">
        <div className=" flex items-center gap-14 justify-between ">
          <h1 className=" pl-10 text-5xl font-extrabold mb-10 mt-5 bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-purple-500 ">
            Discovery Library
          </h1>
          <div className=" w-120 pr-20">
            <input
              type="text"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-10 rounded-full bg-white/5 text-gray-300 placeholder-slate-400 px-5 py-5 pl-5 backdrop-blur-md focus:outline-none border border-gray-600 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 transition-all duration-300"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 min-h-screen">
          {filteredGames.map((game) => (
            <Link key={game.id} href={`/games/${game.id}`} className="group">
              <div
                className="
relative
rounded-xl
overflow-hidden
bg-white/7 backdrop-blur-xl
transition-all duration-300 ease-out
hover:-translate-y-1
border border-white/20 hover:border-blue-500
shadow-lg
ring-1 ring-white/10 hover:ring-2 hover:ring-blue-900/60
hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
"
              >
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={game.thumbnail}
                    alt={game.game_url}
                    className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#222832] via-transparent to-transparent opacity-10" />
                </div>

                <div className="p-2 relative">
                  <h2 className="text-10  font-bold mb-1 group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
                    {game.title}
                  </h2>

                  <div className="flex items-center justify-between">
                    <span className=" font- text-sm tracking-wider  text-gray-400 group-hover:text-white transition-colors duration-300 ">
                      {game.genre}
                    </span>

                    <div className="transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-400"
                        viewBox=""
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
