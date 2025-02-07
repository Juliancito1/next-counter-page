"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { NoFavorites } from "@/app/dashboard/favorites/page";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );
  // const [pokemons, setPokemons] = useState(favoritePokemons);

  // useEffect(() => {
  //   setPokemons(favoritePokemons);
  // }, [favoritePokemons]);

  return (
    <>
      {/* //<PokemonGrid pokemons={favoritePokemons} /> */}
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonGrid pokemons={favoritePokemons} />
      )}
    </>
  );
};
