import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>View the source code of this website <span className="text-accent"><Link href="https://github.com/tomasvana10/website" target="_blank">here</Link></span></p>
        <p>{new Date().getFullYear()} - Tomas Vana </p>
      </aside>
    </footer>
  );
}
