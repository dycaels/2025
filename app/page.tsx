import styles from '@/app/styles/contentSection.module.css';
import HeroSection from '@/app/components/HeroSection';

export default function Home() {
  return (
    <>
      <HeroSection />
            
      <section className={styles.contentSection}>
          <div className="container">
          <h3 className={styles.sectionTitle}>KEYDATES</h3>

          <div className={styles.smallContentBox}>
              <p className={styles.smallContentText}>
              <b>Registration:</b>&nbsp;September 2 - 30<sup>th</sup>, 2025
              </p>
              
              <p className={styles.smallContentText}>
              <b>Abstract Submission:</b>&nbsp;Ends on September 15<sup>th</sup>, 2025
              </p>
          </div>
          </div>
      </section>
    </>
  );
}
