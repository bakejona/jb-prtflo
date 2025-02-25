import styles from "./projectSection.module.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Curling You Say?",
      image: "/logos/CYS-mock.png", // Replace with actual image path
      github: "https://github.com/bakejona/CurlingYouSay2",
      live: "https://curling-you-say2.vercel.app/",
    },
    {
      id: 2,
      title: "Loci",
      image: "/logos/loci-mockup.png", // Replace with actual image path
      github: "https://github.com/your-repo2",
      live: "https://your-live-site2.com",
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectImageContainer}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
              <div className={styles.buttonsContainer}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.iconButton} ${styles.githubButton}`}
                >
                  <FaGithub />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.iconButton} ${styles.liveButton}`}
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <h2 className={styles.projectTitle}>{project.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
