import styles from '@/app/styles/contentSection.module.css';

export default function Topics() {
  return (
    <section className={styles.contentSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>TOPICS</h2>

        <div className={styles.contentBox}>
          <h3 className={styles.contentTitle}>
            Conference Topics
          </h3>
          
          <p className={styles.contentText}>
            DYCAELS 2025 welcomes submissions in the following areas:
          </p>
          
          <ol className={styles.list}>
            <li className={styles.listItem}>
              Energy production, renewable energy sources, energy transfer and/or harvesting.
            </li>
            <li className={styles.listItem}>
              Modeling of sustainable energy processes.
            </li>
            <li className={styles.listItem}>
              Dynamic analysis and control, applied synchronization and control.
            </li>
            <li className={styles.listItem}>
              Hydrogen and fuel cells for Energy transition
            </li>
            <li className={styles.listItem}>
              Energy management and systems models.
            </li>
          </ol>
          
          <p className={styles.contentText}>
            Other related topics may be considered. Please contact the organizing committee if you have questions about the suitability of your research.
          </p>
        </div>
      </div>
    </section>
  );
}