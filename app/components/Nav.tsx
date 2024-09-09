import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import NavDropdown from "./NavDropdown";
import NavLinks from "./NavLinks";
import ResumeButton from "./ResumeButton";

export default function Nav() {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-10 shadow-sm backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="navbar-start w-[100%] flex-0">
        <a className="btn btn-ghost text-xl">Tomas Vana</a>

        <ul className="menu menu-horizontal px-1 hidden sm:flex">
          <NavLinks />
        </ul>

        <div className="sm:hidden">
          <NavDropdown />
        </div>
        <div className="navbar-center"></div>
      </div>
      <div className="navbar-end mr-6">
        <ResumeButton />
        <div className="divider divider-horizontal"></div>
        <div className="flex items-center">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
