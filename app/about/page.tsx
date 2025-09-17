import styles from '@/app/styles/contentSection.module.css';

export default function DycaelsAboutPage() {
  return (
    <section className={styles.contentSection}>
      <h1 className={styles.sectionTitle}>About DYCAELS</h1>
      <p className={styles.contentTextV2}>
        Check out the latest editions of the event:
      </p>

      <div className={styles.contentBoxYearOutline}>
        <p>2023</p>
        <div className={styles.contentBoxV3}>
            <h4>IV Conference on Dynamics, Control, and Applications to Applied Engineering and Life Science</h4>
            <p><b>Organization:&nbsp;</b> J. M. Balthazar, A. M. Tusset (UTFPR/Ponta Grossa), Carlos Henrique Illa Font (UTFPR/Ponta Grossa), Mauricio A. Ribeiro (UTFPR/Ponta Grossa), Fernanda Correa (UTFPR/Ponta Grossa), Juliana M. T. de Abreu Pietrobelli (UTFPR/Ponta Grossa), Claudia Tania Picinin (UTFPR/Ponta Grossa), Juliana Simonović (University of Nis, Serbia), Paulo Batista Gonçalves (PUCRJ), G. Litak e P. Wolszczak (Lublin University of Technology, Poland).</p>
        </div>
      </div>

      <div className={styles.contentBoxYearOutline}>
        <p>2020</p>
        <div className={styles.contentBoxV3}>
            <h4>III Conference on Dynamics, Control and Applications to Engineering and Life Science (2020)</h4>
            <p><b>Organization:&nbsp;</b> J. M. Balthazar (UNESP, Bauru), Angelo M. Tusset (UTFPR/Ponta Grossa), Mauricio A. Ribeiro (UTFPR/Ponta Grossa).</p>
        </div>
    </div>

    <div className={styles.contentBoxYearOutline}>
        <p>2019</p>
      <div className={styles.contentBoxV3}>
        <h4>II Conference on Dynamics, Control and Applications to Engineering and Life Science</h4>
        <p><b>Organization:&nbsp;</b> Jose M. Balthazar (UNESP, Bauru), Angelo M. Tusset (UTFPR/Ponta Grossa).</p>
      </div>
    </div>

    <div className={styles.contentBoxYearOutline}>
        <p>2018</p>
      <div className={styles.contentBoxV3}>
        <h4>I Conference on Dynamics, Control and Applications to Engineering and Life Science</h4>
        <p><b>Organization:&nbsp;</b> Jose M. Balthazar (UNESP, Bauru), Angelo M. Tusset (UTFPR/Ponta Grossa).</p>
      </div>
    </div>
    </section>
  );
}
