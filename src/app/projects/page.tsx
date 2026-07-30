"use client"
import React from "react";
import Image from 'next/image'
import { Reveal } from '@/components/reveal';
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
}
const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

const projects = [
    {
        title: "Automatic Air Control System",
        image: "/aacs.png",
        description: "A prototype room condition controller based on temperature and humidity sensors, integrated with fuzzy logic to determine optimal fan speed automatically.",
        tags: ["IoT", "Embedded Systems", "Fuzzy Logic", "C/C++", "Sensors"],
        color: "#00d9e0",
    },
    {
        title: "Daskom Recruitment Website",
        image: "/daskomrec23.png",
        description: "Website for the Daskom Laboratory open recruitment series in 2023. Contributed as Back End Developer, handling server-side logic and system integration.",
        tags: ["Web Dev", "Back End", "Go"],
        color: "#7c6fe0",
    },
    {
        title: "RFID & Camera Access Control",
        image: "/smart-door.png",
        description: "A room access control prototype built with RFID card authentication and face recognition. Integrates a microcontroller with a camera module for automated and secure access management.",
        tags: ["IoT", "Embedded Systems", "Computer Vision", "Python", "ESP32"],
        color: "#57c98a",
    },
    {
        title: "SIM-Antri",
        image: "/antrian.png",
        description: "A digital queue management system that optimizes patient flow in hospitals by automating registration, scheduling, and real-time queue tracking to minimize waiting times and enhance service efficiency.",
        tags: ["Web Dev", "Full Stack", "Laravel", "Hospital Management", "Queue System"],
        color: "#00d9e0",
    },
    {
        title: "Automatic Feeder for Catfish Cultivation",
        image: "/lele.png",
        description: "An automated feeder system for catfish farming, controlled by time input, fish count, and average weight of catfish per pond — enabling precise and efficient feeding management.",
        tags: ["IoT", "Embedded Systems", "Arduino", "Sensors"],
        color: "#f0883e",
    },
    {
        title: "Comfort Zone",
        image: "/comfortzone.png",
        description: "A student-counselor chat platform that enables safe, confidential communication for students to share personal or academic concerns with school guidance counselors.",
        tags: ["Web Dev", "Full Stack", "Laravel", "Guidance Counseling", "Chat Application"],
        color: "#e06c75",
    },
    {
        title: "Human Vital Sign Detection via Radar",
        image: "/radar.png",
        description: "A contactless human vital sign detector measuring heart rate and respiratory rate using FMCW Radar combined with a Denoising Autoencoder algorithm for signal processing.",
        tags: ["Machine Learning", "Signal Processing", "Python", "TensorFlow", "FMCW Radar"],
        color: "#e06c75",
    },
    {
        title: "Futu.booth",
        image: "/futu.png",
        description: "A self-service photobooth device integrated with a camera and payment service, allowing users to independently capture and purchase photos without manual operator assistance.",
        tags: ["IoT", "Embedded Systems", "Python", "Payment Integration"],
        color: "#00d9e0",
    },
    {
        title: "Oripay",
        image: "/oripay.png",
        description: "A fintech application that simplifies inter-wallet transfers and various payment transactions, providing a seamless and unified digital payment experience.",
        tags: ["Web Dev", "Full Stack", "Fintech", "Go", "System Integration"],
        color: "#7c6fe0",
    },
]

export default function Page() {
    return (
        <section id="projects" style={{ minHeight: '100vh' }}>
            <Navbar />
            <Reveal>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="show"
                    style={{ padding: '60px 24px 80px', maxWidth: '1100px', margin: '0 auto' }}
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
                            {'// projects.filter(p =&gt; p.shipped)'}
                        </div>
                        <h1 style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            lineHeight: 1.1,
                            margin: 0,
                        }}>
                            MY <span style={{ color: 'var(--accent-cyan)' }}>PROJECTS</span>
                        </h1>
                    </motion.div>

                    {/* Pinterest-style masonry grid */}
                    <div style={{
                        columns: '3 280px',
                        columnGap: '16px',
                    }}>
                        {projects.map((project, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                style={{
                                    breakInside: 'avoid',
                                    marginBottom: '16px',
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '12px',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'border-color 0.2s ease',
                                }}
                                whileHover={{
                                    boxShadow: `0 4px 32px ${project.color}22`,
                                    borderColor: `${project.color}50`,
                                }}
                            >
                                {/* Image */}
                                <div style={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    background: '#0a0e17',
                                }}>
                                    <Image
                                        src={project.image}
                                        width={400}
                                        height={220}
                                        alt={project.title}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            display: 'block',
                                        }}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0, left: 0,
                                        width: '100%', height: '2px',
                                        background: project.color,
                                    }} />
                                </div>

                                {/* Content */}
                                <div style={{ padding: '18px 20px' }}>
                                    <div style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontWeight: 700,
                                        fontSize: '0.92rem',
                                        color: 'var(--text-primary)',
                                        marginBottom: '8px',
                                        lineHeight: 1.4,
                                    }}>{project.title}</div>

                                    <p style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: '0.78rem',
                                        color: 'var(--text-secondary)',
                                        lineHeight: 1.7,
                                        margin: '0 0 14px',
                                    }}>{project.description}</p>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                        {project.tags.map((tag) => (
                                            <span key={tag} style={{
                                                fontFamily: "'JetBrains Mono', monospace",
                                                fontSize: '0.6rem',
                                                color: project.color,
                                                background: `${project.color}12`,
                                                border: `1px solid ${project.color}30`,
                                                borderRadius: '4px',
                                                padding: '2px 8px',
                                            }}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Reveal>
        </section>
    );
}