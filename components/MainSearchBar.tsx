import { ChangeEvent, useState } from "react";
import useSearch from "../lib/useSearch";

export default function MainSearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [focused, setFocused] = useState(false);
  let searchResults = useSearch(searchInput);

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <section
      className="m-auto flex w-full flex-col gap-12 rounded-lg border border-gray-900/50 
      bg-base-100/70 p-6 text-center subpixel-antialiased backdrop-blur-sm transition-all"
    >
      {focused ? <div className="modal" /> : ""}
      <input
        className="input input-bordered border-primary/50 text-inherit"
        value={searchInput}
        onChange={handleSearchInput}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="What do you want to eat today?"
      />
      <ul className="flex flex-col gap-2">
        {searchResults.map((food: any) => (
          <li
            className="flex flex-row justify-between pb-3 text-primary"
            key={food.name}
          >
            {food.name} <span className="text-accent">{food.price}$</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
