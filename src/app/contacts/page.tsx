"use client"
import React from "react";
import Image from 'next/image'
import { Reveal } from '@/components/reveal';
import Navbar from "@/components/navbar";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.18 } }
}
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

const contacts = [
    {
        label: "LinkedIn",
        value: "vincentiusantu",
        icon: "/linkedin-icon.png",
        href: "https://www.linkedin.com/in/vincentiusantu/",
        color: "#0a66c2",
        // black icon → LinkedIn blue
        filter: "brightness(0) saturate(100%) invert(27%) sepia(90%) saturate(1200%) hue-rotate(196deg) brightness(95%)",
    },
    {
        label: "GitHub",
        value: "vincentiusantu",
        icon: "/github-icon.png",
        href: "https://github.com/vincentiusantu",
        color: "#e6edf3",
        // black icon → white
        filter: "brightness(0) invert(1)",
    },
    {
        label: "Email",
        value: "vincentiusantu@gmail.com",
        icon: "/gmail-icon.png",
        href: "mailto:vincentiusantu@gmail.com",
        color: "#ea4335",
        // black icon → Gmail red
        filter: "brightness(0) saturate(100%) invert(27%) sepia(90%) saturate(1500%) hue-rotate(340deg) brightness(100%)",
    },
]

export default function Page() {
    return (
        <section id="contacts" style={{ minHeight: '100vh' }}>
            <Navbar />
            <Reveal>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="show"
                    style={{ padding: '60px 24px 80px', maxWidth: '700px', margin: '0 auto' }}
                >
                    <motion.div variants={fadeUp} style={{ marginBottom: '48px' }}>
                        <div style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.75rem',
                            color: 'var(--accent-cyan)',
                            letterSpacing: '0.15em',
                            marginBottom: '8px',
                        }}>
                            {'// contact.init()'}
                        </div>
                        <h1 style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 700,
                            color: 'var(--text-primary)',
                            lineHeight: 1.1,
                            margin: '0 0 16px',
                        }}>
                            WORK <span style={{ color: 'var(--accent-cyan)' }}>WITH ME</span>
                        </h1>
                        <p style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.9rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.7,
                        }}>
                            Open to collaborations, internships, and new opportunities in IoT, Embedded Systems, and Computer Vision. Feel free to reach out.
                        </p>
                    </motion.div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {contacts.map((c) => (
                            <motion.a
                                key={c.label}
                                href={c.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={fadeUp}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    background: 'var(--bg-card)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '10px',
                                    padding: '18px 24px',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s ease',
                                }}
                                whileHover={{
                                    boxShadow: `0 0 20px ${c.color}25`,
                                    borderColor: `${c.color}60`,
                                    x: 4,
                                }}
                            >
                                {/* Icon with brand color */}
                                <div style={{
                                    width: '42px',
                                    height: '42px',
                                    borderRadius: '8px',
                                    background: `${c.color}18`,
                                    border: `1px solid ${c.color}35`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}>
                                    <Image
                                        src={c.icon}
                                        width={22}
                                        height={22}
                                        alt={c.label}
                                        style={{ filter: c.filter }}
                                    />
                                </div>

                                <div style={{ flex: 1 }}>
                                    <div style={{
                                        fontFamily: "'JetBrains Mono', monospace",
                                        fontSize: '0.62rem',
                                        color: c.color,
                                        letterSpacing: '0.12em',
                                        textTransform: 'uppercase',
                                        marginBottom: '3px',
                                    }}>{c.label}</div>
                                    <div style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: '0.9rem',
                                        fontWeight: 500,
                                        color: 'var(--text-primary)',
                                    }}>{c.value}</div>
                                </div>

                                <div style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    fontSize: '0.9rem',
                                    color: 'var(--text-muted)',
                                    transition: 'color 0.2s',
                                }}>→</div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </Reveal>
        </section>
    );
}