import Link from "next/link";

export interface ResumeButtonProps {
  inDropdown?: boolean;
}

export default function ResumeButton(props: ResumeButtonProps) {
  return (
    <Link href="#" className={`btn btn-outline ${!props.inDropdown ? "hidden sm:flex" : ""}`}>
      Resume
    </Link>
  );
}
