import Link from "next/link";
import styles from "./Navbar.module.css";
import NavbarCart from "./NavbarCart";
import NavbarUserIcon from "./NavbarUserIcon";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className="btn btn-ghost text-lg normal-case">
          Food <span className="text-primary">Wra</span>very
        </a>
      </Link>

      <div className="flex">
        <NavbarCart />
        <NavbarUserIcon />
      </div>
    </nav>
  );
}
