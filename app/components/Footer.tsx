import Link from "next/link";
import { GithubIcon } from "./SVG";

export default function Footer() {
  return (
    <footer className="footer bg-zin-300 dark:bg-zinc-900 p-4 footer-center">
      <div className="flex flex-row align-text-top gap-x-10">
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
        <div className="grid grid-flow-col gap-4">
          <Link target="_blank" href="https://github.com/tomasvana10">
            <GithubIcon className="h-10 w-10 fill-current" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
