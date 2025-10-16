import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoLogoHtml5, IoLogoDocker } from "react-icons/io5";
import { FaReact, FaNodeJs, FaJenkins, FaAws, FaMedapps, FaHardHat } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiTypescript, SiWagmi, SiKubernetes, SiTerraform, SiPrometheus, SiSolidity, SiEthers, SiHiveBlockchain } from "react-icons/si";
import { DiMongodb, DiRedis } from "react-icons/di";
import { FaLinux } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { AiOutlineJavaScript } from "react-icons/ai";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiGrafana } from "react-icons/si";
import { SiAnsible } from "react-icons/si";
import { SiWireshark } from "react-icons/si";
import { SiKalilinux } from "react-icons/si";





// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend", Logo: IoLogoHtml5 },
  { name: "React", category: "frontend", Logo: FaReact },
  { name: "TypeScript", category: "frontend", Logo: SiTypescript },
  { name: "Tailwind CSS", category: "frontend", Logo: RiTailwindCssFill },
  { name: "Next.js", category: "frontend", Logo: RiNextjsFill },
  {name: "Redux", category: "frontend", Logo: TbBrandRedux},
  { name: "JavaScript", category: "frontend", Logo: AiOutlineJavaScript },

  // Backend
  { name: "Node.js", category: "backend", Logo: FaNodeJs },
  {name: "Python", category: "backend", Logo: SiPython},
  {name: "Django", category: "backend", Logo: DiDjango},
  {name: "Express", category: "backend", Logo: SiExpress},
  { name: "MongoDB", category: "backend", Logo: DiMongodb },
  { name: "PostgreSQL", category: "backend", Logo: BiLogoPostgresql },
  { name: "Redis", category: "backend", Logo: DiRedis },
  {name: "graphQL", category: "backend", Logo: GrGraphQl},

  // DevOps
  {name: "Linux", category: "devOps", Logo: FaLinux},
  { name: "Jenkins", category: "devOps", Logo: FaJenkins },
  {name: "Grafana", category: "devOps", Logo: SiGrafana},
  { name: "AWS", category: "devOps", Logo: FaAws },
  { name: "Docker", category: "devOps", Logo: IoLogoDocker },
  { name: "Kubernetes", category: "devOps", Logo: SiKubernetes },
  { name: "Terraform", category: "devOps", Logo: SiTerraform },
  {name: "Ansible", category: "devOps", Logo: SiAnsible},
  { name: "Prometheus", category: "devOps", Logo: SiPrometheus },

  //cybersecurity
  {name: "Kali Linux", category:"Cybersecurity", Logo: SiKalilinux },
  {name: "Wireshark", category: "Cybersecurity", Logo: SiWireshark}
];

const categories = ["frontend", "backend", "devOps", "Cybersecurity"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const skillsRef = useRef(null);
  const iconRefs = useRef([]);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  useEffect(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    iconRefs.current.forEach(ref => {
      if (ref) gsap.killTweensOf(ref);
    });

    iconRefs.current.forEach((icon, index) => {
      if (!icon) return;

      gsap.fromTo(icon,
        { y: 50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          onComplete: () => {
            gsap.to(icon, {
              y: () => gsap.utils.random(-15, 15),
              rotation: () => gsap.utils.random(-3, 3),
              duration: () => gsap.utils.random(3, 5),
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
              delay: () => gsap.utils.random(0, 2)
            });
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [activeCategory]);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30" ref={skillsRef}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = skill.Logo;
            return (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-xs hover:shadow-md transition-all duration-300 flex flex-col items-center group"
              >
                <div 
                  ref={el => iconRefs.current[index] = el}
                  className="text-4xl mb-3 text-primary transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2"
                >
                  <IconComponent />
                </div>
                <h3 className="font-semibold text-lg text-center group-hover:text-primary transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};