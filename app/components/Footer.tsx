import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Footer() {
  return (
    <footer className="footer bg-base-300 text-base-content p-4 footer-center">
      <div className="flex flex-row align-text-top gap-x-10 items-start">
        <aside>
          <p>
            View the source code of this website{" "}
            <span className="text-blue-400">
              <Link href="https://github.com/tomasvana10/website" target="_blank">
                here
              </Link>
            </span>
          </p>
          <p>{new Date().getFullYear()} - Tomas Vana </p>
        </aside>
        <nav>
          <h6 className="footer-title">Theme</h6>
          <ThemeSwitcher />
        </nav>
        <nav>
          <h6 className="footer-title">Links</h6>
          <p>Test</p>
        </nav>
      </div>
    </footer>
  );
}
