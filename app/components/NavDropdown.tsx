import { DropdownIcon } from "./SVG";
import NavLinks from "./NavLinks";
import ResumeButton from "./ResumeButton";

export default function NavDropdown() {
  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn m-1">
        <DropdownIcon className="fill-current w-6 h-6" />
      </div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        <NavLinks />
        <div className="divider"></div>
        <ResumeButton inDropdown={true}/>
      </ul>
    </div>
  );
}
