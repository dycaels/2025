import styles from '@/app/styles/home.module.css';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground} style={{
        backgroundImage: `url('utfpr-pg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}></div>
      <div className={`container ${styles.heroContent}`}>
        <h2 className={styles.heroTitle}>DYCAELS 2025</h2>

        <div className={styles.registrationBox}>
          <p className={styles.onlineText}>🌐 ONLINE & IN-PERSON</p>
          <p className={styles.registrationText}>🚀 REGISTER NOW</p>
          <p className={styles.dateText}>📍 Ponta Grossa, Brazil · July 30 – August 1, 2025</p>
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