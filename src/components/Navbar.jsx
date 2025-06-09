import {cn} from "../lib/utils";
import {useState, useEffect} from "react";
import { Menu, X } from "lucide-react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu starts closed

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300", 
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">ASH'S</span> Portfolio
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <a 
                            key={key}
                            href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-200"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile menu button - Always visible on mobile */}
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-foreground/80 hover:text-primary transition-colors z-50"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Nav Overlay */}
                <div className={cn(
                    "fixed inset-0 bg-background/90 backdrop-blur-md z-40 flex flex-col pt-24 px-6",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                )}>
                    <div className="flex flex-col space-y-8 mt-8">
                        {navItems.map((item, key) => (
                            <a 
                                key={key}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-200 text-xl py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}