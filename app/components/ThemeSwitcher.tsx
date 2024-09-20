"use client";
import { useTheme } from "next-themes";
import { KeyboardEvent, ChangeEvent, useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "./SVG";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className="loading loading-spinner w-6 h-6 mr-4 pt-1 bg-current"></span>;
  }

  const handleThemeToggle = (event: KeyboardEvent<HTMLInputElement> | ChangeEvent<HTMLInputElement>) => {
    if ((event as KeyboardEvent<HTMLInputElement>).key === "Enter" || event.type === "change") {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  return (
    <div>
      <label className="grid cursor-pointer place-items-center">
        <input
          type="checkbox"
          value={theme}
          onKeyDown={handleThemeToggle}
          checked={theme === "light"}
          onChange={handleThemeToggle}
          className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
        />
        <SunIcon className="stroke-base-100 fill-base-100 col-start-2 row-start-1" />
        <MoonIcon className="stroke-base-100 fill-base-100 col-start-1 row-start-1" />
      </label>
    </div>
  );
}
