"use client";

import { ThemeProvider } from "next-themes";
import { ParallaxProvider } from "react-scroll-parallax";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ParallaxProvider><ThemeProvider>{children}</ThemeProvider></ParallaxProvider>;
}
