import { useState, useEffect, useRef } from 'react';
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

  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

    useEffect(() => {
      const handleScroll = () => {
        if (menuOpen) setMenuOpen(false);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, [menuOpen]);

  return (
    <header className={`${styles.navbar} ${!showNavbar ? styles.hidden : ''}`}>
      <div className={styles.logo}>
        <img src="/OR-Logo.svg" alt="Altra Cool Deck" className={styles.logoImg} />
      </div>

      <button
        className={styles.toggle}
        onClick={toggleMenu}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        {menuOpen ? '×' : '☰'}
      </button>

      <nav className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/financing" onClick={closeMenu}>Financing</Link>
        <Link href="/commercial" onClick={closeMenu}>Commercial</Link>
        <Link href="/contact" onClick={closeMenu}>Contact</Link>
        <Link href="/gallery" onClick={closeMenu}>Gallery</Link>
      </nav>
    </header>
  );
};

export default Navbar;
