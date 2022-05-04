import { ChangeEvent, useState } from "react";
import useSearch from "../lib/useSearch";

export default function MainSearchBar() {
  const [searchInput, setSearchInput] = useState("");
  let searchResults = useSearch(searchInput);

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <section
      className={
        "lg:w-1/2 flex flex-col gap-12 p-6 text-center bg-base-100/70 m-auto w-[90%] backdrop-blur-sm border border-gray-900/50 rounded-lg"
      }
    >
      <input
        className="input input-bordered border-primary/50"
        value={searchInput}
        onChange={handleSearchInput}
        placeholder="What do you want to eat today?"
      />
      <ul className="flex flex-col gap-2">
        {searchResults.map((food: any) => (
          <li
            className="flex flex-row justify-between text-primary pb-3"
            key={food.name}
          >
            {food.name} <span className="text-accent">{food.price}$</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
