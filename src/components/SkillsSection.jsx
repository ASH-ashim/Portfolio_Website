import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
    { name: "HTML/CSS",  category: "frontend" },
    { name: "JavaScript", category: "frontend" },
    { name: "React",  category: "frontend" },
    { name: "TypeScript",  category: "frontend" },
    { name: "Tailwind CSS",  category: "frontend" },
    { name: "Next.js",  category: "frontend" },

  // Backend
    { name: "Node.js",  category: "Backend" },
    { name: "Express",  category: "Backend" },
    { name: "MongoDB",  category: "Backend" },
    { name: "PostgreSQL", , category: "Backend" },
    { name: "Redis", , category: "Backend" },
    { name: "Nest.js", category: "Backend" },


    //Devops and Cloud
    { name: "Linux",  category: "Cloud" },
    { name: "CI/CD", category: "Cloud" },
    { name: "Docker",  category: "Cloud" },
    { name: "Kubernetes",  category: "Cloud" },
    { name: "Prometheus", category: "Cloud" },
    { name: "Go Lang",  category: "Cloud" },

    //web3 and Blockchain
    { name: "Solidity",  category: "Web3 and Blockchain" },
    { name: "Ether.js", , category: "Web3 and Blockchain" },
    { name: "Hardhat",  category: "Web3 and Blockchain" },
    { name: "Foundary",  category: "Web3 and Blockchain" },
    { name: "Mocha + Chai", category: "Web3 and Blockchain" },
];

const categories = ["All", "Frontend", "Backend", "Cloud", "Web3 and Blockchain",];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
    );
    return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
            <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                    "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-forefround hover:bd-secondary"
                )}
            >
                {category}
            </button>
            ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, key) => (
            <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
                <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                </div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">

            </div>
            ))}
        </div>
        </div>
    </section>
    );
};
