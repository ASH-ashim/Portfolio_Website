import {
    Container,
    Code,
    Bitcoin,
} from "lucide-react";

export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
                Full Stack Developer | Web3 and Blockchain Developer
            </h3>
            <p className="text-muted-foreground">
                I’m a full-stack engineer, and blockchain/web3 developer with hands-on experience across modern technologies like React, Next.js, Node.js, Docker, Kubernetes and Solidity. I specialize in building end-to-end systems that are fast, efficient, and production-ready.


            </p>
            <p className="text-muted-foreground">
                I'm passionate about crafting elegant solutions to complex
                problems and constantly exploring new technologies to stay ahead
                in the fast-paced tech world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                Get In Touch
                </a>
                <a
                //downladable cv
                href="https://drive.google.com/file/d/1XYkI0LIcEPi1-3RjK4eVlVwrK5CJ7m5U/view?usp=drive_link" download="resume"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                View CV
                </a>
            </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
            {/* Full-Stack Development */}
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">
                    Full-Stack Development
                    </h4>
                    <p className="text-muted-foreground">
                    Building modern, responsive websites and applications using
                    cutting-edge frameworks.
                    </p>
                </div>
                </div>
            </div>

            {/* Blockchain */}
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                    <Bitcoin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">
                    Blockchain & Web3 Development
                    </h4>
                    <p className="text-muted-foreground">
                    Developing decentralized applications and smart contracts
                    using Solidity and Web3 tools.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    );
};
