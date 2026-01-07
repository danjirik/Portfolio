'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import styles from './Projects.module.css';

const projects = [
    {
        title: "Aplikace SSZ",
        description: "Interní systém pro techniky THMP napojený na Jira API. Zefektivňuje správu světelných signalizačních zařízení.",
        tech: ["React", "Jira API", "Enterprise"],
        link: "#",
        color: "from-blue-600 to-indigo-500"
    },
    {
        title: "Portál hlášení poruch",
        description: "Webová aplikace pro občany k hlášení závad na městském mobiliáři. Obsahuje logiku reportingu pro dispečink.",
        tech: ["Web App", "Integration", "Public Service"],
        link: "#",
        color: "from-orange-500 to-red-400"
    },
    {
        title: "Portfolio fotografa",
        description: "Minimalistický prezentační web na zakázku s důrazem na vizuální prezentaci fotografií.",
        tech: ["Frontend", "Design", "Freelance"],
        link: "#",
        color: "from-purple-500 to-pink-400"
    },
    {
        title: "Dema herní fyziky",
        description: "Webová aplikace pro interaktivní výuku herní fyziky. Umožňuje studentům experimentovat s fyzikálními zákony.",
        tech: ["Simulace", "Education", "Physics"],
        link: "#",
        color: "from-blue-500 to-cyan-400"
    },
    {
        title: "Vizualizace letištních dat",
        description: "Pokročilá webová aplikace pro zobrazení a analýzu časoprostorových letištních dat. Vytvořeno ve spolupráci s ČVUT a TAČR.",
        tech: ["Data Viz", "React", "Map Integration"],
        link: "#",
        color: "from-emerald-500 to-teal-400"
    }
];

export default function Projects() {
    return (
        <section className={styles.projectsSection} id="projects">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.heading}>Vybrané Projekty</h2>
                    <div className={styles.line}></div>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                        >
                            <div className={styles.cardContent}>
                                <div className={`${styles.imagePlaceholder} ${project.color ? styles[project.color] : ''}`}>
                                    {/* Placeholder visuals since we don't have project screenshots yet */}
                                    <div className={styles.overlay}></div>
                                    <h3 className={styles.projectTitleOverlay}>{project.title}</h3>
                                </div>

                                <div className={styles.info}>
                                    <h3 className={styles.title}>{project.title}</h3>
                                    <p className={styles.description}>{project.description}</p>

                                    <div className={styles.techStack}>
                                        {project.tech.map((t, i) => (
                                            <span key={i} className={styles.tag}>{t}</span>
                                        ))}
                                    </div>

                                    <div className={styles.links}>
                                        <a href={project.link} className={styles.link}>
                                            <ExternalLink size={18} />
                                            Odkaz
                                        </a>
                                        {/* Add Github link if available in future */}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
