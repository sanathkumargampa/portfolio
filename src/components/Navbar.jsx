import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size for mobile/desktop
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Detect scroll position (only for desktop)
  useEffect(() => {
    const handleScroll = () => {
      if (!isMobile) {
        setIsScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // Detect active section (for highlighting links)
  useEffect(() => {
    const sectionElements = navItems.map((item) =>
      document.querySelector(item.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sectionElements.forEach((el) => el && observer.observe(el));
    return () => {
      sectionElements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  // Shrink condition — only on desktop
  const shouldShrink =
    !isMobile && (currentSection !== "hero" || isScrolled);

  return (
    <>
      <nav
        className={cn(
          "fixed left-1/2 top-4 md:top-6 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out",
          "rounded-full border border-white/10 shadow-lg backdrop-blur-md",
          "bg-black/20 hover:bg-black/40 hover:border-white/20",
          shouldShrink
            ? "w-[92%] md:w-[40%] py-2"
            : "w-[92%] md:w-[60%] py-3"
        )}
      >
        <div className="flex items-center justify-between px-6">
          {/* Logo */}
          <a href="#hero" className="flex items-center group">
            <img
              src="https://i.postimg.cc/7P0jZrr4/Black-White-Minimalist-Professional-Initial-Logo111-removebg-preview.png"
              alt="Logo"
              className={cn(
                "transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]",
                shouldShrink ? "h-8" : "h-10"
              )}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  currentSection === item.href.slice(1)
                    ? "text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col items-center justify-center md:hidden transition-all duration-500",
          "bg-black/90 backdrop-blur-xl",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-8 right-8 p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Close Menu"
        >
          <X size={32} />
        </button>

        <div className="flex flex-col space-y-8 text-2xl font-light tracking-wider">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "text-center transition-all duration-300",
                currentSection === item.href.slice(1)
                  ? "text-primary font-medium scale-110"
                  : "text-gray-400 hover:text-white"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
