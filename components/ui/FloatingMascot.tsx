import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FloatingMascotProps {
    imageSrc?: string;
}

const FAQ_CONTENT = [
    {
        question: "O que é o Laboratório?",
        answer: "Não somos um grupo de estudos, mas um ecossistema de conexão com o mercado. Funcionamos com squads que operam como pequenas startups para resolver problemas reais de parceiros institucionais usando tecnologias 4IR."
    },
    {
        question: "O que são os Squads?",
        answer: "Equipes interdisciplinares que prototipam soluções funcionais. Nossos squads saem 'alfabetizados' em tecnologia e negócios, usando ferramentas como Agentes de IA e 'Vibe Coding' para validar ideias sem focar apenas em código."
    },
    {
        question: "O que é ensinado no Módulo 1?",
        answer: "Fundamentos de Direito 4.0, Design Thinking, Tecnologias (Blockchain, Cloud), Cibersegurança, Modelos de Negócios do Vale do Silício e introdução à programação."
    },
    {
        question: "Como funciona o Módulo 2?",
        answer: "Os squads se dividem em trilhas práticas: Tecnologia (UX/Engenharia IA), Negócios (Venture Capital/Produto) e Polinização (Mentoria Interdisciplinar obrigatória)."
    },
    {
        question: "Qual o foco tecnológico?",
        answer: "A tese atual foca em Agentes de IA (Vertical AI) e novas IDEs (como LangGraph) para prototipagem rápida e funcional sob o verniz da Cloud."
    }
];

export const FloatingMascot: React.FC<FloatingMascotProps> = ({
    imageSrc = '/robin-hood-fox.png'
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);
    const [showTooltip, setShowTooltip] = useState(false);
    const mascotRef = useRef<HTMLDivElement>(null);

    // Scroll progress for scroll-based reactions
    const { scrollYProgress } = useScroll();

    // Smooth spring animations for mouse tracking
    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
    const rotateX = useSpring(0, springConfig);
    const rotateY = useSpring(0, springConfig);

    // Track mouse movement globally
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!mascotRef.current) return;

            const rect = mascotRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculate rotation based on mouse distance from mascot
            const deltaX = (e.clientX - centerX) / window.innerWidth;
            const deltaY = (e.clientY - centerY) / window.innerHeight;

            // Max rotation of 25 degrees
            rotateY.set(deltaX * 25);
            rotateX.set(-deltaY * 15);

            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [rotateX, rotateY]);

    // Eye tracking calculation
    const getEyeTransform = () => {
        if (!mascotRef.current) return { x: 0, y: 0 };

        const rect = mascotRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (mousePosition.x - centerX) / 100;
        const deltaY = (mousePosition.y - centerY) / 100;

        return {
            x: Math.max(-3, Math.min(3, deltaX)),
            y: Math.max(-3, Math.min(3, deltaY))
        };
    };

    const eyeOffset = getEyeTransform();

    // Toggle FAQ
    const toggleOpen = () => {
        setIsOpen(!isOpen);
        setShowTooltip(false);
    };

    // Show initial tooltip after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen) setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 5000);
        }, 3000);
        return () => clearTimeout(timer);
    }, [isOpen]);

    return (
        <>
            {/* Modal Overlay / FAQ Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-32 right-6 md:right-10 w-[90vw] md:w-[400px] bg-white/90 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl overflow-hidden z-[60] flex flex-col font-sans h-[500px]"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-fox-500 to-orange-400 p-6 text-white flex justify-between items-start shrink-0">
                            <div>
                                <h3 className="text-xl font-bold">SanFran InovaLab Assistant</h3>
                                <p className="text-fox-100 text-xs mt-1">Perguntas Frequentes & Tese</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content Scrollable */}
                        <div className="flex-grow overflow-y-auto p-4 custom-scrollbar">
                            <div className="flex flex-col gap-3">
                                {FAQ_CONTENT.map((item, idx) => {
                                    const isActive = openQuestionIndex === idx;
                                    return (
                                        <div
                                            key={idx}
                                            className={`border rounded-xl transition-all duration-300 ${isActive ? 'border-fox-200 bg-fox-50/50' : 'border-gray-100 bg-white hover:border-fox-100'}`}
                                        >
                                            <button
                                                onClick={() => setOpenQuestionIndex(isActive ? null : idx)}
                                                className="w-full p-4 flex justify-between items-center text-left gap-4"
                                            >
                                                <span className={`font-medium text-sm ${isActive ? 'text-fox-600' : 'text-navy-800'}`}>
                                                    {item.question}
                                                </span>
                                                {isActive ? <ChevronUp size={16} className="text-fox-500 shrink-0" /> : <ChevronDown size={16} className="text-gray-400 shrink-0" />}
                                            </button>
                                            <AnimatePresence>
                                                {isActive && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-fox-100 pt-3">
                                                            {item.answer}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Footer/Contact */}
                            <div className="mt-6 p-4 bg-navy-50 rounded-xl border border-navy-100 text-center">
                                <p className="text-xs text-gray-500 mb-2">Ainda com dúvidas?</p>
                                <a href="mailto:contact@sanfranlab.com" className="text-sm font-bold text-navy-800 hover:text-fox-500 transition-colors">
                                    Fale com um humano &rarr;
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mascot Button */}
            <div className="fixed bottom-6 right-6 z-50 group" ref={mascotRef}>
                {/* Tooltip Bubble */}
                <AnimatePresence>
                    {(!isOpen && showTooltip) && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 10 }}
                            className="absolute bottom-full right-0 mb-4 bg-white rounded-2xl px-4 py-3 shadow-xl border border-fox-200 max-w-[200px]"
                        >
                            <div className="text-sm font-medium text-navy-800">
                                👋 Olá! Clique para ver como funcionamos!
                            </div>
                            {/* Speech bubble pointer */}
                            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-fox-200 transform rotate-45" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Glow Effect Ring */}
                <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                        boxShadow: isHovered || isOpen
                            ? '0 0 30px 10px rgba(245, 128, 37, 0.4)'
                            : '0 0 20px 5px rgba(245, 128, 37, 0.2)'
                    }}
                    transition={{ duration: 0.3 }}
                />

                {/* Pulsing Ring Animation */}
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-fox-500"
                    animate={{
                        scale: [1, 1.3, 1.5],
                        opacity: [0.6, 0.3, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut"
                    }}
                />

                {/* Main Mascot Container with 3D Perspective */}
                <motion.div
                    className="relative cursor-pointer"
                    style={{
                        perspective: 1000,
                        perspectiveOrigin: 'center center',
                    }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={toggleOpen}
                >
                    {/* 3D Transformed Mascot */}
                    <motion.div
                        className="relative"
                        style={{
                            rotateX: rotateX,
                            rotateY: rotateY,
                            transformStyle: 'preserve-3d',
                        }}
                        animate={{
                            scale: isOpen ? 0.9 : isHovered ? 1.1 : 1,
                            rotateZ: isOpen ? [0, -10, 10, 0] : 0,
                        }}
                        transition={{
                            scale: { duration: 0.2 },
                            rotateZ: { duration: 0.3 }
                        }}
                    >
                        {/* Shadow Layer */}
                        <motion.div
                            className="absolute inset-0 rounded-full bg-black/20 blur-lg"
                            style={{
                                transform: 'translateZ(-20px) translateY(10px)',
                            }}
                            animate={{
                                scale: isHovered ? 1.2 : 1,
                                opacity: isHovered ? 0.3 : 0.2,
                            }}
                        />

                        {/* Mascot Image with 3D effect */}
                        <motion.div
                            className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-cream border-4 ${isOpen ? 'border-fox-500' : 'border-white'} shadow-2xl transition-colors duration-300`}
                            style={{
                                transform: 'translateZ(20px)',
                                transformStyle: 'preserve-3d',
                            }}
                            animate={{
                                y: isOpen ? 0 : [0, -8, 0],
                            }}
                            transition={{
                                y: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                        >
                            <img
                                src={imageSrc}
                                alt="Mascote Raposa"
                                className="w-full h-full object-cover"
                                style={{
                                    filter: isHovered || isOpen ? 'brightness(1.1)' : 'brightness(1)',
                                    transition: 'filter 0.3s ease'
                                }}
                            />

                            {/* Eye Highlight Overlay */}
                            <motion.div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: `radial-gradient(circle at ${50 + eyeOffset.x * 5}% ${45 + eyeOffset.y * 5}%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
                                }}
                            />

                            {/* Shine Effect */}
                            <motion.div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, transparent 100%)',
                                }}
                                animate={{
                                    opacity: isHovered || isOpen ? 0.8 : 0.5,
                                }}
                            />
                        </motion.div>

                        {/* Floating Particles around mascot */}
                        {(isHovered || isOpen) && (
                            <>
                                {[...Array(6)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 rounded-full bg-fox-400"
                                        initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                                        animate={{
                                            x: Math.cos((i / 6) * Math.PI * 2) * 50,
                                            y: Math.sin((i / 6) * Math.PI * 2) * 50,
                                            opacity: [0, 1, 0],
                                            scale: [0, 1, 0]
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            delay: i * 0.1,
                                            repeat: Infinity,
                                            repeatDelay: 0.5
                                        }}
                                        style={{
                                            left: '50%',
                                            top: '50%',
                                            marginLeft: -4,
                                            marginTop: -4,
                                        }}
                                    />
                                ))}
                            </>
                        )}
                    </motion.div>

                    {/* Scroll Progress Indicator (Only visible if closed) */}
                    {!isOpen && (
                        <motion.div
                            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-200 rounded-full overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        >
                            <motion.div
                                className="h-full bg-fox-500 rounded-full"
                                style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
                            />
                        </motion.div>
                    )}
                </motion.div>

                {/* Interaction Hint (Only if closed) */}
                {!isOpen && (
                    <motion.div
                        className="absolute -left-2 top-1/2 -translate-y-1/2"
                        animate={{ x: [0, -5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <div className="w-6 h-6 rounded-full bg-fox-500 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                            ?
                        </div>
                    </motion.div>
                )}
            </div>
        </>
    );
};
