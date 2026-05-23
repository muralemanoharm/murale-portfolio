"use client";
import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    const initial = stored ?? "dark";
    setTheme(initial);
    document.documentElement.classList.toggle("light", initial === "light");

    const handler = (e: Event) => {
      setTheme((e as CustomEvent<"dark" | "light">).detail);
    };
    window.addEventListener("theme-change", handler);
    return () => window.removeEventListener("theme-change", handler);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      document.documentElement.classList.toggle("light", next === "light");
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent("theme-change", { detail: next }));
      }, 0);
      return next;
    });
  };

  return { theme, toggleTheme };
}
