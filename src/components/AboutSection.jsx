import { Briefcase, GraduationCap, Book } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center">
          About <span className="text-primary text-glow">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Photo + Bio Card */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-8 flex flex-col items-center text-center transform hover:scale-[1.02] transition-transform duration-500">
            <div className="w-64 h-64 relative mb-8 group">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
              <img
                src="https://i.postimg.cc/mDmcysnW/IMG-3801.jpg"
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl"
              />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Sanath Kumar Gampa</h3>
            <p className="text-primary font-medium mb-6">AI/ML Developer & Enthusiast</p>

            <p className="text-gray-400 leading-relaxed mb-8">
              An organized and dependable student with a knack for managing multiple tasks effectively.
              Skilled at setting priorities, staying on top of deadlines, and keeping things running smoothly,
              even in busy environments. Known for a proactive mindset, problem-solving abilities,
              and a commitment to delivering high-quality results.
            </p>

            <div className="flex flex-wrap justify-center gap-4 w-full">
              <a href="#contact" className="cosmic-button w-full sm:w-auto text-center">
                Get In Touch
              </a>
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1sJqLvItqyxO5SMblx7E1j5f2YeynqAAv/view?usp=drive_link"
                className="px-8 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto text-center"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Educational Journey */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full" />
              Educational Journey
            </h3>

            {/* Card 1 */}
            <div className="glass-card p-6 rounded-2xl flex items-start gap-6 group hover:border-primary/30 transition-colors">
              <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                <Briefcase size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">Bachelor of Technology in AIML</h4>
                <p className="text-primary/80 font-medium mb-2">CMR Institute of Technology</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>2022 – 2026</span>
                  <span className="w-1 h-1 bg-gray-600 rounded-full" />
                  <span>CGPA: 8.04</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-card p-6 rounded-2xl flex items-start gap-6 group hover:border-primary/30 transition-colors">
              <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">Intermediate</h4>
                <p className="text-primary/80 font-medium mb-2">Sri Chaitanya Jr Kalashala</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>2020 – 2022</span>
                  <span className="w-1 h-1 bg-gray-600 rounded-full" />
                  <span>91%</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="glass-card p-6 rounded-2xl flex items-start gap-6 group hover:border-primary/30 transition-colors">
              <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                <Book size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">Secondary School Certificate</h4>
                <p className="text-primary/80 font-medium mb-2">Sri Chaitanya Techno School</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>2019 – 2020</span>
                  <span className="w-1 h-1 bg-gray-600 rounded-full" />
                  <span>GPA: 10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
