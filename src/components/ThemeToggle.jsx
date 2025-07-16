import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    
    useEffect(() => {
        // Check for saved theme preference or use system preference
        const storedTheme = localStorage.getItem("theme");
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        // Default to dark mode if no preference is stored
        if (storedTheme === "light") {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
            if (!storedTheme && systemPrefersDark) {
                localStorage.setItem("theme", "dark");
            }
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return ( 
        <button 
            onClick={toggleTheme} 
            className={cn(
                "fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-700",
                "max-sm:bottom-5 max-sm:top-auto max-sm:right-auto max-sm:left-5"
            )}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        > 
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900 dark:text-blue-300" />
            )}
        </button>
    );
};