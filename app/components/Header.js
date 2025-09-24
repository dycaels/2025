'use client'
import styles from '@/app/styles/home.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Dycaels' },
    { href: '/goals', label: 'Goals' },
    { href: '/topics', label: 'Topics' },
    { href: '/keynote-speakers', label: 'Keynote Speakers' },
    { href: '/program', label: 'Program' },
    { href: '/special-issues', label: 'Special Issues' },
    { href: '/submit', label: 'Submit' },
  ];

  console.log(pathname);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src={`/2025/site_logo.JPG`}
              priority={true}
              alt="DYCAELS Logo"
              className={styles.logoImage}
              width={561}
              height={448}
            />
            <h1 className={styles.siteName}>DYCAELS</h1>
          </Link>
        </div>

        {/* Navbar desktop */}
        <nav className={styles.nav}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.navLink} ${pathname === href ? styles.activeLink : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Botão menu mobile */}
        <button
          className={styles.menuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${styles.mobileNavLink} ${pathname === href ? styles.activeLink : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
