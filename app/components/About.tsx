import MountainImage from "@/assets/mountain.webp";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex items-center justify-center">
      <div className="card bg-base-100 image-full w-[800px] shadow-xl z-[-1]">
        <figure className="relative w-full h-64">
          <Image src={MountainImage} alt="mountain" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-6xl">Tomas Vana</h2>
          <p>Python and web developer</p>
        </div>
      </div>
    </div>
  );
}
