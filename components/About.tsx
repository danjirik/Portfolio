'use client';

import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
    return (
        <section className={styles.aboutSection} id="about">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={styles.aboutContent}
                >
                    <div className={styles.header}>
                        <h2 className={styles.heading}>O mně</h2>
                        <div className={styles.line}></div>
                    </div>

                    <div className={styles.grid}>
                        <div className={styles.textColumn}>
                            <p className={styles.intro}>
                                Jsem <strong className="text-gradient">Ing. Daniel Jiřík</strong>, absolvent magisterského studia na ČVUT se zaměřením na interakci člověka s počítačem.
                            </p>
                            <p className={styles.paragraph}>
                                Specializuji se na vývoj webových aplikací a testování softwaru. Mám zkušenosti s full-cycle vývojem, od návrhu přes implementaci až po nasazení.
                                Rád hledám efektivní řešení a neustále se rozvíjím v nových technologiích.
                            </p>
                            <p className={styles.paragraph}>
                                V mém portfoliu najdete projekty, které kombinují moderní technologie s čistým a funkčním designem.
                            </p>
                        </div>

                        <div className={styles.statsColumn}>
                            <div className={styles.statCard}>
                                <span className={styles.statNumber}>3+</span>
                                <span className={styles.statLabel}>Roky studia & praxe</span>
                            </div>
                            <div className={styles.statCard}>
                                <span className={styles.statNumber}>5+</span>
                                <span className={styles.statLabel}>Velkých projektů</span>
                            </div>
                            <div className={styles.statCard}>
                                <span className={styles.statNumber}>Agile</span>
                                <span className={styles.statLabel}>Zkušenost v týmu</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
