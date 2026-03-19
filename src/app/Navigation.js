'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Navigation.module.css';
import { HiOutlineHome, HiOutlineMail } from 'react-icons/hi';
import { RiLayoutGridLine } from 'react-icons/ri';

const navItems = [
  { name: 'Home',     path: 'about',    Icon: HiOutlineHome    },
  { name: 'Projects', path: 'projects', Icon: RiLayoutGridLine },
  { name: 'Contact',  path: 'contact',  Icon: HiOutlineMail    },
];

const NavBar = () => {
  const pathname = usePathname();
  const router   = useRouter();
  const [animating, setAnimating] = useState(null);

  const isSubpage = pathname !== '/';

  const handleNavClick = (id) => {
    if (isSubpage) {
      setAnimating(id);
      setTimeout(() => {
        setAnimating(null);
        router.push(`/#${id}`);
      }, 320);
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.title}>jb.</h1>
        <ul className={styles.navList}>
          {navItems.map(({ name, path, Icon }) => (
            <li key={path}>
              <button
                onClick={() => handleNavClick(path)}
                className={`${styles.navItem} ${animating === path ? styles.navItemClick : ''}`}
              >
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
