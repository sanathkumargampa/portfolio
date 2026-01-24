import LogoLoop from "./LogoLoop";

const skills = [
  { name: "Python", img: "https://i.postimg.cc/DzHwN1X5/download-1-removebg-preview.png" },
  { name: "C", img: "https://i.postimg.cc/L6g5zCg5/download-removebg-preview.png" },
  { name: "JAVA", img: "https://i.postimg.cc/JznLNt2q/download-2-removebg-preview.png" },
  { name: "Scikit", img: "https://i.postimg.cc/ZRP2thQn/download-3-removebg-preview.png" },
  { name: "NLTK", img: "https://i.postimg.cc/QdppqxKF/download-4-removebg-preview.png" },
  { name: "TensorFlow", img: "https://i.postimg.cc/v8g3Cn4j/download-5-removebg-preview.png" },
  { name: "Flutter", img: "https://i.postimg.cc/7P3TCPdh/download-11-removebg-preview.png" },
  { name: "React.js", img: "https://i.postimg.cc/ncdr7XkF/download-6-removebg-preview.png" },
  { name: "GIT", img: "https://i.postimg.cc/TYH21Zdh/download-7-removebg-preview.png" },
  { name: "MySQL", img: "https://i.postimg.cc/SN8qQjv1/download-8-removebg-preview.png" },
  { name: "Firebase", img: "https://i.postimg.cc/RhZ65KRY/download-9-removebg-preview.png" },
  { name: "Jupyter Notebook", img: "https://i.postimg.cc/k5RvL34S/download-10-removebg-preview.png" },
];

export const SkillsSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl px-4 mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          My <span className="text-primary text-glow">Skills</span>
        </h2>
      </div>

      {/* Full-width logo loop - edge to edge */}
      <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', height: '120px', position: 'relative' }}>
        <LogoLoop
          logos={skills}
          speed={30}
          direction="left"
          logoHeight={80}
          gap={60}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="rgba(0,0,0,0.8)"
          ariaLabel="Skills carousel"
        />
      </div>
    </section>
  );
};
