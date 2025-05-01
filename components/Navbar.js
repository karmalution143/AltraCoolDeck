import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/OR-Logo.svg" alt="Altra Cool Deck" className={styles.logoImg} />
      </div>

      <button className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/commercial" onClick={closeMenu}>Commercial</Link>
        <Link href="/financing" onClick={closeMenu}>Financing</Link>
        <Link href="/concrete" onClick={closeMenu}>Concrete</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
        <Link href="/testimonials" onClick={closeMenu}>Testimonials</Link>
        <Link href="/image-gallery" onClick={closeMenu}>Image Gallery</Link>
      </nav>
    </header>
  );
};

export default Navbar;
