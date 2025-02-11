'use client';

import styles from './Navigation.module.css';

const NavBar = () => {
  const navItems = [
    { name: 'home', path: 'home' },
    { name: 'about', path: 'about' },
    { name: 'projects', path: 'projects' },
    { name: 'contact', path: 'contact' },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.title}></h1>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.path}>
              <button 
                onClick={() => scrollToSection(item.path)}
                className={styles.navItem}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

