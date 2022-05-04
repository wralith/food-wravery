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
// TODO random restaurant on "Suprise Me"

export default function SideMenu() {
  return (
    <>
      <div className="dropdown dropdown-right ml-[5%] relative mb-5">
        <a
          tabIndex={0}
          className="btn btn-primary btn-outline text-xl bg-base-100/70 backdrop-blur-sm "
        >
          <MdMenu />
        </a>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 ml-2"
        >
          <li>
            <Link href="user/favorites">
              <a>
                <MdStar />
                Favorites
              </a>
            </Link>
          </li>
          <li>
            <Link href="user/offers">
              <a>
                <MdLocalOffer />
                Special Offers
              </a>
            </Link>
          </li>
          <li>
            <Link href="restaurants">
              <a>
                <MdRestaurant />
                Restaurants
              </a>
            </Link>
          </li>
          <li>
            <Link href="user/orders">
              <a>
                <MdFastfood />
                My Orders
              </a>
            </Link>
          </li>
          <li>
            <Link href={`restaurants/${0}`}>
              <a>
                <MdHail />
                Surprise Me!
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
