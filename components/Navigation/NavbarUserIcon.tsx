import { MdPerson } from "react-icons/md";

export default function NavbarUserIcon() {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <MdPerson className="text-2xl" />
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-6 p-2 shadow bg-base-100 rounded-box w-52"
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
