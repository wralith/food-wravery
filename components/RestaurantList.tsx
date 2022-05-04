import restaurants from "../pages/api/restaurants.json";

import Link from "next/link";
import { MdStar } from "react-icons/md";

const RestaurantList = () => {
  // Sort by score
  const sortedRestaurantList = restaurants.restaurants.sort((a, b) =>
    a.stars < b.stars ? 1 : -1
  );

  return (
    <div
      className="m-auto flex w-[90%] flex-col gap-12 rounded-lg border border-gray-900/50 bg-base-100/70 
      p-6 text-center backdrop-blur-sm lg:w-1/2"
    >
      <ul className="flex flex-col gap-7 text-lg">
        {sortedRestaurantList.map((item) => (
          <li
            key={item["restaurant-id"]}
            className="flex flex-row justify-between"
          >
            <div className="flex items-center justify-around gap-2">
              <Link href={`restaurants/${item["restaurant-id"]}`}>
                <a className="text-base-content transition-colors hover:text-primary">
                  {item.name}
                </a>
              </Link>
              <span className="text-sm">{`(${item.district})`}</span>
            </div>
            <span className="flex flex-row items-center gap-2 text-primary">
              <MdStar /> {item.stars}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
