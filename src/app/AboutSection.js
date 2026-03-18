'use client';

import { useState, useEffect } from 'react';
import styles from './AboutSection.module.css';
import Image from 'next/image';
import NavBar from './Navigation';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const FULL_TEXT = "Hi, I'm Jonathan";
const TYPING_SPEED = 80;
const DELETING_SPEED = 45;
const PAUSE_AFTER_TYPE = 2200;
const PAUSE_AFTER_DELETE = 600;

const AboutSection = () => {
  const githubLink = 'https://github.com/bakejona';
  const linkedinLink = 'https://www.linkedin.com/in/jonathan-baker-5291351b5/';

  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && displayed === FULL_TEXT) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
    } else if (isDeleting && displayed === '') {
      timeout = setTimeout(() => setIsDeleting(false), PAUSE_AFTER_DELETE);
    } else if (isDeleting) {
      timeout = setTimeout(() => setDisplayed(prev => prev.slice(0, -1)), DELETING_SPEED);
    } else {
      timeout = setTimeout(
        () => setDisplayed(prev => FULL_TEXT.slice(0, prev.length + 1)),
        TYPING_SPEED
      );
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting]);

  return (
    <div id="about" className={styles.card}>
      <NavBar />
      <div className={styles.content}>
        <div className={styles.imageSide}>
          <Image
            src="/jb-outline.svg"
            alt="Jonathan Baker"
            width={340}
            height={400}
            className={styles.outlineImage}
          />
        </div>
        <div className={styles.textSide}>
          <h1 className={styles.header}>
            {displayed}<span className={styles.cursor} />
          </h1>
          <p className={styles.paragraph}>UX Designer + Front End Developer</p>
          <p className={styles.motto}>Passionate about creating user-friendly and efficient digital experiences.</p>
          <p className={styles.paragraph}>Let's design, build, and grow</p>
          <div className={styles.socialLinks}>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaGithub />
            </a>
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
