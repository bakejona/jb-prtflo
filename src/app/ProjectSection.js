import styles from "./projectSection.module.css";
import { FaGithub } from "react-icons/fa";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";


const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Curling You Say?",
      description: "An informational website that provides information about the sport of curling.",
      image: "/logos/CYS-mock.png",
      github: "https://github.com/bakejona/CurlingYouSay2",
      live: "https://curling-you-say2.vercel.app/",
    },
    {
      id: 2,
      title: "Loci",
      description: "A mockup for a local art marketplace and community building app.",
      image: "/logos/loci-mockup.png",
      github: "https://github.com/your-repo2",
      live: "https://your-live-site2.com",
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.projectsGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            {/* Links positioned at the top-right of the card */}
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
                <BiSolidRightTopArrowCircle />



              </a>
            </div>

            <div className={styles.projectImageContainer}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
            </div>

            {/* Bottom pop-up for title & description */}
            <div className={styles.projectInfo}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
