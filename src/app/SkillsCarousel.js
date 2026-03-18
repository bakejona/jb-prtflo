// src/app/SkillsTicker.js
import Image from 'next/image';
import styles from './SkillsTicker.module.css';

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

const SkillsCarousel = () => {
  // Create 4 sets of skills to ensure the row is long enough for large screens
  // This prevents the carousel from "flickering" or running out of items
  const seamlessSkills = [...skills, ...skills, ...skills, ...skills];

  return (
    <div className={styles.tickerContainer}>
      <div className={styles.tickerTrack}>
        {seamlessSkills.map((skill, index) => (
          <div key={`${skill.name}-${index}`} className={styles.iconWrapper}>
            <Image
              src={skill.logo}
              alt={skill.name}
              width={50}
              height={50}
              className={styles.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCarousel;