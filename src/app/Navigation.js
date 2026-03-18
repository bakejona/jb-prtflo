'use client';

import styles from './Navigation.module.css';
import { HiOutlineHome, HiOutlineMail } from 'react-icons/hi';
import { RiLayoutGridLine } from 'react-icons/ri';

const navItems = [
  { name: 'Home',     path: 'about',    Icon: HiOutlineHome    },
  { name: 'Projects', path: 'projects', Icon: RiLayoutGridLine },
  { name: 'Contact',  path: 'contact',  Icon: HiOutlineMail    },
];

const NavBar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.title}>jb.</h1>
        <ul className={styles.navList}>
          {navItems.map(({ name, path, Icon }) => (
            <li key={path}>
              <button onClick={() => scrollToSection(path)} className={styles.navItem}>
                <Icon className={styles.navIcon} />
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
