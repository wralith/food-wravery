import { MdPerson } from "react-icons/md";

export default function NavbarUserIcon() {
  return (
    <div className="dropdown-end dropdown">
      <label tabIndex={0} className="avatar btn btn-ghost btn-circle">
        <MdPerson className="text-2xl" />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box menu-compact mt-6 w-52 bg-base-100 p-2 shadow"
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
}
