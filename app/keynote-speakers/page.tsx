import styles from '@/app/styles/contentSection.module.css';

export default function KeynoteSpeakers() {
  return (
    <main>
      {/* Keynote Speakers Section */}
      <section className={styles.contentSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>KEYNOTE SPEAKERS</h2>

          <div className={styles.contentBox}>
            <h3>30/07 (Opening)</h3>
            <br/>           
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Stefania Specchia (POLITO). Politecnico di Torino. <b>Hydrogen and fuel cells for Energy transition.</b>
              </li>
            </ul>
            <br/>
            <h3>01/08</h3>
            <br/>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Rodrigo Brackmann (UTFPR). <b>Advancing Low-Carbon Hydrogen Research in Paraná; Pesquisadores que compõem o NAPI H₂.</b>
              </li>
              <li className={styles.listItem}>
                Airton Kunz (Embrapa Suínos e Aves - Concórdia SC). <b>Wastewater treatment from animal production systems using circular economy principles.</b>
              </li>
              <li className={styles.listItem}>
                Ariane Mayer/CEO Empresa Autêntica Ecossistemas sustentáveis e Ecossistemas Sustentáveis e Fernando J. B. Ehrensperger/Cofundador e CEO da Meruoca.  <b>Climate Crisis: Ecological Transition and the Advancement of Clean Technologies.</b>
              </li>
              <li className={styles.listItem}>
                Jorge Palacios Felix(UFFS, RS), J M Balthazar ( UTFPR, UNESP Bauru), Angelo M tusset e Jeferson Jose lima( UTFPR). <b>Sustainability and Piezoelectric-Based Energy Resources: Innovative Strategies for Engineering Applications.</b>
              </li>
              <li className={styles.listItem}>
                Raphaela Carvalho Machado( UNESP-Guaratinguetá, SP), Saulo Alfredo Gómez Salcedo( UNESP-Guaratinguetá, SP), David Fernando Castillo Zúñiga( unesp Sào joão boa vista, SP) e Teófilo Miguel de Souza ( UNESP-Guaratinguetá, SP). <b>Use of solar energy in electrically powered aircraft.</b>
              </li>
            </ul>
            </div>
        </div>
      </section>
    </main>
  );
}