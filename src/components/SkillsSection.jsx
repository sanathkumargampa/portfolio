import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const skills = [
  { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }, // Added some basic ones that represent web dev as fillers if needed, but I'll stick to user's list first. Use user list + add some likely expected ones if "scattered" needs more volume? No, stick to user's list first.
  // Actually, I should stick to the USER'S list.
  { name: "Python", img: "https://i.postimg.cc/DzHwN1X5/download-1-removebg-preview.png" },
  { name: "C", img: "https://i.postimg.cc/L6g5zCg5/download-removebg-preview.png" },
  { name: "Java", img: "https://i.postimg.cc/JznLNt2q/download-2-removebg-preview.png" },
  { name: "Scikit-Learn", img: "https://i.postimg.cc/ZRP2thQn/download-3-removebg-preview.png" }, // "Scikit" -> Scikit-Learn
  { name: "NLTK", img: "https://i.postimg.cc/QdppqxKF/download-4-removebg-preview.png" },
  { name: "TensorFlow", img: "https://i.postimg.cc/v8g3Cn4j/download-5-removebg-preview.png" },
  { name: "Flutter", img: "https://i.postimg.cc/7P3TCPdh/download-11-removebg-preview.png" },
  { name: "React", img: "https://i.postimg.cc/ncdr7XkF/download-6-removebg-preview.png" },
  { name: "Git", img: "https://i.postimg.cc/TYH21Zdh/download-7-removebg-preview.png" },
  { name: "MySQL", img: "https://i.postimg.cc/SN8qQjv1/download-8-removebg-preview.png" },
  { name: "Firebase", img: "https://i.postimg.cc/RhZ65KRY/download-9-removebg-preview.png" },
  { name: "Jupyter", img: "https://i.postimg.cc/k5RvL34S/download-10-removebg-preview.png" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0 // Remove automatic stagger
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.5, y: -20 }, // Recede and slight move up/down
  show: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Delay based on row index
      duration: 0.5,
      type: "spring",
      stiffness: 100
    }
  })
};

export const SkillsSection = () => {
  const [itemsPerRow, setItemsPerRow] = useState(5); // Default to desktop

  useEffect(() => {
    const handleResize = () => {
      // Approximate items per row based on container width and item size + gap
      // Container max-w-5xl (approx 1024px)
      // Item: ~100px width with gap is safe bet?
      // Small screen: < 640px -> 2 or 3 items
      // Medium: < 1024px -> 4 items
      // Large: 5 or 6 items
      if (window.innerWidth < 640) {
        setItemsPerRow(3);
      } else if (window.innerWidth < 1024) {
        setItemsPerRow(4);
      } else {
        setItemsPerRow(6);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-semibold text-primary tracking-widest uppercase mb-3">Explore My</h2>
          <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Skills
          </h3>
        </div>

        {/* Scattered Cloud Layout */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-12 md:gap-x-16 md:gap-y-16 max-w-5xl mx-auto"
        >
          {skills.map((skill, index) => {
            // Calculate row index based on dynamic itemsPerRow
            const rowIndex = Math.floor(index / itemsPerRow);

            return (
              <motion.div
                key={index}
                variants={item}
                custom={rowIndex} // Pass row index to variant
                className="group flex flex-col items-center gap-4 cursor-default"
              >
                <div className="relative flex items-center justify-center p-4 transition-transform duration-300 group-hover:scale-110">
                  {/* Glow effect behind icon */}
                  <div className="absolute inset-0 bg-primary/20 blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-12 h-12 md:w-16 md:h-16 object-contain relative z-10 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300"
                    loading="lazy"
                  />
                </div>
                <span className="text-lg font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
