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
const content2 = {
    hidden: {
        opacity: 0,
        x: 30
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1
        }
    }
}

    
export default function Page() {
    const description = [
        "Web applicastion for algorithm and programming practicum purpose as Software Developer",
        "A machine learning model that can detect rock, paper, or scissors hand gesture from the photo that is uploaded",
        "A website used for the series of Daskom Laboratory open recruitment in 2023 as Back End Developer"
    ]
    return (
        <section id="projects">
            <Navbar />
            <Reveal>
                <motion.div 
                variants={variants}
                initial="hidden"
                animate="show"
                className="py-10">
                    <motion.div variants={content} className={`${arimo.className} text-6xl flex justify-center items-center`}>
                        MY PROJECT
                    </motion.div>
                    <div className="flex justify-center items-center mt-20">
                        <motion.div variants={content2} whileHover={{ scale: 1.05 }} className="hover:scale-105 duration-200 hover:shadow-lg hover:shadow-emerald-300 box-border h-80 w-60 p-2 border-2 mx-6 rounded">
                            <a href="https://daskomlab.com/">    
                                <Image
                                    src="/daskomweb.png"
                                    width={300}
                                    height={300}
                                    className="hidden md:block"
                                    alt="My Photo"
                                />
                                <div className={`${styles.content} text-lg`}>
                                    Daskomlab Web App
                                </div>
                                <div className={`${styles.detail} text-sm`}>
                                    {description[0].toUpperCase()}
                                </div>
                            </a>
                        </motion.div>
                        <motion.div variants={content2} whileHover={{ scale: 1.05 }} className="hover:scale-105 duration-200 hover:shadow-lg hover:shadow-cyan-300 box-border h-80 w-60 p-2 border-2 mx-6 rounded">
                            <a href="https://github.com/vincentiusantu/rockpaperscissors-ml-project">
                                <Image
                                    src="/rockpaperscissors.png"
                                    width={300}
                                    height={300}
                                    className="hidden md:block"
                                    alt="My Photo"
                                />
                                <div className={`${styles.content} text-lg`}>
                                    Rock Paper Scissors Recognizer
                                </div>
                                <div className={`${styles.detail} text-sm`}>
                                    {description[1].toUpperCase()}
                                </div>
                            </a>
                        </motion.div>
                        <motion.div variants={content2} whileHover={{ scale: 1.05 }} className="hover:scale-105 duration-200 hover:shadow-lg hover:shadow-fuchsia-300 box-border h-80 w-60 p-2 border-2 mx-6 rounded">
                            <a href="https://daskomrecruitment.site/">
                                <Image
                                    src="/daskomrec23.png"
                                    width={300}
                                    height={300}
                                    className="hidden md:block"
                                    alt="My Photo"
                                />
                                <div className={`${styles.content} text-lg`}>
                                    Daskom Laboratory Open Recruitment Website
                                </div>
                                <div className={`${styles.detail} text-sm`}>
                                    {description[2].toUpperCase()}
                                </div>
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </Reveal>
        </section>
    );
};
