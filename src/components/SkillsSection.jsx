import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Next.js", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Redis", category: "backend" },
  { name: "Nest.js", category: "backend" },

  // Devops and Cloud
  { name: "Linux", category: "cloud" },
  { name: "CI/CD", category: "cloud" },
  { name: "Docker", category: "cloud" },
  { name: "Kubernetes", category: "cloud" },
  { name: "Prometheus", category: "cloud" },
  { name: "Go Lang", category: "cloud" },

  // web3 and Blockchain
  { name: "Solidity", category: "web3 and blockchain" },
  { name: "Ether.js", category: "web3 and blockchain" },
  { name: "Hardhat", category: "web3 and blockchain" },
  { name: "Foundary", category: "web3 and blockchain" },
  { name: "Mocha + Chai", category: "web3 and blockchain" },
];

const categories = ["All", "frontend", "backend", "cloud", "web3 and blockchain"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category.toLowerCase() === activeCategory.toLowerCase()
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory.toLowerCase() === category.toLowerCase()
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
