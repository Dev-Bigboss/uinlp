// components/ui/ThemeToggle.tsx
"use client";

import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "@/theme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-1 bg-gray-200 dark:bg-gray-700 p-1 rounded-full">
      <button
        onClick={() => setTheme("light")}
        className={`p-1.5 rounded-full ${
          theme === "light" ? "bg-white text-yellow-600" : ""
        }`}
      >
        <Sun className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-1.5 rounded-full ${
          theme === "dark" ? "bg-gray-800 text-blue-400" : ""
        }`}
      >
        <Moon className="w-4 h-4" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-1.5 rounded-full ${
          theme === "system" ? "bg-white dark:bg-gray-800 text-purple-600" : ""
        }`}
      >
        <Monitor className="w-4 h-4" />
      </button>
    </div>
  );
}
