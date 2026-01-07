'use client';

import { motion } from 'framer-motion';
import { Code, Database, Layout, PenTool, Terminal, TestTube } from 'lucide-react';
import styles from './Skills.module.css';

const skillsData = [
    {
        category: "Jazyky",
        icon: <Terminal size={24} />,
        items: ["JavaScript / TypeScript", "Python", "Java", "C++", "PHP"]
    },
    {
        category: "Frontend & Web",
        icon: <Layout size={24} />,
        items: ["React", "Next.js", "HTML5 & CSS3", "Tailwind / Vanilla CSS", "Framer Motion"]
    },
    {
        category: "Backend & Data",
        icon: <Database size={24} />,
        items: ["SQL", "MySQL", "REST API", "Git", "Node.js"]
    },
    {
        category: "Creative & Design",
        icon: <PenTool size={24} />,
        items: ["UX / UI Design", "Blender 3D", "Unity Engine", "Figma", "User-Centered Design"]
    },
    {
        category: "QA & Testing",
        icon: <TestTube size={24} />,
        items: ["Manual Testing", "Automated Testing", "Bug Reporting", "Jira", "Performance Testing"]
    }
];

export default function Skills() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className={styles.skillsSection} id="skills">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>Dovednosti</h2>
                    <div className={styles.line}></div>
                </div>

                <motion.div
                    className={styles.grid}
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {skillsData.map((category, idx) => (
                        <motion.div key={idx} variants={item} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>{category.icon}</div>
                                <h3 className={styles.categoryTitle}>{category.category}</h3>
                            </div>
                            <ul className={styles.skillList}>
                                {category.items.map((skill, sIdx) => (
                                    <li key={sIdx} className={styles.skillItem}>{skill}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
