
import Link from "next/link";

const Links = ["about", "experience", "projects", "contact"];

export default function NavLinks() {
  return Links.map((link: string, index: number) => (
    <li key={index}>
      <Link href={`#${link}`}>
        <span className="text-accent">{`0${index + 1}.`}</span> {link.charAt(0).toUpperCase() + link.slice(1)}
      </Link>
    </li>
  ));
}
