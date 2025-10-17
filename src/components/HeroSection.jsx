import { ArrowDown } from "lucide-react";
import myself from '../assets/myself.jpeg';

export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative flex flex-col items-center justify-center min-h-screen px-6 text-white bg-transparent overflow-hidden"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 -z-10">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#3aec1f]/20 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#00f0ff]/15 rounded-full blur-3xl animate-pulse-slow delay-1000" />
                <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse-slow delay-500" />
                
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                {/* Profile Image Container with Actual Photo */}
                <div className="relative mb-8 opacity-0 animate-fade-in">
                    <div className="relative inline-block">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full  p-1 animate-spin-slow">
                            <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 backdrop-blur-sm">
                                <img 
                                    src={myself} 
                                    alt="Ashim Bhattarai"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                        </div>
                        <div className="absolute inset-0 rounded-full opacity-30 " />
                    </div>
                </div>

                {/* Name Section */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight">
                    <span className="block opacity-0 animate-fade-in text-gray-300/80 text-lg md:text-xl font-light tracking-widest uppercase">
                        Hello, I'm
                    </span>
                    <div className="relative inline-block mt-4">
                        <span className="block font-light text-6xl opacity-0 animate-fade-in-delay-1 bg-gradient-to-r from-[#3aec1f] to-[#2bc418] bg-clip-text text-transparent">
                            Ashim
                        </span>
                        <div className="absolute -inset-1 bg-[#3aec1f]/20 blur-lg rounded-lg -z-10 opacity-0 animate-fade-in-delay-1" />
                    </div>
                    <div className="relative inline-block">
                        <span className="block text-[#00f0ff] font-light text-6xl opacity-0 animate-fade-in-delay-2 bg-gradient-to-r from-[#00f0ff] to-[#00c4ff] bg-clip-text text-transparent ml-2">
                            Bhattarai
                        </span>
                        <div className="absolute -inset-1 bg-[#00f0ff]/20 blur-lg rounded-lg -z-10 opacity-0 animate-fade-in-delay-2" />
                    </div>
                </h1>

                {/* Title Section */}
                <div className="relative">
                    <p className="text-xl md:text-2xl text-gray-300/90 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
                        <span className="bg-gradient-to-r from-[#3aec1f] to-[#00f0ff] bg-clip-text text-transparent font-semibold">
                            Full Stack Developer
                        </span>{" "}
                        |{" "}
                        <span className="bg-gradient-to-r from-[#00f0ff] to-[#3aec1f] bg-clip-text text-transparent font-semibold">
                            DevOps Engineer
                        </span>
                    </p>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-[#3aec1f] to-transparent opacity-0 animate-fade-in-delay-3" />
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 opacity-0 animate-fade-in-delay-4">
                    <a
                        href="#projects"
                        className="group relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-[#3aec1f] to-[#00f0ff] rounded-full shadow-2xl hover:shadow-[0_0_30px_rgba(58,236,31,0.3)] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3aec1f] to-[#00f0ff] blur-md group-hover:blur-lg transition-all duration-300 opacity-70" />
                        <span className="relative">View My Work</span>
                    </a>
                    
                    <a
                        href="#contact"
                        className="group px-8 py-4 text-lg font-semibold text-gray-300 border border-gray-600 rounded-full hover:border-[#3aec1f] hover:text-[#3aec1f] transition-all duration-300 hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-2 h-2 bg-[#3aec1f] rounded-full animate-float opacity-60" />
            <div className="absolute top-40 right-20 w-1 h-1 bg-[#00f0ff] rounded-full animate-float-delayed opacity-40" />
            <div className="absolute bottom-40 left-20 w-3 h-3 bg-[#3aec1f] rounded-full animate-float-slow opacity-30" />
        </section>
    );
};
