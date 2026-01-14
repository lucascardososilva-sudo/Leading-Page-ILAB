import React from 'react';
import { motion } from 'framer-motion';

interface InfiniteMarqueeProps {
    children: React.ReactNode;
    direction?: 'left' | 'right';
    speed?: number;
}

export const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
    children,
    direction = 'left',
    speed = 20
}) => {
    return (
        <div className="overflow-hidden whitespace-nowrap relative flex">
            <motion.div
                className="flex min-w-full shrink-0 gap-8 items-center py-4 px-4"
                animate={{
                    x: direction === 'left' ? ['0%', '-100%'] : ['-100%', '0%'],
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {children}
                {children}
                {children}
                {/* Repeating children multiple times to ensure fill */}
            </motion.div>
            <motion.div
                className="flex min-w-full shrink-0 gap-8 items-center py-4 px-4"
                animate={{
                    x: direction === 'left' ? ['0%', '-100%'] : ['-100%', '0%'],
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {children}
                {children}
                {children}
            </motion.div>
        </div>
    );
};
