import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false }) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' } : undefined}
            className={`
        bg-white/10 backdrop-blur-lg border border-white/20 
        rounded-2xl shadow-lg relative overflow-hidden
        ${className}
      `}
        >
            {/* Subtle shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};
