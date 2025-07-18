import styles from '@/app/styles/contentSection.module.css';

export default function SpecialIssues() {
  return (
    <section className={styles.contentSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>SPECIAL ISSUES</h2>

        <div className={styles.contentBox}>
          <h3 className={styles.contentTitle}>
            Special issues to be published in  Springer (to be confirmed).
          </h3>
        </div>
      </div>
    </section>
  );
}