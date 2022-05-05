import Link from "next/link";
import { VscGithubInverted, VscTwitter } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer className="footer bg-base-300 p-4 text-base-content mt-auto bottom-0 relative">
      <div className="flex w-full flex-row justify-evenly items-center">
        <Link href="/">
          <a className="hover:text-primary">
          Food<span className="text-primary">Wra</span>very © 2022
          </a>
        </Link>
        <div>
        <a className="btn btn-sm btn-ghost text-3xl" href="https://github.com/wralith">
          <VscGithubInverted />
        </a>
        <a className="btn btn-sm btn-ghost text-3xl" href="https://twitter.com/wralith">
          <VscTwitter />
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
