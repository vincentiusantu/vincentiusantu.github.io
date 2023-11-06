"use client"
import React from "react";
import styles from '@/app/ui/home.module.css'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import { arimo } from '@/app/ui/fonts'
import { Reveal } from '@/components/reveal';
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

export default function Home() {
    return (
        <section id="home">
            <div>
                <Reveal>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.div variants={content} className={`${styles.hi_there} text-8xl flex justify-center items-center`}>
                            HI THERE!!!
                        </motion.div>
                        <motion.div variants={content} className="my-5 flex justify-center items-center">
                            <div className="relative">
                                <Image
                                    src="/CEN.jpg"
                                    width={300}
                                    height={300}
                                    className="transition-transform duration-300 transform"
                                    alt="My Photo"
                                />
                                <Image
                                    src="/CEN2.jpg"
                                    width={300}
                                    height={300}
                                    className="absolute top-0 left-0 opacity-0 transition-opacity duration-300 transform hover:opacity-100"
                                    alt="My Photo"
                                />
                            </div>
                        </motion.div>
                        <motion.div variants={content} className={`${styles.content} text-5xl flex justify-center items-center`}>
                            I'm Vincentius Adisurya Fransisco Antu
                        </motion.div>
                    </motion.div>
                </Reveal>
                <div className={`${arimo.className} my-5 text-lg flex justify-center items-center`}>
                    <Typewriter
                        options={{
                            strings: [
                                'AI Enthusiast',
                                'IoT Enthusiast',
                                'Software Developer'
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 20
                        }}
                    />
                </div>
            </div>
        </section>
    );
};
