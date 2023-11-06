"use client"

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface Props {
    children?: ReactNode
}

export const Reveal = ({ children, ...props }: Props) =>  (
    <>
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{duration:0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    </>
);