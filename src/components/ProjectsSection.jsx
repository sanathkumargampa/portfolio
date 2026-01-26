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
    title: "Fake Profile Identification",
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
    title: "Audio Summarization System",
    description:
      "An AI tool that transcribes and summarizes audio into concise, downloadable text for easy meeting documentation.",
    image:
      "https://i.postimg.cc/5tbFCrt5/Whats-App-Image-2025-07-02-at-17-15-19-b092b26a.jpg",
    tags: ["React", "TailwindCSS", "Whisper"],
    demoUrl: "https://audio-summarization-system.vercel.app/",
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Project Visuals using Glass Card */}
          {/* Project Visuals using Glass Card */}
          <div className="relative group/nav">
            {/* Desktop Navigation - Left */}
            <button
              onClick={handlePrev}
              className="hidden md:flex absolute -left-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/50 border border-white/10 items-center justify-center text-white/50 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 opacity-0 group-hover/nav:opacity-100 focus-visible:opacity-100"
              aria-label="Previous Project"
            >
              <IconArrowLeft size={20} />
            </button>

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
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={1}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipe = Math.abs(offset.x) * velocity.x;
                        const swipeConfidenceThreshold = 10000;
                        if (swipe < -swipeConfidenceThreshold) {
                          handleNext();
                        } else if (swipe > swipeConfidenceThreshold) {
                          handlePrev();
                        }
                      }}
                      className="absolute inset-4 rounded-xl overflow-hidden shadow-2xl touch-pan-y cursor-grab active:cursor-grabbing"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>

            {/* Desktop Navigation - Right */}
            <button
              onClick={handleNext}
              className="hidden md:flex absolute -right-12 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/50 border border-white/10 items-center justify-center text-white/50 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 opacity-0 group-hover/nav:opacity-100 focus-visible:opacity-100"
              aria-label="Next Project"
            >
              <IconArrowRight size={20} />
            </button>

            {/* Mobile Navigation Controls */}
            <div className="flex md:hidden items-center justify-center gap-6 mt-6">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white active:scale-95 transition-all"
                aria-label="Previous"
              >
                <IconArrowLeft size={18} />
              </button>

              <div className="flex gap-2">
                {projects.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive(i) ? 'w-6 bg-primary' : 'bg-white/20'}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white active:scale-95 transition-all"
                aria-label="Next"
              >
                <IconArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative h-[500px] flex items-center justify-center lg:items-center">
            <AnimatePresence>
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20, y: "-50%" }}
                animate={{ opacity: 1, x: 0, y: "-50%" }}
                exit={{ opacity: 0, x: -20, y: "-50%" }}
                transition={{ duration: 0.3 }}
                className="absolute top-1/2 left-0 w-full space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left"
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

                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4 w-full sm:w-auto">
                  {projects[active].demoUrl && (
                    <a
                      href={projects[active].demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cosmic-button flex items-center justify-center gap-2 group/link w-full sm:w-auto"
                    >
                      Live Demo
                      <ExternalLink size={18} className="group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  )}
                  <a
                    href={projects[active].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium hover:scale-105 active:scale-95 transition-all duration-300 w-full sm:w-auto"
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
