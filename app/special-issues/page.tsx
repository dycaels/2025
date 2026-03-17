import styles from '@/app/styles/contentSection.module.css';

export default function SpecialIssues() {
  return (
    <section className={styles.contentSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>SPECIAL ISSUES</h2>
      </div>

      <div className="container">
        <div className={styles.contentBoxV2}>
          <h4>Global Decarbonisation</h4>

          <p className={styles.contentText}>
            <strong>Special Collection:</strong> Dynamic Analysis and Control Strategies for Low Carbon Energy Systems
          </p>

          <p className={styles.contentText}>
            <strong>Guest Editor:</strong><br />
            Professor Jose Manoel Balthazar<br />
            UNESP School of Engineering, Bauru, Brazil<br />
            Email: jmbaltha@gmail.com
          </p>

          <p className={styles.contentText}>
            <strong>The provisional schedule for the article is:</strong>
          </p>

          <ul className={styles.contentText}>
            <li>
              Submission deadline: April 30, 2026 (*Before submitting the manuscript, please wait for confirmation from the organizing committee)
            </li>
            <li>Notification of acceptance: August 31, 2026</li>
            <li>Final version submission: October 31, 2026</li>
            <li>Publication date: December 31, 2026</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
