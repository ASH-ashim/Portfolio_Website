import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // Handle theme initialization
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "light") {
      setLightMode();
    } else {
      setDarkMode();
      
      // Set dark mode in localStorage if no preference exists and system prefers dark
      if (!storedTheme && systemPrefersDark) {
        localStorage.setItem("theme", "dark");
      }
    }
  }, []);

  const setDarkMode = () => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setIsDarkMode(true);
  };

  const setLightMode = () => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    setIsDarkMode(false);
  };

  const toggleTheme = () => {
    isDarkMode ? setLightMode() : setDarkMode();
  };

  const buttonClasses = cn(
    "fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
    "focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700",
    "max-sm:bottom-5 max-sm:top-auto max-sm:right-auto max-sm:left-5"
  );

  const iconClasses = "h-6 w-6";
  const sunIconColor = "text-yellow-300";
  const moonIconColor = "text-blue-900 dark:text-blue-300";

  return ( 
    <button 
      onClick={toggleTheme}
      className={buttonClasses}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    > 
      {isDarkMode ? (
        <Sun className={`${iconClasses} ${sunIconColor}`} />
      ) : (
        <Moon className={`${iconClasses} ${moonIconColor}`} />
      )}
    </button>
  );
};