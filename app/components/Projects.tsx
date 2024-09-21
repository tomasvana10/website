import SectionHeader from "./SectionHeader";
import { CardWrapper } from "./Wrappers";

const projects = [
  {
    name: "website",
    description: "My personal website, which you are viewing right now",
    technologyBadges: ["next.js", "TypeScript", "TailwindCSS", "Vercel"],
    srcCodeLink: "https://github.com/tomasvana10/website",
    checkItOutLink: "https://tomasvana.vercel.app",
  },
  {
    name: "ausvote",
    description: "A voting website for the geopolitical Minecraft server EarthMC",
    technologyBadges: ["next.js", "TypeScript", "TailwindCSS", "Vercel", "MySQL", "Auth.js"],
    srcCodeLink: null,
    checkItOutLink: "https://elections.australiaemc.net",
  },
  {
    name: "mmhack",
    description: "A JSMacros script to provide an easier playing experience in a Hypixel minigame",
    technologyBadges: ["JavaScript", "JSMacros"],
    srcCodeLink: "https://github.com/tomasvana10/mmhack",
    checkItOutLink: null,
  },
  {
    name: "wordlemini",
    description: "Wordle in the command-line",
    technologyBadges: ["Python", "Textual", "PyPI"],
    srcCodeLink: "https://github.com/tomasvana10/wordlemini",
    checkItOutLink: null,
  },
  {
    name: "xpuz",
    description: "Play procedurally generated crosswords",
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
  },
  {
    name: "sorting-vis",
    description: "Visualise how different sorting algorithms manage an array",
    technologyBadges: ["Python", "CustomTkinter", "PyPI"],
    srcCodeLink: "https://github.com/tomasvana10/sorting-vis",
    checkItOutLink: null,
  },
  {
    name: "commits2pdf",
    description: "Convert Git commits to a PDF",
    technologyBadges: ["Python", "Python Argparse", "GitPython", "fpdf", "pycairo", "PyPI"],
    srcCodeLink: "https://github.com/tomasvana10/commits2pdf",
    checkItOutLink: null,
  },
  {
    name: "seriescalculator-sdd",
    description: "Calculator that provides solutions for arithmetic and geometric series",
    technologyBadges: ["Python", "CustomTkinter"],
    srcCodeLink: "https://github.com/tomasvana10/seriescalculator-sdd",
    checkItOutLink: null,
  },
];

const featuredProject = "xpuz";

projects
featuredProject

export default function Projects() {
  return (
    <>
      <SectionHeader name="Projects" number={2} />
      <CardWrapper>placeholder</CardWrapper>
    </>
  );
}
