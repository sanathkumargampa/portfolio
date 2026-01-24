"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Sharewear",
    description:
      "A shareware platform that connects donors with NGOs to simplify donating surplus food and clothing, with free basic features and paid upgrades for advanced tools.",
    image:
      "https://i.postimg.cc/3x3wSTC6/Whats-App-Image-2025-07-01-at-21-27-02-20d6f18c.jpg",
    tags: ["HTML", "CSS", "Node.js"],
    demoUrl: "https://sharewearr.netlify.app/",
    githubUrl: "https://github.com/sanathkumargampa/sharewear",
  },
  {
    id: 2,
    title: "FAKE PROFILE IDENTIFICATION",
    description:
      "Developed an ANN-based model to detect fake profiles using behavioral and identity patterns, automating fraud prevention on digital platforms.",
    image:
      "https://i.postimg.cc/8zn99dgv/Whats-App-Image-2025-07-02-at-17-04-10-a4793853.jpg",
    tags: ["React", "Scikit-Learn", "Keras"],
    githubUrl:
      "https://github.com/sanathkumargampa/FAKE-PROFILE-IDENTIFICATION",
  },
  {
    id: 3,
    title: "AUDIO SUMMARIZATION SYSTEM",
    description:
      "An AI tool that transcribes and summarizes audio into concise, downloadable text for easy meeting documentation.",
    image:
      "https://i.postimg.cc/5tbFCrt5/Whats-App-Image-2025-07-02-at-17-15-19-b092b26a.jpg",
    tags: ["React", "TailwindCSS", "Whisper"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/sanathkumargampa/AUDIO-SUMMARIZATION-SYSTEM",
  },
];

export const ProjectsSection = ({ autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => setActive((prev) => (prev + 1) % projects.length);
  const handlePrev = () =>
    setActive((prev) => (prev - 1 + projects.length) % projects.length);

  const isActive = (index) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <section className="py-16 md:py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          Featured <span className="text-primary text-glow">Projects</span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
          Recent work crafted with attention to detail and performance.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Visuals using Glass Card */}
          <div className="relative h-[400px] w-full glass-card rounded-2xl p-4 overflow-hidden group">
            <AnimatePresence mode='wait'>
              {projects.map((project, index) => (
                isActive(index) && (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-4 rounded-xl overflow-hidden shadow-2xl"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  </motion.div>
                )
              ))}
            </AnimatePresence>

            {/* Navigation Overlay */}
            <div className="absolute bottom-6 right-6 flex gap-3 z-20">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all active:scale-95"
              >
                <IconArrowLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all active:scale-95"
              >
                <IconArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative min-h-[300px] flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
            <AnimatePresence mode='wait'>
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 flex flex-col items-center lg:items-start w-full"
              >
                <div className="flex items-center justify-center lg:justify-start gap-4 text-primary text-sm font-mono tracking-wider">
                  <span>0{active + 1}</span>
                  <span className="h-px w-12 bg-primary/50" />
                  <span>0{projects.length}</span>
                </div>

                <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  {projects[active].title}
                </h3>

                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {projects[active].tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm font-medium border border-white/10 rounded-full bg-white/5 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-lg text-gray-400 leading-relaxed font-light">
                  {projects[active].description}
                </p>

                <div className="flex justify-center lg:justify-start gap-6 pt-4">
                  {projects[active].demoUrl && (
                    <a
                      href={projects[active].demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-primary transition-colors text-lg group/link"
                    >
                      Live Demo
                      <ExternalLink size={18} className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  )}
                  <a
                    href={projects[active].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-lg"
                  >
                    Source Code
                    <Github size={18} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Github Button */}
        <div className="text-center mt-20">
          <a
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-secondary/30 border border-white/10 hover:bg-secondary/50 transition-all duration-300 text-gray-300 hover:text-white group"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sanathkumargampa"
          >
            <Github size={20} />
            <span>Check My Github</span>
            <IconArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
