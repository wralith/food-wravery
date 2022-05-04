import styles from "./Navbar.module.css";
import NavbarCart from "./NavbarCart";
import NavbarUserIcon from "./NavbarUserIcon";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a className="btn btn-ghost normal-case text-lg">
        Food <span className="text-primary">Wra</span>very
      </a>

      <div className="flex">
        <NavbarCart />
        <NavbarUserIcon />
      </div>
    </nav>
  );
}
