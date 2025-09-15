import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Ecommerce Landing Page",
    description:
      "A beautiful Ecommerce landing page app using clean HTML,CSS and Javascript",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    demoUrl: "https://ashim-frontend-project-ecom.netlify.app/",
    githubUrl:
      "https://github.com/ASH-ashim/Frontend-Project-HTML-CSS-JS/tree/master/Landing%20Page",
  },
  {
    id: 2,
    title: "Full stack Chatting Application",
    description: "Full stack online chatting application",
    image: "/projects/project4.png",
    tags: ["MERN Stack", "Socket.IO", "Tailwind CSS"],
    demoUrl: "https://ash-social.vercel.app",
    githubUrl: "https://github.com/ASH-ashim",
  },
  {
    id: 3,
    title: "Spylt Clone with animations",
    description: "This is the beautiful landing pag inspired by the spylt.com which is a beverage website",
    image: "Screenshot 2025-09-15 133833.png",
    tags: ["React", "Tailwind CSS", "GSAP"],
    demoUrl: "https://ash-gsap.vercel.app",
    githubUrl: "https://github.com/ASH-ashim",
  },
  {
    id: 4,
    title: "Full Stack Blog Application",
    description:
      "Full Stack dynamic Blog Application made by using MERN stack",
    image: "/Screenshot 2025-09-06 221130.png",
    tags: ["ShadCN", "MongoDB", "Node.js", "React.js"],
    demoUrl: "https://ash-blogs.onrender.com",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Crypto Currency Exchange dapp",
    description:
      "Crypto currency exchange app with smart contracts and react",
    image: "/projects/upcoming.png",
    tags: ["Solidity", "React"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Full Stack Lovable Clone built with Next.js",
    description: "Full stack Lovable clone with real time interaction",
    image: "/projects/upcoming.png",
    tags: ["Next.js", "MERN Stack"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "Supply Chain Dapp",
    description:
      "Application built on a blockchain network that is designed to manage and track the movement of goods and information within a supply chain",
    image: "/projects/upcoming.png",
    tags: ["Solidity", "Hardhat", "React.js", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "CrowdFunding Dapp",
    description:
      "Raise small amounts of money from a large group of people, made using smart contract in blockchain",
    image: "/projects/upcoming.png",
    tags: ["Solidity", "Hardhat", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 9,
    title: "Full Stack LMS system",
    description:
      "A software application used to administer, document, track, report, and deliver educational courses, training programs, or learning and development initiatives",
    image: "/projects/upcoming.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted
          with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ASH-ashim"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
