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
        <section id="coverage">
            <Navbar />
            <Reveal>
                <motion.div 
                variants={variants}
                initial="hidden"
                animate="show"
                className="pt-20 mb-20">
                    <motion.div variants={content} className={`${arimo.className} text-6xl mx-10 mb-20`}>
                        COVERAGE<br/>AREA
                    </motion.div>
                    <div id="row1" className="flex justify-evenly items-center">
                        <motion.div 
                        variants={content} 
                        whileHover={{ scale: 1.05 }}
                        className="duration-200 hover:shadow-lg hover:shadow-orange-300 bg-[#9ca3af] box-border h-16 w-55 p-5 rounded-3xl flex flex-row">
                            <Image
                                src="/web-image.png"
                                width={24}
                                height={24}
                                className="hidden md:block"
                                alt="My Photo"
                            />
                            <div className={`${styles.content} pl-3`}>
                                Web Development
                            </div>
                        </motion.div>
                        <motion.div 
                        variants={content} 
                        whileHover={{ scale: 1.05 }}
                        className="duration-200 hover:shadow-lg hover:shadow-violet-300 bg-[#9ca3af] box-border h-16 w-55 p-5 rounded-3xl flex flex-row">
                            <Image
                                src="/iot-image.png"
                                width={24}
                                height={24}
                                className="hidden md:block"
                                alt="My Photo"
                            />
                            <div className={`${styles.content} pl-3`}>
                                IoT Development
                            </div>
                        </motion.div>
                    </div>
                    <div id="row2" className="flex justify-center items-center mt-10">
                        <motion.div 
                        variants={content} 
                        whileHover={{ scale: 1.05 }}
                        className="duration-200 hover:shadow-lg hover:shadow-lime-300 bg-[#9ca3af] box-border h-16 w-80 p-5 rounded-3xl flex flex-row">
                            <Image
                                src="/ml-image.png"
                                width={24}
                                height={24}
                                className="hidden md:block"
                                alt="My Photo"
                            />
                            <div className={`${styles.content} pl-3`}>
                                Machine Learning Development
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </Reveal>
        </section>
    );
};
