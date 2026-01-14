import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './GlassCard';

interface BentoGridProps {
    children: React.ReactNode;
    className?: string;
}

interface BentoItemProps {
    children: React.ReactNode;
    className?: string;
    cols?: 1 | 2 | 3;
    rows?: 1 | 2;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ children, className = '' }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)] ${className}`}>
            {children}
        </div>
    );
};

export const BentoItem: React.FC<BentoItemProps> = ({
    children,
    className = '',
    cols = 1,
    rows = 1
}) => {
    const colSpan = {
        1: 'md:col-span-1',
        2: 'md:col-span-2',
        3: 'md:col-span-3',
    }[cols];

    const rowSpan = {
        1: 'md:row-span-1',
        2: 'md:row-span-2',
    }[rows];

    return (
        <motion.div
            className={`${colSpan} ${rowSpan} h-full`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <GlassCard className={`h-full p-6 flex flex-col ${className}`} hoverEffect={true}>
                {children}
            </GlassCard>
        </motion.div>
    );
};
