import styles from '@/app/styles/contentSection.module.css';

export default function KeynoteSpeakers() {
  return (
    <main>
      <section className={styles.contentSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>KEYNOTE SPEAKERS</h2>
          <h3 className={styles.sectionSubTitle}>Preliminary Program</h3>

          <div className={styles.programBox}>
            {/* Wednesday */}
            <div className={styles.programDay}>
              <h4>Wednesday, October 1<sup>st</sup></h4>
              <p className={styles.sessionType}>OPENING SESSION</p>
              <div className={styles.programItem}>
                <p className={styles.programTime}>09:00 - 09:40</p>
                <p className={styles.programTitle}><b>HYDROGEN AND FUEL CELLS FOR ENERGY TRANSITION</b></p>
                <p className={styles.programSpeaker}>Stefania Specchia (Politécnico di Torino)</p>
              </div>
            </div>

            {/* Thursday */}
            <div className={styles.programDay}>
              <h4>Thursday, October 2<sup>nd</sup></h4>
              <p className={styles.sessionType}>LECTURES</p>

              <div className={styles.programItem}>
                <p className={styles.programTime}>09:00 - 09:40</p>
                <p className={styles.programTitle}><b>CLIMATE CRISIS: ECOLOGICAL TRANSITION AND THE ADVANCEMENT OF CLEAN TECHNOLOGIES</b></p>
                <p className={styles.programSpeaker}>Ariane Mayer (CEO Autêntica Ecossistemas) & Fernando J. B. Ehrensperger (CEO Meruoca)</p>
              </div>

              <div className={styles.programItem}>
                <p className={styles.programTime}>10:00 - 10:40</p>
                <p className={styles.programTitle}><b>WASTEWATER TREATMENT FROM ANIMAL PRODUCTION SYSTEMS USING CIRCULAR ECONOMY PRINCIPLES</b></p>
                <p className={styles.programSpeaker}>Airton Kunz (Embrapa Suínos e Aves - Concórdia SC)</p>
              </div>

              <div className={styles.programItem}>
                <p className={styles.programTime}>10:40 - 11:20</p>
                <p className={styles.programTitle}><b>Coffee Break</b></p>
              </div>
              <p className={styles.sessionType}>Oral Communications</p>

              <div className={styles.programItem}>
                <p className={styles.programTime}>14:00 - 14:40</p>
                <p className={styles.programTitle}><b>ADVANCING LOW-CARBON HYDROGEN RESEARCH IN PARANÁ; PESQUISADORES QUE COMPÕEM O NAPI H₂.</b></p>
                <p className={styles.programSpeaker}>Prof. Rodrigo Brackmann</p>
              </div>
              <p className={styles.sessionType}>Oral Communications</p>
            </div>

            {/* Friday */}
            <div className={styles.programDay}>
              <h4>Friday, October 3<sup>rd</sup></h4>
              <p className={styles.sessionType}>Oral and Poster Communications</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
