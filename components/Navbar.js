// components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <img src="/OR-Logo.svg" alt="Altra Cool Deck" className={styles.logoImg} />
      </div>
      <nav className={styles.navLinks}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/commercial">Commercial</Link>
        <Link href="/financing">Financing</Link>
        <Link href="/concrete">Concrete</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/testimonials">Testimonials</Link>
        <Link href="/image-gallery">Image Gallery</Link>
      </nav>
      <div className={styles.contact}>
        <p>Call us: (480) 366-4499</p>
      </div>
    </header>
  );
};

export default Navbar;
