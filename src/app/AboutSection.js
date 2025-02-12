import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section id="about" className={styles.section}>
      <h1 className={styles.heading}>hi, i'm jonathan!</h1>
      <p className={styles.paragraph}>UX/UI Designer <br/> Passionate About Creative Technology and Innovation</p>
    </section>
  );
};

export default AboutSection;