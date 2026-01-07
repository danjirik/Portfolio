'use client';

import React from 'react';

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
    const [activeTab, setActiveTab] = React.useState(0);

    return (
        <section className={styles.skillsSection} id="skills">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>Dovednosti</h2>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.tabsContainer}>
                    <div className={styles.tabList}>
                        {skillsData.map((category, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveTab(idx)}
                                className={`${styles.tabButton} ${activeTab === idx ? styles.activeTab : ''}`}
                            >
                                <span className={styles.tabIcon}>{category.icon}</span>
                                <span className={styles.tabLabel}>{category.category}</span>
                            </button>
                        ))}
                    </div>

                    <div className={styles.tabContent}>
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className={styles.skillGrid}
                        >
                            {skillsData[activeTab].items.map((skill, idx) => (
                                <div key={idx} className={styles.skillTag}>
                                    {skill}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
