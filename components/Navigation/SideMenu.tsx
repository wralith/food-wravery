import Link from "next/link";
import {
  MdMenu,
  MdStar,
  MdLocalOffer,
  MdRestaurant,
  MdFastfood,
  MdHail,
} from "react-icons/md";

// TODO need modal for background in mobile devices
// TODO add dynamic restaurant number on randomRestaurant var

export default function SideMenu() {
  let randomRestaurant = Math.floor(Math.random() * 3 + 1)

  return (
    <nav>
      <div className="dropdown dropdown-right relative ml-[2.5%] mb-5">
        <a
          tabIndex={0}
          className="btn btn-outline btn-primary bg-base-100/70 text-xl backdrop-blur-sm "
        >
          <MdMenu />
        </a>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box ml-2 w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <Link href="/user/favorites">
              <a>
                <MdStar />
                Favorites
              </a>
            </Link>
          </li>
          <li>
            <Link href="/user/offers">
              <a>
                <MdLocalOffer />
                Special Offers
              </a>
            </Link>
          </li>
          <li>
            <Link href="/restaurants">
              <a>
                <MdRestaurant />
                Restaurants
              </a>
            </Link>
          </li>
          <li>
            <Link href="/user/orders">
              <a>
                <MdFastfood />
                My Orders
              </a>
            </Link>
          </li>
          <li>
            <Link href={`/restaurants/${randomRestaurant}`}>
              <a>
                <MdHail />
                Surprise Me!
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
