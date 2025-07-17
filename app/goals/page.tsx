import styles from '@/app/styles/contentSection.module.css';

export default function Goals() {
  return (
    <main>      
      {/* Goals Section */}
      <section className={styles.contentSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>GOALS</h2>

          <div className={styles.contentBox}>
            <h3 className={styles.contentTitle}>
              Conference Objectives
            </h3>
            
            <p className={styles.contentText}>
              The main goals of DYCAELS 2025 are:
            </p>
            
            <ol className={styles.list}>
              <li className={styles.listItem}>
                The goal of two events is to explore the emergence of new research fields involving sustainable energy resources.
              </li>
              <li className={styles.listItem}>
                They will be dedicated to an interdisciplinary audience, with special attention to master's and doctoral students, 
                young researchers and practicing engineers.
              </li>
              <li className={styles.listItem}>
                The aim of the events is to highlight current research trends and future perspectives in this area. The workshop is 
                structured around topics of theoretical lectures, short courses, lectures for participants, oral and poster presentations 
                (online and/or in person).
              </li>
              <li className={styles.listItem}>
                The topic is approached in a transdisciplinary way, covering applications in engineering (mechanical, civil, mechanical, 
                astrodynamics, production, mechatronics, naval, offshore, aeronautical, chemical and electrical), starting from the fundamentals 
                and energy transition, aiming at sustainability.
              </li>
              <li className={styles.listItem}>
                Participants will be exposed to cutting-edge knowledge in the speakers' areas of expertise.
              </li>
              <li className={styles.listItem}>
                The event consists of presentations of ongoing work, mini-courses, discussions with invited speakers, and presentations from 
                industry and academia, both from Brazil and abroad, connecting people with complementary perspectives.
              </li>
              <li className={styles.listItem}>
                The mini-courses will focus on practical applications of tools and technologies and will be taught by professors, engineers, 
                and researchers who are experts from industry and academia.
              </li>
              <li className={styles.listItem}>
                The invited speakers are renowned professors and industry executives who will share their experiences and background in the energy sector.
              </li>
              <li className={styles.listItem}>
                The official language of the conference is English; therefore, all submissions and presentations must be made in English.
              </li>
              <li className={styles.listItem}>
                Presentations at the conference and workshop will be distributed in sessions according to the topics of the abstracts.
              </li>
              <li className={styles.listItem}>
                Only accepted papers from participants who will present their work at the conference, in person or remotely, will be published in special issues.
              </li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}