import styles from '@/app/styles/home.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground} style={{
        backgroundImage: `url('/2025/utfpr-pg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}></div>
      <div className={`container ${styles.heroContent}`}>
        <h2 className={styles.heroTitle}>DYCAELS 2025</h2>

        <div className={styles.registrationBox}>
          <p className={styles.closedText}>
            ✅ <b>DYCAELS 2025 has successfully concluded!</b>
          </p>
          <p className={styles.thankYouText}>
            Thank you to all participants, presenters, and organizers who made this event a success.
          </p>
          <div className={styles.virtualAccessBox}>
            <p className={styles.virtualAccessTitle}>📘 <b>Proceedings and Accepted Papers</b></p>
            <p className={styles.virtualAccessText}>
              The compiled file with all accepted works is now available for download below:
            </p>
            <a 
              href="/2025/Dycaels_Abstracts.pdf" 
              className={styles.meetLink}
              target="_blank" 
              rel="noopener noreferrer"
            >
              📄 Download DYCAELS 2025 Proceedings
            </a>
          </div>
        </div>


        <div className={styles.conferenceBox}>
          <p className={styles.conferenceText}>
            “Sustainability and Energy Resources in Engineering Applications”
          </p>
        </div>
      </div>
    </section>

  );
}