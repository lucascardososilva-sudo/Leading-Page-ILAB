import React from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    delay?: number;
    width?: "fit-content" | "100%";
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, delay = 0, width = "fit-content" }) => {
    return (
        <div style={{ width, overflow: "visible" }}>
            <motion.div
                initial={{ opacity: 0, y: 75 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};
