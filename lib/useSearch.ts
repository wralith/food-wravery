import { useEffect, useState } from "react";
import data from "../pages/api/foods.json";

const useSearch = (chars: string) => {
  let searchedFoodData: {}[] = [];
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    setSearchInput(chars);
  }, [chars]);

  if (searchInput !== "") {
    searchedFoodData = data.foods.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  } else {
    searchedFoodData = [];
  }

  return searchedFoodData;
};

export default useSearch;
