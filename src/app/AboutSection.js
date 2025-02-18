import styles from './AboutSection.module.css';
import Image from 'next/image';
import Head from 'next/head';


//adding logos
const skills = [
  { name: 'HTML', logo: '/logos/html.svg' },
  { name: 'CSS', logo: '/logos/css.svg' },
  { name: 'JavaScript', logo: '/logos/javascript.svg' },
  { name: 'React.js', logo: '/logos/react.svg' },
  { name: 'PHP', logo: '/logos/php.svg' },
  { name: 'Figma', logo: '/logos/figma.svg' },
  { name: 'Adobe XD', logo: '/logos/adobe-xd.svg' },
  { name: 'Adobe Illustrator', logo: '/logos/adobe-illustrator.svg' },
];

//media links
const AboutSection = () => {
  const githubLink = 'https://github.com/bakejona';
  const linkedinLink = 'https://www.linkedin.com/in/jonathan-baker-5291351b5/';

<Head>
<title>&#128075; Jonathan</title>
</Head>
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.maskingContainer}>
            <h1 className={styles.header}><span>&#128075;</span> Hi, I'm Jonathan</h1>
          </div>
          <p className={styles.paragraph}>
            I am a UX/UI designer, developer, and passionate about creating user-centered experiences.
          </p>
        </div>
      </div>
      
      <div className={styles.socialLinks}>
        <a href={githubLink} >
          <Image src="/logos/github.svg" alt="GitHub" className={styles.socialLogo} width={40} height={40} />
        </a>
        <a href={linkedinLink} >
          <Image src="/logos/linkedin.svg" alt="LinkedIn" className={styles.socialLogo} width={40} height={40} />
        </a>
      </div>

      <div className={styles.container}>
        <div className={styles.mySkills}>
          <h1>My Skills</h1>
          <div className={styles.skillsGrid}>
            {skills.map((skill) => (
              <div key={skill.name} className={styles.skillBox}>
                <Image src={skill.logo} alt={skill.name} className={styles.skillLogo} width={40} height={40} />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
