import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { CardWrapper } from "./Wrappers";
import { ExternalLinkIcon, GithubIcon } from "./SVG";
import Link from "next/link";
import "../SlantedText.css";

const projects = [
  {
    name: "website",
    description: "My personal website, which you are viewing right now.",
    technologyBadges: ["next.js", "TypeScript", "TailwindCSS", "Vercel"],
    srcCodeLink: "https://github.com/tomasvana10/website",
    checkItOutLink: "https://tomasvana.vercel.app",
    hasPreviewImage: false,
  },
  {
    name: "ausvote",
    description: "A voting website for the geopolitical Minecraft server EarthMC.",
    technologyBadges: ["next.js", "TypeScript", "TailwindCSS", "Vercel", "MySQL", "Auth.js"],
    srcCodeLink: null,
    checkItOutLink: "https://elections.australiaemc.net",
    hasPreviewImage: false,
  },
  {
    name: "mmhack",
    description: "A JSMacros script to provide an easier playing experience in a Hypixel minigame.",
    technologyBadges: ["JavaScript", "JSMacros"],
    srcCodeLink: "https://github.com/tomasvana10/mmhack",
    checkItOutLink: null,
    hasPreviewImage: false,
  },
  {
    name: "wordlemini",
    description: "A simple version of Wordle made for the command line.",
    technologyBadges: ["Python", "Textual", "PyPI"],
    srcCodeLink: "https://github.com/tomasvana10/wordlemini",
    checkItOutLink: null,
    hasPreviewImage: true,
  },
  {
    name: "xpuz",
    description: "Play procedurally generated crosswords.",
    technologyBadges: [
      "Python",
      "HTML",
      "CSS",
      "JavaScript",
      "CustomTkinter",
      "Flask",
      "Babel.js",
      "gettext",
      "Terser",
      "PyPI",
    ],
    srcCodeLink: "https://github.com/tomasvana10/xpuz",
    checkItOutLink: "https://tomasvana10.github.io",
    hasPreviewImage: true,
  },
  {
    name: "sorting-vis",
    description: "Visualise how different sorting algorithms manage an array.",
    technologyBadges: ["Python", "CustomTkinter", "PyPI"],
    srcCodeLink: "https://github.com/tomasvana10/sorting-vis",
    checkItOutLink: null,
    hasPreviewImage: false,
  },
  {
    name: "commits2pdf",
    description: "Convert Git commits to a PDF.",
    technologyBadges: ["Python", "Python Argparse", "GitPython", "fpdf", "pycairo", "PyPI"],
    srcCodeLink: "https://github.com/tomasvana10/commits2pdf",
    checkItOutLink: null,
    hasPreviewImage: false,
  },
  {
    name: "seriescalculator-sdd",
    description: "Calculator that provides solutions for arithmetic and geometric series.",
    technologyBadges: ["Python", "CustomTkinter"],
    srcCodeLink: "https://github.com/tomasvana10/seriescalculator-sdd",
    checkItOutLink: null,
    hasPreviewImage: false,
  },
];

const featuredProjects = ["xpuz", "wordlemini"];

export default function Projects() {
  return (
    <>
      <SectionHeader name="Projects" number={2} />
      <CardWrapper>
        {featuredProjects
          .map((featuredName) => projects.find((project) => project.name === featuredName))
          .map((projectData, index) => (
            <FeaturedProject projectData={projectData!} key={index} />
          ))}
        <div className="grid grid-cols-2">
          {projects
            .filter((project) => !featuredProjects.includes(project.name))
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .map((projectData, index) => (
              <RegularProject key={index} projectData={projectData} />
            ))}
        </div>
      </CardWrapper>
    </>
  );
}

function RegularProject({ projectData }: { projectData: (typeof projects)[number] }) {
  return <h1>{projectData.name}</h1>;
}

function FeaturedProject({ projectData }: { projectData: (typeof projects)[number] }) {
  return (
    <div className="card-bordered relative flex justify-center gap-4 p-6">
      <div className="absolute top-3 left-3 min-[900px]:right-3 min-[900px]:left-auto z-[999]">
        <div className="flex gap-2 ">
          {projectData.srcCodeLink && (
            <Link target="_blank" href={projectData.srcCodeLink}>
              <GithubIcon className="h-6 w-6 fill-current scale-[1.15] transition-transform duration-175 hover:scale-125" />
            </Link>
          )}
          {projectData.checkItOutLink && (
            <Link target="_blank" href={projectData.checkItOutLink}>
              <ExternalLinkIcon className="h-6 w-6 fill-current transition-transform duration-175 hover:scale-110" />
            </Link>
          )}
        </div>
      </div>
      {projectData.hasPreviewImage && (
        <div className="flex align-middle">
          <Image
            className="absolute inset-0 w-full h-full object-cover filter min-[900px]:relative min-[900px]:flex min-[900px]:blur-0 min-[900px]:filter-none"
            src={`/images/${projectData.name}-preview.png`}
            alt={`preview image showcasing ${projectData.name}`}
            width="1000"
            height="1000"
          />
          <div className="absolute inset-0 bg-base-100 dark:bg-black opacity-80 dark:opacity-75 min-[900px]:opacity-0 min-[900px]:dark:opacity-10" />
        </div>
      )}
      <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center min-[900px]:w-auto w-[90%]">
        <div className="min-[900px]:text-right">
          <h2 className="text-xl">Featured Project</h2>
          <h1 className="slanted text-3xl mb-5">
            <span>{projectData.name}</span>
          </h1>
          <div className="card card-bordered mt-4">
            <div className="card-body p-4">{projectData.description}</div>
          </div>
          <div className="flex flex-wrap justify-center min-[900px]:justify-end mt-4 gap-1">
            {projectData.technologyBadges.sort().map((technology, index) => (
              <div key={index} className="badge badge-ghost">
                {technology}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
