"use client"
import React from "react";
import { arimo } from '@/app/ui/fonts'
import styles from '@/app/ui/home.module.css'
import { Reveal } from '@/components/reveal';
import Navbar from "../../components/navbar";
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
        <section id="about">
            <Navbar />
            <Reveal>
                <motion.div
                variants={variants}
                initial="hidden"
                animate="show"
                 className="pt-10 sm:pt-20 mb-10"
                 >
                    <motion.div variants={content} className={`${arimo.className} text-3xl sm:text-6xl flex justify-center items-center`}>
                        A LITTLE
                    </motion.div>
                    <motion.div variants={content} className={`${arimo.className} text-3xl sm:text-6xl flex justify-center items-center`}>
                        ABOUT ME
                    </motion.div>
                    <motion.div variants={content} className={`${styles.line}`}></motion.div>
                    <motion.div variants={content} className="text-center text-md sm:text-xl box-border h-100 w-100 p-10 sm:p-20 flex justify-center items-center">
                        <motion.div variants={content} className={`${styles.content}`}>
                            <strong>Lifelong Learner</strong>, that's how I describe myself. Have an interest in learning things. Since I graduated from high school, I've had an interest in programming. Currently, I'm deepening <b>Software Engineering</b>, <b>Internet of Things</b>, and <b>Machine Learning</b>. Maybe there will be interesting things in my life in the future, but who knows? Let's keep going. See ya!!!
                        </motion.div>
                    </motion.div>
                </motion.div>
            </Reveal>
        </section>
    );
};
