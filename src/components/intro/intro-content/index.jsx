"use client";

import { Code, Github, Linkedin, Mail, Palette, Zap } from "lucide-react";

import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
    const words = [
        "Amit Jaiswar",
        "A Web Developer",
        "Tech Enthusiast",
        "A Learner",
    ];

    return (
        <div className="  relative z-0 overflow-hidden text-white ">
            {/* Main Content */}
            <main className="relative z-10 container min-h-screen mx-auto px-6 pt-20 pb-32 mb-10 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-10">
                    Hello <span className="inline-block ">,</span> I Am
                    <span className="block text-yellow-300 mt-2">
                        <Typewriter
                            words={words}
                            loop
                            cursor
                            cursorColor="|"
                        />
                    </span>
                </h1>

                {/* Feature Cards */}
                <div className="md:grid hidden md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left hover:bg-white/15 transition-colors">
                        <Code className="w-8 h-8 mb-4 text-yellow-300" />
                        <h2 className="text-xl font-semibold mb-2">
                            Clean Code
                        </h2>
                        <p className="text-white/90">
                            Writing maintainable, efficient code
                        </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left hover:bg-white/15 transition-colors">
                        <Palette className="w-8 h-8 mb-4 text-yellow-300" />
                        <h2 className="text-xl font-semibold mb-2">
                            Modern Design
                        </h2>
                        <p className="text-white/90">
                            Creating beautiful interfaces
                        </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left hover:bg-white/15 transition-colors">
                        <Zap className="w-8 h-8 mb-4 text-yellow-300" />
                        <h2 className="text-xl font-semibold mb-2">
                            Fast Performance
                        </h2>
                        <p className="text-white/90">Optimizing for speed</p>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col justify-center gap-4">
                    <a
                        href="https://github.com/amitjaiswar1502/"
                        rel="noreferrer"
                        target="_blank"
                        className="bg-[#1F2937] hover:bg-[#374151] text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
                    >
                        <Github className="w-5 h-5" />
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/amit-jaiswar-a45678102/"
                        rel="noreferrer"
                        target="_blank"
                        className="bg-white hover:bg-gray-100 text-[#3730A3] px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
                    >
                        <Linkedin className="w-5 h-5" />
                        LinkedIn
                    </a>
                    <a
                        href="mailto:amitjaiswar1502@gmail.com"
                        className="bg-white hover:bg-gray-100 text-[#3730A3] px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
                    >
                        <Mail className="w-5 h-5" />
                        Contact
                    </a>
                </div>
            </main>
        </div>
    );
}
