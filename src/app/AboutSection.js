import styles from './AboutSection.module.css';
import Image from 'next/image';
import NavBar from './Navigation';
import SkillsCarousel from './SkillsCarousel'; 

const AboutSection = () => {
  const githubLink = 'https://github.com/bakejona';
  const linkedinLink = 'https://www.linkedin.com/in/jonathan-baker-5291351b5/';

  return (
    <div id="about" className={styles.aboutWrapper}>
      {/* 1. THE HERO SECTION (Gradient Background) */}
      <div className={styles.hero}>
        <NavBar />
        
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <div className={styles.maskingContainer}>
              <h1 className={styles.header}><span>👋</span> Hi there, I'm Jonathan</h1>
            </div>
            <p className={styles.paragraph}>
              UX/UI DESIGNER & DEVELOPER 
            </p>
          </div>
        </div>

        <div className={styles.socialLinks}>
          <a href={githubLink}>
            <Image src="/logos/github.svg" alt="GitHub" className={styles.socialLogo} width={40} height={40} />
          </a>
          <a href={linkedinLink}>
            <Image src="/logos/linkedin.svg" alt="LinkedIn" className={styles.socialLogo} width={40} height={40} />
          </a>
        </div>
      </div>

      {/* 2. THE SKILLS CAROUSEL (The Tab Underneath) */}
      <SkillsCarousel />

    </div>
  );
};

export default AboutSection;