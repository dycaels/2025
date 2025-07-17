import styles from '@/app/styles/contentSection.module.css';

export default function Submit() {
  return (
    <main>
      {/* Submit Section */}
      <section className={styles.contentSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>SUBMIT YOUR ABSTRACTS</h2>

          <div className={styles.contentBox}>
            <p className={styles.contentText}>
              Submit your abstract to xxx@gmail.com. We appreciate your contribution.
            </p>

            <br/>
            <h3>Template</h3>
            
            <p className={styles.contentText}>
              The conference template is mandatory for all papers submitted to the event.
              Any submissions that do not follow the template will be rejected.
              The template ensures a consistent and high-quality presentation of the research work.
            </p>

            <a
              href={`${process.env.PUBLIC_URL}/template_abstrace.docx`}
              download="template_abstrace.docx"
            >
              <u>Download here</u>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}