import styles from "./projectSection.module.css";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Clarity Dashboard",
      description: "A minimalist, real-time system resource monitor — CPU, RAM, GPU, and network with smart diagnostics and privacy-focused local processing.",
      image: "/mockups/clarity-mockup.png",
      tools: ["React", "Vite", "Electron"],
      slug: "clarity",
    },
    {
      id: 2,
      title: "Loci",
      description: "A local art marketplace and community building app.",
      image: "/mockups/loci-mockup.png",
      tools: ["Figma", "Adobe XD"],
      slug: "loci",
    },
    {
      id: 3,
      title: "Curling You Say?",
      description: "An informational website about the sport of curling.",
      image: "/mockups/CYS-mock.png",
      tools: ["Next.js", "JavaScript", "CSS"],
      slug: "curling-you-say",
    },
    {
      id: 4,
      title: "Scooper-Co",
      description: "Mobile-responsive app for a pet waste removal service.",
      image: "/mockups/scooper-mockup.png",
      tools: ["Next.js", "React"],
      slug: "scooper-co",
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.cardOuter}>

            <div className={styles.imageBox}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt={project.title} className={styles.projectImage} />
            </div>

            <div className={styles.popup}>
              <div className={styles.popupTools}>
                {project.tools.map((tool, i) => (
                  <span key={i} className={styles.toolTag}>{tool}</span>
                ))}
              </div>
              <h2 className={styles.popupTitle}>{project.title}</h2>
              <p className={styles.popupDesc}>{project.description}</p>
              <a href={`/projects/${project.slug}`} className={styles.readMore}>
                Read More
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
