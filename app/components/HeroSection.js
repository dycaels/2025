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
            🛑 <b>Registration is now closed.</b>
          </p>
          <p className={styles.thankYouText}>
            Thank you for your interest in DYCAELS 2025! We’re excited to welcome all registered participants.
          </p>
          <div className={styles.eventDetails}>
            <p className={styles.dateText}>📅 <b>Event Dates:</b> October 1–3, 2025</p>
            <p className={styles.dateText}>📍 <b>Location:</b> Ponta Grossa, Brazil & Online</p>
          </div>
          <div className={styles.virtualAccessBox}>
            <p className={styles.virtualAccessTitle}>💻 <b>Virtual Access (Google Meet)</b></p>
            <p className={styles.virtualAccessText}>All online participants can join using the link below:</p>
            <a 
              href="https://meet.google.com/rxe-bfhh-ofn" 
              className={styles.meetLink}
              target="_blank" 
              rel="noopener noreferrer"
            >
              👉 Join DYCAELS 2025 on Google Meet
            </a>
            <p className={styles.virtualAccessNote}>(Link will be active 15 minutes before each session)</p>
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