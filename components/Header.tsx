'use client';

import styles from './Header.module.css';
import { useState, useEffect } from 'react';

const navLinks = [
    { label: 'Domů', href: '#hero' },
    { label: 'O mně', href: '#about' },
    { label: 'Dovednosti', href: '#skills' },
    { label: 'Zkušenosti', href: '#timeline' },
    { label: 'Projekty', href: '#projects' },
    { label: 'Kontakt', href: '#contact' },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Determine active section based on scroll position
            const sections = navLinks.map(link => link.href.slice(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.slice(1);
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <a href="#hero" className={styles.logo} onClick={(e) => handleNavClick(e, '#hero')}>
                    <span className={styles.logoText}>DJ</span>
                </a>

                <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`${styles.navLink} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <button
                    className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
}
