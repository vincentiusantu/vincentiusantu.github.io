"use client"
import React from "react";
import { arimo } from '@/app/ui/fonts'
import styles from '@/app/ui/home.module.css'
import Image from 'next/image'
import { Reveal } from '@/components/reveal';
import Navbar from "@/components/navbar";
import { motion, AnimatePresence } from "framer-motion";


const variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
}

const content = {
    hidden: {
        opacity: 0,
        y: 30
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}

export default function Page() {
    return (
        <section id="contacts">
            <Navbar />
            <Reveal>
                <div className="h-96">
                    <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="show"
                    className="h-full flex justify-around items-center">
                        <motion.div variants={content}>
                            <div className={`${arimo.className} text-6xl`}>
                                WORK<br />WITH ME
                            </div>
                        </motion.div>
                        <div>
                            <motion.div variants={content} className={`${styles.content}`}>
                                Vincentius Adisurya Fransisco Antu
                            </motion.div>
                            <div className="flex justify-between items-center">
                                <motion.a 
                                variants={content} 
                                whileHover={{ scale: 1.05 }} 
                                href="https://www.linkedin.com/in/vincentiusantu/" className="hover:scale-105 duration-200">
                                    <Image
                                        src="/linkedin-icon.png"
                                        width={75}
                                        height={75}
                                        className="hidden md:block"
                                        alt="LinkedIn"
                                    />
                                </motion.a>
                                <motion.a 
                                variants={content} 
                                whileHover={{ scale: 1.05 }} 
                                href="https://github.com/vincentiusantu" className="hover:scale-105 duration-200">
                                    <Image
                                        src="/github-icon.png"
                                        width={75}
                                        height={75}
                                        className="hidden md:block"
                                        alt="Github"
                                    />
                                </motion.a>
                                <motion.a 
                                variants={content} 
                                whileHover={{ scale: 1.05 }} 
                                href="mailto:vincentiusantu@gmail.com" className="hover:scale-105 duration-200">
                                    <Image
                                        src="/gmail-icon.png"
                                        width={75}
                                        height={75}
                                        className="hidden md:block"
                                        alt="Email"
                                    />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Reveal>
        </section>
    );
};
