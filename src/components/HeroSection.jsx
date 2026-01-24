import { ArrowDown, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >

      {/* Hero Content */}
      <div className="container max-w-5xl mx-auto z-10 px-4">
        <div className="glass-panel rounded-3xl p-8 md:p-16 text-center transform hover:scale-[1.01] transition-transform duration-700">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Hi, I'm <span className="text-primary text-glow inline-block">Sanath</span>{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-white to-gray-400">Gampa</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Passionate about creating <span className="text-white font-medium">intelligent solutions</span> through machine learning and
              artificial intelligence. Specialized in developing innovative applications
              that solve real-world problems.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full"
            >
              <a
                href="#projects"
                className="cosmic-button w-full sm:w-auto flex items-center justify-center gap-2 group"
              >
                View My Work
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white font-medium transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <span>Contact Me</span>
                <Mail size={18} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-6 w-6 text-primary drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
      </motion.div>
    </section>
  );
};
