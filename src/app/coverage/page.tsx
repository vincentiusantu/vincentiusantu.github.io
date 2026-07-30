"use client"
import React, { useState } from "react";
import Image from 'next/image'
import { Reveal } from '@/components/reveal';
import Navbar from "@/components/navbar";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
}
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

const skills = [
    {
        id: "iot",
        label: "IoT Development",
        icon: "/iot-image.png",
        color: "#00d9e0",
        tagline: "Hardware meets software",
        description: "Designing and deploying end-to-end IoT systems — from sensor integration to cloud connectivity. Experienced with data acquisition pipelines, real-time monitoring, and live-event deployments.",
        stack: ["ESP32", "Arduino", "Raspberry Pi", "MQTT", "HTTP", "Jetson"],
        highlights: [
            "IoT photobooth system for live events (Airi Indonesia)",
            "Smart door lock with RFID + face recognition",
            "Sensor integration & embedded device orchestration",
        ]
    },
    {
        id: "embedded",
        label: "Embedded Systems",
        icon: "/iot-image.png",
        color: "#7c6fe0",
        tagline: "Low-level, high-impact",
        description: "Building reliable embedded firmware and hardware systems. Skilled in microcontroller programming, wiring, electronics design, and real-time troubleshooting under demanding conditions.",
        stack: ["C/C++", "Arduino IDE", "ESP32", "Raspberry Pi", "RFID", "Camera Module"],
        highlights: [
            "FMCW radar for contactless vital sign detection",
            "Automated access control with camera + MCU",
            "System testing, wiring, and hardware debugging",
        ]
    },
    {
        id: "cv",
        label: "Computer Vision / ML",
        icon: "/ml-image.png",
        color: "#57c98a",
        tagline: "Making machines see",
        description: "Developing machine learning and computer vision solutions, from classical image processing to deep learning models. Research experience in a dedicated vision laboratory.",
        stack: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Jetson"],
        highlights: [
            "Rock-Paper-Scissors gesture recognizer (CNN model)",
            "Research at Image Processing & Vision Lab",
            "Human vital sign detection via radar signal processing",
        ]
    },
    {
        id: "web",
        label: "Web Development",
        icon: "/web-image.png",
        color: "#f0883e",
        tagline: "Full stack, clean code",
        description: "Building and maintaining web applications for real-world use. Experience spanning front-end interfaces and back-end systems, including digital payment and recruitment platforms.",
        stack: ["Go", "Laravel", "Next.js", "Node.js", "Git"],
        highlights: [
            "Daskomlab web app (algorithm practicum platform)",
            "Daskom open recruitment website (Back End)",
            "Backend integration for Oripay digital payment",
        ]
    },
]

export default function Page() {
    const [active, setActive] = useState<string | null>(null);

    return (
        <section id="coverage" style={{ minHeight: '100vh' }}>
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
                            {'// skills.map(s =&gt; s.detail)'}
                        </div>
                        <h1 style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            lineHeight: 1.1,
                            margin: 0,
                        }}>
                            SKILL <span style={{ color: 'var(--accent-cyan)' }}>AREAS</span>
                        </h1>
                        <p style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.85rem',
                            color: 'var(--text-secondary)',
                            marginTop: '12px',
                        }}>Click any card to see details.</p>
                    </motion.div>

                    {/* Cards Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '16px',
                        marginBottom: '32px',
                    }}>
                        {skills.map((skill) => (
                            <motion.div
                                key={skill.id}
                                variants={fadeUp}
                                onClick={() => setActive(active === skill.id ? null : skill.id)}
                                style={{
                                    background: active === skill.id ? 'var(--bg-card-hover)' : 'var(--bg-card)',
                                    border: `1px solid ${active === skill.id ? skill.color + '60' : 'var(--border-color)'}`,
                                    borderRadius: '12px',
                                    padding: '24px',
                                    cursor: 'pointer',
                                    transition: 'all 0.25s ease',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                                whileHover={{ scale: 1.02, boxShadow: `0 0 24px ${skill.color}25` }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {active === skill.id && (
                                    <div style={{
                                        position: 'absolute', top: 0, left: 0,
                                        width: '100%', height: '3px',
                                        background: skill.color,
                                    }} />
                                )}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                    <div style={{
                                        width: '40px', height: '40px', borderRadius: '50%',
                                        background: skill.color,
                                        boxShadow: active === skill.id ? `0 0 8px ${skill.color}` : 'none',
                                        transition: 'box-shadow 0.3s',
                                        flexShrink: 0,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <Image src={skill.icon} width={28} height={28} alt={skill.label} />
                                    </div>
                                    <div style={{
                                        width: '8px', height: '8px', borderRadius: '50%',
                                        background: skill.color,
                                        boxShadow: active === skill.id ? `0 0 8px ${skill.color}` : 'none',
                                        transition: 'box-shadow 0.3s',
                                        flexShrink: 0,
                                    }} />
                                </div>
                                <div style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    color: active === skill.id ? skill.color : 'var(--text-primary)',
                                    marginBottom: '4px',
                                    transition: 'color 0.2s',
                                }}>{skill.label}</div>
                                <div style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: '0.65rem',
                                    color: 'var(--text-secondary)',
                                    letterSpacing: '0.05em',
                                }}>{skill.tagline}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Detail Panel */}
                    <AnimatePresence mode="wait">
                        {active && (() => {
                            const skill = skills.find(s => s.id === active)!;
                            return (
                                <motion.div
                                    key={active}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                    style={{
                                        background: 'var(--bg-card)',
                                        border: `1px solid ${skill.color}40`,
                                        borderRadius: '12px',
                                        padding: '28px 32px',
                                        position: 'relative',
                                        overflow: 'hidden',
                                    }}
                                >
                                    <div style={{
                                        position: 'absolute', top: 0, left: 0,
                                        width: '3px', height: '100%',
                                        background: skill.color,
                                    }} />

                                    {/* Title */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                        <div style={{
                                        width: '40px', height: '40px', borderRadius: '50%',
                                        background: skill.color,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <Image src={skill.icon} width={28} height={28} alt={skill.label} />
                                    </div>
                                        <div>
                                            <div style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontWeight: 700,
                                                fontSize: '1.1rem',
                                                color: skill.color,
                                            }}>{skill.label}</div>
                                            <div style={{
                                                fontFamily: "'JetBrains Mono', monospace",
                                                fontSize: '0.65rem',
                                                color: 'var(--text-muted)',
                                            }}>{skill.tagline}</div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: '0.9rem',
                                        color: 'var(--text-secondary)',
                                        lineHeight: 1.75,
                                        marginBottom: '20px',
                                    }}>{skill.description}</p>

                                    {/* Two columns: highlights + stack */}
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="detail-grid">
                                        <div>
                                            <div style={{
                                                fontFamily: "'JetBrains Mono', monospace",
                                                fontSize: '0.65rem',
                                                color: 'var(--text-muted)',
                                                letterSpacing: '0.1em',
                                                marginBottom: '10px',
                                            }}>{'// highlights'}</div>
                                            <ul style={{ margin: 0, paddingLeft: '16px' }}>
                                                {skill.highlights.map((h, i) => (
                                                    <li key={i} style={{
                                                        fontFamily: "'Inter', sans-serif",
                                                        fontSize: '0.8rem',
                                                        color: 'var(--text-secondary)',
                                                        lineHeight: 1.7,
                                                        marginBottom: '4px',
                                                    }}>{h}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <div style={{
                                                fontFamily: "'JetBrains Mono', monospace",
                                                fontSize: '0.65rem',
                                                color: 'var(--text-muted)',
                                                letterSpacing: '0.1em',
                                                marginBottom: '10px',
                                            }}>{'// stack'}</div>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                                {skill.stack.map((tech) => (
                                                    <span key={tech} style={{
                                                        fontFamily: "'JetBrains Mono', monospace",
                                                        fontSize: '0.7rem',
                                                        color: skill.color,
                                                        background: `${skill.color}15`,
                                                        border: `1px solid ${skill.color}35`,
                                                        borderRadius: '4px',
                                                        padding: '3px 10px',
                                                    }}>{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })()}
                    </AnimatePresence>
                </motion.div>
            </Reveal>
        </section>
    );
}