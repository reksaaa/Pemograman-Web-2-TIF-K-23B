import { useEffect, useState } from "react";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    // Immediate fetch on mount so loading disappears quickly
    const fetchData = () => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
        .then((res) => res.json())
        .then((data) => {
          setPokemon(data);
        })
        .catch((err) => console.error("Failed to fetch Pokémon:", err));
    };

    fetchData();

    // Auto-update every 3 seconds as requested
    const intervalId = setInterval(fetchData, 3000);

    // Clean up interval subscription to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []);

  // Derive loading status rather than tracking it via synchronized state
  const isLoading = pokemon === null;

  if (isLoading) {
    return (
      <div className="pokemon-loading">
        <div className="pokeball-spinner"></div>
        <h1>Loading PokéDex...</h1>
      </div>
    );
  }

  return (
    <div className="pokemon-container">
      <h1 className="pokemon-title">Pokémon Center</h1>
      <p className="pokemon-subtitle">Real-time updates from PokéAPI</p>

      {pokemon && (
        <div className="pokemon-grid">
          {pokemon.results.map((p, index) => {
            const capitalizedName =
              p.name.charAt(0).toUpperCase() + p.name.slice(1);
            return (
              <div key={p.name} className="pokemon-card">
                <span className="pokemon-id">
                  #{String(index + 1).padStart(3, "0")}
                </span>
                <div className="pokemon-image-box">
                  <img
                    className="pokemon-image"
                    src={`https://img.pokemondb.net/sprites/home/normal/${p.name}.png`}
                    alt={p.name}
                    loading="lazy"
                  />
                </div>
                <h2 className="pokemon-name">{capitalizedName}</h2>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
