"use client";
import { useEffect, useRef, useState } from "react";
import About from "../components/About";
import Projects from "../components/Projects";

const sections = [About, Projects]; // add Experience after About when possible

const responseDelayInMS = 100;

export default function HomePage() {
  const [visibility, setVisibility] = useState(Array(sections.length).fill(false));
  const ref = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = ref.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibility((prev) => {
                const newVisibility = [...prev];
                newVisibility[index] = true;
                return newVisibility;
              });
            }, responseDelayInMS);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRefs = ref.current;

    currentRefs.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      currentRefs.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="flex flex-col gap-24 mt-12 mb-24">
      {/* note: mt is smaller due to navbar hiding making the space above the first section too large */}
      {sections.map((SectionComponent, index) => {
        return (
          <div
            key={index}
            ref={(el) => {
              ref.current[index] = el;
            }}
            className={`transition-all duration-700 ${
              visibility[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
            }`}>
            <SectionComponent />
          </div>
        );
      })}
    </div>
  );
}
