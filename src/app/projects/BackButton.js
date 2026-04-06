import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';
import styles from './project.module.css';

const BackButton = () => (
  <Link href="/#projects" className={styles.backBtn} aria-label="Back to projects">
    <HiArrowLeft />
  </Link>
);

export default BackButton;
