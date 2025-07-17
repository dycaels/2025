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
              <b>Registration:</b> &nbsp;&nbsp;&nbsp;July 22-29, 2025
              </p>
              
              <p className={styles.smallContentText}>
              <b>Abstract Submission:</b> &nbsp;&nbsp;&nbsp;Ends on July 25, 2025
              </p>
          </div>
          </div>
      </section>
    </>
  );
}
