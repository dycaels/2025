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

      <div className="container">
          <div className={styles.contentBoxV2}>
            <h4>SUSTAINABILITY AND ENERGY RESOURCES IN ENGINEERING APPLICATIONS</h4>
            <p className={styles.contentText}>
              This book will provide a comprehensive overview of sustainable energy systems, combining theoretical
              foundations with applied perspectives. It will explore the fundamentals of energy production, with an
              emphasis on renewable energy sources and innovative approaches to energy transfer and harvesting.
            </p>

            <p className={styles.contentText}>
              Building on these concepts, the book also proposes chapters dedicated to modeling sustainable energy
              processes, offering mathematical and computational tools for performance analysis and optimization.
              Particular attention will be given to dynamic analysis and control, including synchronization techniques
              applied to improve system stability and efficiency.
            </p>

            <p className={styles.contentText}>
              Furthermore, the book will highlight the role of chemical reaction technologies for green fuel generation
              as essential components of the global energy transition, discussing recent advances and integration
              challenges. Finally, it will present strategies for energy management and systems modeling, providing
              readers with frameworks for designing, evaluating, and implementing sustainable energy solutions.
            </p>

            <p className={styles.contentText}>
              This book is aimed at researchers, engineers, and students engaged in the development of cleaner, more
              efficient energy technologies for a sustainable future.
            </p>
          </div>

          
          <br/>
          <div className={styles.tableBox}>
            <table className={styles.table}>
              <caption>Editors</caption>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Institution</th>
                  <th>E-mail</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>J. M. Balthazar</td>
                  <td>UNESP - Faculdade de Engenharia de Bauru</td>
                  <td>jmbaltha@gmail.com</td>
                </tr>
                <tr>
                  <td>L. M. S. Colpini</td>
                  <td>Federal University of Paraná</td>
                  <td>ledasaracol@ufpr.br</td>
                </tr>
                <tr>
                  <td>A. M. Tusset</td>
                  <td>UTFPR - Ponta Grossa</td>
                  <td>tusset@utfpr.edu.br</td>
                </tr>
                <tr>
                  <td>G. G. Lenzi</td>
                  <td>UTFPR - Ponta Grossa</td>
                  <td>gianeg@utfpr.edu.br</td>
                </tr>
                <tr>
                  <td>M. E. K. Fuziki</td>
                  <td>UTFPR - Ponta Grossa</td>
                  <td>mariafuziki@utfpr.edu.br</td>
                </tr>
                <tr>
                  <td>A. Coqueiro</td>
                  <td>UTFPR - Ponta Grossa</td>
                  <td>alinedqi@utfpr.edu.br</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    </section>
  );
}