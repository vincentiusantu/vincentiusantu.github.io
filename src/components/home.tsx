"use client"
import React from "react";
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import { Reveal } from '@/components/reveal';
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.25 }
    }
}

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

export default function Home() {
    return (
        <section id="home" style={{ minHeight: 'calc(100vh - 60px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Reveal>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="show"
                    style={{ textAlign: 'center', padding: '40px 20px' }}
                >
                    {/* Greeting tag */}
                    <motion.div variants={item} style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.8rem',
                        color: 'var(--accent-cyan)',
                        letterSpacing: '0.15em',
                        marginBottom: '20px',
                    }}>
                        {' // Hello, World!'}
                    </motion.div>

                    {/* Name */}
                    <motion.div variants={item} style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 'clamp(2rem, 6vw, 4.5rem)',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        lineHeight: 1.1,
                        marginBottom: '8px',
                    }}>
                        HI, I&apos;M <span style={{ color: 'var(--accent-cyan)' }}>ICEN</span>
                    </motion.div>

                    <motion.div variants={item} style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 'clamp(0.85rem, 2vw, 1rem)',
                        color: 'var(--text-secondary)',
                        marginBottom: '36px',
                        letterSpacing: '0.03em',
                    }}>
                        Vincentius Adisurya Fransisco Antu
                    </motion.div>

                    {/* Photo */}
                    <motion.div variants={item} style={{ display: 'flex', justifyContent: 'center', marginBottom: '36px' }}>
                        <div style={{
                            position: 'relative',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            border: '1px solid rgba(0, 217, 224, 0.25)',
                            boxShadow: '0 0 40px rgba(0, 217, 224, 0.1)',
                        }}>
                            <Image src="/CEN.jpg" width={220} height={220} alt="Vincentius" style={{ display: 'block' }} />
                            <Image
                                src="/CEN2.jpg"
                                width={220}
                                height={220}
                                alt="Vincentius"
                                style={{
                                    position: 'absolute', top: 0, left: 0,
                                    opacity: 0, transition: 'opacity 0.3s ease',
                                }}
                                className="hover-photo"
                                onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
                                onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '0'}
                            />
                        </div>
                    </motion.div>

                    {/* Typewriter */}
                    <motion.div variants={item} style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 'clamp(1rem, 3vw, 1.4rem)',
                        color: 'var(--accent-cyan)',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '8px',
                        alignItems: 'center',
                    }}>
                        <span style={{ color: 'var(--text-muted)' }}>&gt;</span>
                        <Typewriter
                            options={{
                                strings: [
                                    'IoT Engineer',
                                    'Embedded Systems',
                                    'Computer Vision',
                                    'Software Developer',
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 25,
                            }}
                        />
                    </motion.div>
                </motion.div>
            </Reveal>
        </section>
    );
}