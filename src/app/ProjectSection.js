'use client';

import { useState, useRef } from 'react';
import styles from "./projectSection.module.css";
import { FaGithub, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = () => {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top)  / rect.height) * 100,
    });
  };

  const projects = [
    {
      id: 1,
      title: "Clarity Dashboard",
      description: "A minimalist, real-time system resource monitor — CPU, RAM, GPU, and network with smart diagnostics and privacy-focused local processing.",
      image: "/mockups/clarity-mockup.png",
      tools: ["React", "Vite", "Electron"],
      slug: "clarity",
      github: "https://github.com/bakejona/clarity-v1",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "PlantPal",
      description: "A smart plant care companion with a matchmaker quiz, automated watering schedules, and real-time weather integration.",
      image: "/plantpal/plantpal-mockup-main.jpg",
      tools: ["JavaScript", "Vite", "SCSS", "Firebase"],
      slug: "plant-pal",
      github: "https://github.com/bakejona/plant-app",
      liveUrl: "https://fir-setup-f2b47.web.app",
    },
    {
      id: 3,
      title: "Loci",
      description: "A local art marketplace and community building app mockup.",
      image: "/mockups/loci-mockup.png",
      tools: ["Figma", "Adobe XD"],
      slug: "loci",
      github: null,
      liveUrl: null,
      noReadMore: true,
    },
    {
      id: 4,
      title: "Scooper-Co",
      description: "Mobile-responsive app for a pet waste removal service.",
      image: "/mockups/scooper-mockup.png",
      tools: ["Next.js", "React"],
      slug: "scooper-co",
      github: "https://github.com/bakejona/scooper-co",
      liveUrl: "https://scooper-co.com/",
      noReadMore: true,
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={styles.projectsSection}
      onMouseMove={handleMouseMove}
    >
      <div
        className={styles.orb1}
        style={{ left: `${mouse.x}%`, top: `${mouse.y}%` }}
      />
      <div
        className={styles.orb2}
        style={{ left: `${100 - mouse.x * 0.6}%`, top: `${100 - mouse.y * 0.7}%` }}
      />

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
              {(!project.noReadMore || project.github || project.liveUrl) && (
                <div className={styles.popupFooter}>
                  {!project.noReadMore && (
                    <a href={`/projects/${project.slug}`} className={styles.readMore}>
                      Read More <FaArrowRight className={styles.readMoreArrow} />
                    </a>
                  )}
                  {(project.github || project.liveUrl) && (
                    <div className={styles.popupActions}>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.actionBtn} title="GitHub">
                          <FaGithub />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.actionBtn} title="Live site">
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
