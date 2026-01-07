'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.heroSection}>
            <div className={`container ${styles.heroContainer}`}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className={styles.subtitle}>Vývojář webových aplikací & Tester</h2>
                    <h1 className={styles.title}>
                        Ing. Daniel <span className="text-gradient">Jiřík</span>
                    </h1>
                    <p className={styles.description}>
                        Tvořím moderní webové aplikace s důrazem na uživatelský zážitek a čistý kód.
                        Spojuji technické znalosti s citem pro design.
                    </p>

                    <div className={styles.statsRow}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>3+</span>
                            <span className={styles.statLabel}>Roky praxe</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>5+</span>
                            <span className={styles.statLabel}>Projektů</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>Agile</span>
                            <span className={styles.statLabel}>Týmovost</span>
                        </div>
                    </div>

                    <div className={styles.ctaGroup}>
                        <a href="#projects" className={styles.primaryBtn}>Moje Projekty</a>
                        <a href="#contact" className={styles.secondaryBtn}>Kontaktovat</a>
                    </div>
                </motion.div>

                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className={styles.imageContainer}>
                        <Image
                            src="/images/profile.png"
                            alt="Ing. Daniel Jiřík"
                            fill
                            className={styles.profileImage}
                            priority
                        />
                    </div>
                    <div className={styles.decorationCircle}></div>
                </motion.div>
            </div>
        </section>
    );
}
