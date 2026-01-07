'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer} id="contact">
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.cta}>
                        <h2 className={styles.title}>Máte zájem o spolupráci?</h2>
                        <p className={styles.subtitle}>
                            Hledám nové výzvy a příležitosti k růstu. Dejte mi vědět!
                        </p>
                        <a href="mailto:daniel.jirik9@seznam.cz" className={styles.button}>
                            <Mail size={20} />
                            Napsat zprávu
                        </a>
                    </div>

                    <div className={styles.infoGrid}>
                        <div className={styles.infoItem}>
                            <Mail className={styles.icon} />
                            <span className={styles.label}>Email</span>
                            <a href="mailto:daniel.jirik9@seznam.cz" className={styles.value}>
                                daniel.jirik9@seznam.cz
                            </a>
                        </div>

                        <div className={styles.infoItem}>
                            <Phone className={styles.icon} />
                            <span className={styles.label}>Telefon</span>
                            <a href="tel:+420724875659" className={styles.value}>
                                +420 724 875 659
                            </a>
                        </div>

                        <div className={styles.infoItem}>
                            <MapPin className={styles.icon} />
                            <span className={styles.label}>Lokalita</span>
                            <span className={styles.value}>Prague, CZ</span>
                        </div>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p>© {currentYear} Ing. Daniel Jiřík. Všechna práva vyhrazena.</p>
                </div>
            </div>
        </footer>
    );
}
