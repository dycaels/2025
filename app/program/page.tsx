import styles from '@/app/styles/contentSection.module.css';

export default function Program() {
  return (
    <main>
      <section className={styles.contentSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>PROGRAM</h2>
          <h3 className={styles.sectionSubTitle}>Oral Presentations</h3>

          <div className={styles.programBox}>
            {/* Wednesday - October 1 */}
            <div className={styles.programDay}>
              <h4>Wednesday, October 1<sup>st</sup></h4>
              <div className={styles.programItem}>
                <p className={styles.programTime}>10:20 - 10:40</p>
                <p className={styles.programTitle}><b>Economic feasibility analysis for the implementation of a photovoltaic system applied to the productive sector</b></p>
                <p className={styles.programSpeaker}>Daniel Mantovani (UTFPR/PG) — Remote</p>
              </div>

              <div className={styles.programItem}>
                <p className={styles.programTime}>10:45 - 11:05</p>
                <p className={styles.programTitle}><b>Application of Value Mapping and its attractiveness for improving industrial product costs</b></p>
                <p className={styles.programSpeaker}>Daniel Mantovani (UTFPR/PG) — Remote</p>
              </div>

              <div className={styles.programItem}>
                <p className={styles.programTime}>11:10 - 11:30</p>
                <p className={styles.programTitle}><b>Mapping the Influence of Process Variables on Environmental and Economic Performance in Intensified Biodiesel Production</b></p>
                <p className={styles.programSpeaker}>Willian Dimas Pompeo Siqueira (UEM) — In-person</p>
              </div>
            </div>

            {/* Thursday - October 2 */}
            <div className={styles.programDay}>
              <h4>Thursday, October 2<sup>nd</sup></h4>
              <div className={styles.programItem}>
                <p className={styles.programTime}>11:00 - 11:20</p>
                <p className={styles.programTitle}><b>Dynamical Analysis of a Financial System with Chaotic Behavior including Fractional Order</b></p>
                <p className={styles.programSpeaker}>Sofia Estevam Krzyuy (UTFPR) — In-person</p>
              </div>

              <div className={styles.programItem}>
                <p className={styles.programTime}>11:25 - 11:40</p>
                <p className={styles.programTitle}><b>Dynamical Analysis of a Non-Linear Model of Cutting Process Subject to Non-Ideal Excitations</b></p>
                <p className={styles.programSpeaker}>Angelo Marcelo Tusset (UTFPR) — In-person</p>
              </div>
            </div>

            {/* Friday - October 3 */}
            <div className={styles.programDay}>
              <h4>Friday, October 3<sup>rd</sup></h4>
              <div className={styles.programItem}>
                <p className={styles.programTime}>09:00 - 09:20</p>
                <p className={styles.programTitle}><b>Assessment of Hydrogen Production via Gasification of Water Hyacinth (Eichhornia crassipes)</b></p>
                <p className={styles.programSpeaker}>Kenny Yudimy Garcia Angarita (UEM) — Remote</p>
              </div>
            </div>

            {/* Posters */}
            <h3 className={styles.sectionMidTitle}>Poster Presentations</h3>

            <div className={styles.programDay}>
              <div className={styles.programItem}>
                <p className={styles.programTitle}><b>Ag/TiO₂ sol-gel photocatalysts: a promising solution for pathogen inactivation</b></p>
                <p className={styles.programSpeaker}>Caroline Zarzzeka (UFFS) — Other — Remote</p>
              </div>

              <div className={styles.programItem}>
                <p className={styles.programTitle}><b>Application of Value Mapping and its attractiveness for improving industrial product costs</b></p>
                <p className={styles.programSpeaker}>Luís Fernando Cusioli (UEM) — Faculty Member/Professor — Remote</p>
              </div>

              <div className={styles.programItem}>
                <p className={styles.programTitle}><b>Economic feasibility analysis for the implementation of a photovoltaic system applied to the productive sector</b></p>
                <p className={styles.programSpeaker}>Luís Fernando Cusioli (UEM) — Faculty Member/Professor — Remote</p>
              </div>

              <div className={styles.programItem}>
                <p className={styles.programTitle}><b>Application in OKRS management and planning assigned to the technology service by deliveries</b></p>
                <p className={styles.programSpeaker}>Diana Aline Gomes (UEM) — Undergraduate Student — Remote</p>
              </div>

              <div className={styles.programItem}>
                <p className={styles.programTitle}><b>Knowledge management focused on industrial corporate structuring</b></p>
                <p className={styles.programSpeaker}>Diana Aline Gomes (UEM) — Undergraduate Student — Remote</p>
              </div>

              <div className={styles.programItem}>
                <p className={styles.programTitle}><b>Functional nanomaterials based on silver and propolis obtained by modified sol-gel and impregnation</b></p>
                <p className={styles.programSpeaker}>Thamyres Rodrigues Alves (UFPR Jandaia do Sul) — Undergraduate Student — Remote</p>
              </div>

              <div className={styles.programItem}>
                <p className={styles.programTitle}><b>From Waste to Energy: Scientometric Evidence on Biogas Production from Cattle Manure (2012–2022)</b></p>
                <p className={styles.programSpeaker}>Aline Eurich da Silva Valigura (UTFPR) — Undergraduate Student — In-person</p>
              </div>

              <div className={styles.programItem}>
                <p className={styles.programTitle}><b>Transforming Sugarcane Waste into Biochar: Pathways to Sustainable Environmental Technologies</b></p>
                <p className={styles.programSpeaker}>Carlos Henrique Tenório de Lima (UFPR) — Graduate Student — Remote</p>
              </div>

              <div className={styles.programItem}>
                <p className={styles.programTitle}><b>Random Forest Surrogate Modeling of Hydrogen Purification via Pressure Swing Adsorption</b></p>
                <p className={styles.programSpeaker}>Rodrigo Norio Ito (UEM) — Undergraduate Student — Remote</p>
              </div>

              <div className={styles.programItem}>
                <p className={styles.programTitle}><b>Electrical Components Obtained via 3D Printing: A Review</b></p>
                <p className={styles.programSpeaker}>Pedro Gonçalves Lenzi (UEM) — Undergraduate Student — Remote</p>
              </div>

              <div className={styles.programItem}>
                <p className={styles.programTitle}><b>Optimization of Biogas Dry Reforming for Hydrogen Production</b></p>
                <p className={styles.programSpeaker}>Arthur de Almeida Martins (UEM) — Undergraduate Student — In-person</p>
              </div>

              <div className={styles.programItem}>
                <p className={styles.programTitle}><b>Development of Cu-Zn/Nb2O5 Catalysts for Hydrogen Production via Gas-Water Shift Reaction</b></p>
                <p className={styles.programSpeaker}>Tamires Pereira Rosa (UEM) — Graduate Student — Remote</p>
              </div>

              <div className={styles.programItem}>
                <p className={styles.programTitle}><b>Environmental Impacts of Lithium-Ion Battery Recycling: Integrating Logistics into a Life Cycle Assessment Model</b></p>
                <p className={styles.programSpeaker}>Thays Valeriano de Oliveira (UFPR) — Graduate Student — In-person</p>
              </div>

              <div className={styles.programItem}>
                <p className={styles.programTitle}><b>Hydrotreating of Vegetable Oils over a Ni-Mo/Al₂O₃ Carbide Catalyst: Toward Sustainable Production of Green Fuels</b></p>
                <p className={styles.programSpeaker}>Eduarda Aouada Biagio (UEM) — Graduate Student — Remote</p>
              </div>

              <div className={styles.programItem}>
                <p className={styles.programTitle}><b>Circular Economy and Decarbonization: Integrated analysis of global, national and regulatory frameworks with an emphasis on the agricultural sector</b></p>
                <p className={styles.programSpeaker}>Letícia Barbosa Fidanza (UFPR) — Graduate Student — Remote</p>
              </div>

              <div className={styles.programItem}>
                <p className={styles.programTitle}><b>Green Technology for the Valorization of Green Coconut Husk: Extraction with Pressurized Liquids</b></p>
                <p className={styles.programSpeaker}>Vanessa Cosme Ferreira (UNICAMP) — Graduate Student — Remote</p>
              </div>
            </div>

            {/* Instructions */}
            <div className={styles.contentBoxV2}>
              <h3>Instructions</h3>
              <p className={styles.contentText}>
                Oral presentations lasting 10 minutes. After 10 minutes for questions.
              </p>
              <p className={styles.contentText}>
                Regarding the poster session, the presenting authors are kindly requested to upload the poster (maximum size: 40Mb), and a 3-minute mp4 file with the 3-minute presentation (maximum size: 256Mb) at:  <i>dycaels25@gmail.com</i>. Posters must be submitted by September 29th.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
