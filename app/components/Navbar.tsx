"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import { DropdownIcon } from "./SVG";

const Links = ["About", "Experience", "Projects", "Contact"];

export default function Navbar() {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [scrolledToTop, setScrolledToTop] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0); // if this isn't here, the default scroll position will be lower than the landing page
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      if (scrollY === 0) {
        setScrolledToTop(true);
      } else {
        setScrolledToTop(false);
      }

      if (scrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (scrollY < lastScrollY) {
        setScrollDirection("up");
      }

      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  return (
    <div
      className={`navbar sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-sm transition-transform duration-300 ease-in-out
        ${scrollDirection === "down" && !scrolledToTop ? "-translate-y-full" : "translate-y-0"}
        bg-base-100 shadow-gray-300 dark:shadow-neutral`}>
      <div className="navbar-start">
        <div className="min-[550px]:hidden">
          <NavDropdown />
        </div>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1 hidden min-[550px]:flex">
          <NavLinks />
        </ul>
      </div>
      <div className="navbar-end">
        <div className="mr-4">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}

function NavDropdown() {
  return (
    <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn m-1">
        <DropdownIcon className="fill-current w-6 h-6" />
      </div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        <NavLinks />
      </ul>
    </div>
  );
}

function NavLinks() {
  return (
    <>
      {Links.map((link: string, index: number) => (
        <li key={index}>
          <Link href={`/home/#${link.toLowerCase()}`}>
            <span>{link}</span>
          </Link>
        </li>
      ))}
    </>
  );
}
