import { FavoritePokemons } from "@/pokemons";
import { IoHeartOutline } from "react-icons/io5";

// export const metadata = {
//   title: "Favoritos",
//   description:
//     "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique praesentium repudiandae asperiores libero consequatur ea cumque voluptate. Veritatis nostrum recusandae blanditiis, aspernatur omnis aperiam molestias, obcaecati, in doloribus assumenda quas.",
// };

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokémons Favoritos <small className="text-blue-500">Global State</small>
      </span>

      {/* <PokemonGrid pokemons={[]} /> */}

      <FavoritePokemons />
    </div>
  );
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  );
};
