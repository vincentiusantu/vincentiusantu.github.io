"use client"
import React from "react";
import { Reveal } from '@/components/reveal';
import Navbar from "../../components/navbar";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.18 } }
}

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

const experiences = [
    {
        role: "IoT Engineer Intern",
        company: "Airi Indonesia",
        period: "Nov 2025 – May 2026",
        color: "#00d9e0",
        points: [
            "Developed and deployed IoT-based photobooth system for live events",
            "Integrated sensors & embedded devices for high-load system reliability",
            "Contributed to backend logic for Oripay digital payment system",
        ]
    },
    {
        role: "Research Assistant",
        company: "Image Processing & Vision Lab",
        period: "Aug 2024 – Aug 2025",
        color: "#7c6fe0",
        points: [
            "Research in image processing and machine learning scope",
            "FMCW radar for contactless heart rate & respiratory rate monitoring",
        ]
    },
    {
        role: "Research Intern",
        company: "CoE Intelligent Sensing-IoT",
        period: "Jun 2024 – Aug 2024",
        color: "#57c98a",
        points: [
            "Designed a smart door lock with RFID and face recognition",
            "Integrated microcontroller with camera module for access control",
        ]
    },
    {
        role: "Practicum Assistant",
        company: "Basic Computing Laboratory",
        period: "Jul 2022 – Jul 2024",
        color: "#f0883e",
        points: [
            "Taught Algorithm & Programming to first-year students",
            "Created assignments and managed student grading",
        ]
    },
]

export default function Page() {
    return (
        <section id="about" style={{ minHeight: '100vh' }}>
            <Navbar />
            <Reveal>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="show"
                    style={{ padding: '60px 24px 80px', maxWidth: '900px', margin: '0 auto' }}
                >
                    {/* Header */}
                    <motion.div variants={fadeUp} style={{ marginBottom: '48px' }}>
                        <div style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.75rem',
                            color: 'var(--accent-cyan)',
                            letterSpacing: '0.15em',
                            marginBottom: '8px',
                        }}>
                            {'// about_me.ts'}
                        </div>
                        <h1 style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            lineHeight: 1.1,
                            margin: 0,
                        }}>
                            A LITTLE <span style={{ color: 'var(--accent-cyan)' }}>ABOUT</span> ME
                        </h1>
                    </motion.div>

                    {/* Bio Card */}
                    <motion.div variants={fadeUp} style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '12px',
                        padding: '28px 32px',
                        marginBottom: '48px',
                        position: 'relative',
                        overflow: 'hidden',
                    }}>
                        <div style={{
                            position: 'absolute', top: 0, left: 0,
                            width: '3px', height: '100%',
                            background: 'var(--accent-cyan)',
                        }} />
                        <div style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.7rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '12px',
                        }}>
                            const bio = &#123;
                        </div>
                        <p style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '1rem',
                            color: 'var(--text-primary)',
                            lineHeight: 1.8,
                            margin: '0 0 12px 16px',
                        }}>
                            <strong style={{ color: 'var(--accent-cyan)' }}>Lifelong Learner</strong> — Fresh Graduate in Electronics Engineering from Telkom University
                            with a strong foundation in <strong>IoT</strong>, <strong>Web Development</strong>, and <strong>Computer Vision</strong>.
                            Experienced in designing embedded systems using microcontrollers, integrating sensors,
                            and building intelligent systems that bridge hardware and software.
                        </p>
                        <div style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.7rem',
                            color: 'var(--text-secondary)',
                            marginTop: '4px',
                        }}>
                            &#125;
                        </div>
                    </motion.div>

                    {/* Stats Row */}
                    {/* <motion.div variants={fadeUp} style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                        gap: '16px',
                        marginBottom: '48px',
                    }}>
                        {[
                            { label: 'GPA', value: '3.82', sub: '/ 4.00' },
                            { label: 'Degree', value: 'S.T.', sub: 'Electronics Eng.' },
                            { label: 'University', value: 'Telkom', sub: 'University' },
                            { label: 'Based In', value: 'Bandung', sub: 'Indonesia' },
                        ].map((stat) => (
                            <div key={stat.label} style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '8px',
                                padding: '20px',
                                textAlign: 'center',
                            }}>
                                <div style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: '1.6rem',
                                    fontWeight: 700,
                                    color: 'var(--accent-cyan)',
                                }}>{stat.value}</div>
                                <div style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: '0.7rem',
                                    color: 'var(--text-secondary)',
                                    marginTop: '2px',
                                }}>{stat.sub}</div>
                                <div style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: '0.65rem',
                                    color: 'var(--text-muted)',
                                    marginTop: '4px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                }}>{stat.label}</div>
                            </div>
                        ))}
                    </motion.div> */}

                    {/* Experience Timeline */}
                    <motion.div variants={fadeUp}>
                        <div style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.75rem',
                            color: 'var(--accent-cyan)',
                            letterSpacing: '0.15em',
                            marginBottom: '24px',
                        }}>
                            {'// work_experience[]'}
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {experiences.map((exp, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeUp}
                                    style={{
                                        background: 'var(--bg-card)',
                                        border: '1px solid var(--border-color)',
                                        borderRadius: '10px',
                                        padding: '20px 24px',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                                    }}
                                    whileHover={{
                                        boxShadow: `0 0 20px ${exp.color}20`,
                                    }}
                                >
                                    <div style={{
                                        position: 'absolute', top: 0, left: 0,
                                        width: '3px', height: '100%',
                                        background: exp.color,
                                    }} />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4px', marginBottom: '10px' }}>
                                        <div>
                                            <div style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontWeight: 600,
                                                fontSize: '0.95rem',
                                                color: 'var(--text-primary)',
                                            }}>{exp.role}</div>
                                            <div style={{
                                                fontFamily: "'JetBrains Mono', monospace",
                                                fontSize: '0.75rem',
                                                color: exp.color,
                                                marginTop: '2px',
                                            }}>{exp.company}</div>
                                        </div>
                                        <div style={{
                                            fontFamily: "'JetBrains Mono', monospace",
                                            fontSize: '0.65rem',
                                            color: 'var(--text-muted)',
                                            whiteSpace: 'nowrap',
                                        }}>{exp.period}</div>
                                    </div>
                                    <ul style={{ margin: 0, paddingLeft: '16px' }}>
                                        {exp.points.map((pt, j) => (
                                            <li key={j} style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontSize: '0.82rem',
                                                color: 'var(--text-secondary)',
                                                lineHeight: 1.7,
                                                marginBottom: '2px',
                                            }}>{pt}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </Reveal>
        </section>
    );
}