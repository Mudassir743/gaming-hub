return (
  <div className="h-screen flex bg-gray-900 text-white p-3">
    <aside className="w-72 overflow-y-auto">
      {/* Your genres buttons */}
      <div className="flex flex-col gap-3 mb-12 overflow-y-auto">
        <button
          className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
            selectedGenre === "All"
              ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
          }`}
          onClick={() => setSelectedGenre("All")}
        >
          All Games
        </button>
        <div className="flex flex-col gap-4 items-center">
          {genres.map((genre) => (
            <button
              key={genre}
              className={` px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedGenre === genre
                  ? "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
    </aside>

    <main className="flex-1 overflow-y-auto max-w-7xl mb-12">
      {/* Your games grid */}
      <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-900">
        Discovery Library
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {filteredGames.map((game) => (
          <Link key={game.id} href={`/games/${game.id}`} className="group">
            {/* Game card */}
          </Link>
        ))}
      </div>

      {filteredGames.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl">No games found.</p>
        </div>
      )}
    </main>
  </div>
);
