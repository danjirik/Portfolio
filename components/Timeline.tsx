'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import styles from './Timeline.module.css';

const experience = [
    {
        role: "Aplikační tester",
        company: "Technologie hlavního města Prahy",
        period: "05/2024 - Nyní",
        description: "Testování softwaru pro správu a řízení pražského veřejného osvětlení.",
        type: "work"
    },
    {
        role: "Vývojář webové aplikace",
        company: "Technologická agentura České republiky",
        period: "01/2024 - 12/2024",
        description: "Spolupráce ČVUT s TAČR na tvorbě webové aplikace pro vizualizaci letištních dat.",
        type: "work"
    }
];

const education = [
    {
        school: "České vysoké učení technické",
        degree: "Ing. - Interakce člověka s počítačem",
        period: "09/2022 - 02/2025",
        description: "Fakulta elektrotechnická, Otevřená informatika.",
        type: "edu"
    },
    {
        school: "University of Split",
        degree: "Erasmus+ Program",
        period: "09/2023 - 02/2024",
        description: "Fakulty of Electrical Engineering, Mechanical Engineering, and Naval Architecture.",
        type: "edu"
    },
    {
        school: "České vysoké učení technické",
        degree: "Bc. - Otevřená informatika",
        period: "09/2019 - 06/2022",
        description: "Fakulta elektrotechnická. Bakalářská práce: Dema herní fyziky.",
        type: "edu"
    }
];

export default function Timeline() {
    return (
        <section className={styles.timelineSection} id="experience">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>Zkušenosti & Vzdělání</h2>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.columns}>
                    {/* Experience Column */}
                    <div className={styles.column}>
                        <div className={styles.columnHeader}>
                            <Briefcase className={styles.columnIcon} />
                            <h3>Pracovní zkušenosti</h3>
                        </div>
                        <div className={styles.timeline}>
                            {experience.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className={styles.item}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className={styles.period}>
                                        <Calendar size={14} />
                                        <span>{item.period}</span>
                                    </div>
                                    <h4 className={styles.role}>{item.role}</h4>
                                    <h5 className={styles.company}>{item.company}</h5>
                                    <p className={styles.description}>{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Column */}
                    <div className={styles.column}>
                        <div className={styles.columnHeader}>
                            <GraduationCap className={styles.columnIcon} />
                            <h3>Vzdělání</h3>
                        </div>
                        <div className={styles.timeline}>
                            {education.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className={styles.item}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className={styles.period}>
                                        <Calendar size={14} />
                                        <span>{item.period}</span>
                                    </div>
                                    <h4 className={styles.role}>{item.degree}</h4>
                                    <h5 className={styles.company}>{item.school}</h5>
                                    <p className={styles.description}>{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
