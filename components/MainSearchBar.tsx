import { ChangeEvent, useEffect, useState } from "react";
import useSearch from "../lib/useSearch";

export default function MainSearchBar() {
  const [searchInput, setSearchInput] = useState("");
  let searchResults = useSearch(searchInput);

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <section className="w-1/2 flex flex-col gap-12 p-5">
      <input
        className="input input-bordered input-accent"
        value={searchInput}
        onChange={handleSearchInput}
      />
      <ul className="">
        {searchResults.map((food: any) => (
          <li className="flex flex-row justify-between text-primary" key={food.name}>
            {food.name} <span className="text-accent">{food.price}$</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
