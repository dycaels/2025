'use client'
import styles from '@/app/styles/home.module.css';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src={'/site_logo.JPG'}
              priority={true}
              alt="DYCAELS Logo"
              className={styles.logoImage}
              width={561}
              height={448}
            />
            <h1 className={styles.siteName}>DYCAELS</h1>
          </Link>
        </div>

        {/* Normal navbar for desktop */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/goals" className={styles.navLink}>Goals</Link>
          <Link href="/topics" className={styles.navLink}>Topics</Link>
          <Link href="/keynote-speakers" className={styles.navLink}>Keynote Speakers</Link>
          <Link href="/special-issues" className={styles.navLink}>Special Issues</Link>
          <Link href="/submit" className={styles.navLink}>Submit</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className={styles.menuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Dropdown menu for mobile */}
        {isMobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <Link href="/" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/goals" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Goals</Link>
            <Link href="/topics" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Topics</Link>
            <Link href="/keynote-speakers" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Keynote Speakers</Link>
            <Link href="/special-issues" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Special Issues</Link>
            <Link href="/submit" className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>Submit</Link>
          </div>
        )}
      </div>
    </header>
  );
}
