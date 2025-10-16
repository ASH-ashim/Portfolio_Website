import {
    Container,
    Code,
    Shield,
    MonitorSmartphone,
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
                Full Stack Developer | DevOps Engineer | Cybersecurity Enthusiast
            </h3>
            <p className="text-muted-foreground">
                I'm a full-stack engineer and DevOps specialist with a growing passion for cybersecurity. I have hands-on experience across modern technologies like React, Next.js, Node.js, Docker, Kubernetes, and AWS. I've built scalable web apps, mobile and desktop solutions, and deployed secure cloud-native architectures with a focus on security best practices.
            </p>
            <p className="text-muted-foreground">
                I'm passionate about crafting elegant solutions to complex
                problems and constantly exploring new technologies to stay ahead
                in the fast-paced tech world, with a particular interest in security-focused development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                Get In Touch
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

            {/* DevOps */}
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                    <Container className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">
                        DevOps Infrastructure
                    </h4>
                    <p className="text-muted-foreground">
                    Automating infrastructure and deploying secure, scalable
                    systems with modern DevOps practices.
                    </p>
                </div>
                </div>
            </div>

            {/* Cybersecurity */}
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">
                    Cybersecurity Focus
                    </h4>
                    <p className="text-muted-foreground">
                    Implementing security best practices and developing with a security-first mindset across applications and infrastructure.
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