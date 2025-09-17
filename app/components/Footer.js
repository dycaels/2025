import styles from '@/app/styles/contentSection.module.css';
import Image from 'next/image';

export default function Header() {
  return (
    <footer className={styles.footer}>
                <div className={styles.footerDivider}></div>

                <div className={styles.footerContent}>
                    <p className={styles.footerText}>
                    <b>Organization:</b> G. G. Lenzi, A. M. Tusset, M. E. K. Fuziki, A. Coqueiro (UTFPR - Ponta Grossa), 
                    L.M.S. Colpini (Federal University of Paraná), O.A.A dos Santos (UEM/UTFPR - Pato Branco), 
                    S. Specchia (Politecnico di Torino), J. M. Balthazar (UNESP - Faculdade de Engenharia de Bauru).
                    </p>

                    <div className={styles.footerContact}>
                    <p>📍 <b>Location:</b> UTFPR - Federal Technological University of Paraná, Ponta Grossa</p>
                    <p>✉️ <b>Contact:</b> <a href="mailto:dycaels25@gmail.com">dycaels25@gmail.com</a></p>
                    </div>

                    <div className={styles.footerInstitutions}>
                        <div className={styles.institutionItem}>
                            <Image
                                src={'/2025/UTFPR_logo.png'}
                                alt="UTFPR Logo"
                                className={styles.footerLogoSmall}
                                width={130}
                                height={50}
                            />
                            <span className={styles.institutionText}>Technological University of Paraná</span>
                        </div>
                        <div className={styles.institutionItem}>
                            <Image
                                src={'/2025/abcm_logo.png'}
                                alt="ABCM Logo"
                                className={styles.footerLogo}
                                width={120}
                                height={60}
                            />
                            <span className={styles.institutionText}>ABCM - Brazilian Society of Mechanical Sciences and Engineering</span>
                        </div>
                        <div className={styles.institutionItem}>
                            <Image
                                src={'/2025/cyted_logo2.png'}
                                alt="CYTED Logo"
                                className={styles.footerLogo}
                                width={100}
                                height={80}
                            />
                            <span className={styles.institutionText}>CYTED - Programa Iberoamericano de Ciencia y Tecnología para el Desarrollo</span>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>&copy; 2025 Dycaels. All rights reserved.</p>
                </div>
            </footer>
  );
}
