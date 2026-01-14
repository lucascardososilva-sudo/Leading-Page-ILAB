import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { FoxLogo } from './FoxLogo';
import { Magnetic } from './Magnetic';

interface NavItem {
    label: string;
    href: string;
}

interface GlassNavProps {
    items: NavItem[];
}

export const GlassNav: React.FC<GlassNavProps> = ({ items }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-fox-400 to-fox-600 origin-left z-50"
                style={{ scaleX }}
            />

            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
                    ? 'py-3 px-4'
                    : 'py-6 px-6'
                    }`}
            >
                <div className={`
          mx-auto max-w-7xl flex items-center justify-between
          transition-all duration-300
          ${isScrolled
                        ? 'bg-white/70 backdrop-blur-xl border border-white/20 rounded-full shadow-lg px-6 py-2'
                        : 'bg-transparent'
                    }
        `}>
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12 flex items-center justify-center rounded-full overflow-hidden border-2 border-fox-500/20 group-hover:border-fox-500 transition-colors bg-white">
                            <img src="/lego-fox.jpg" alt="SanFran InovaLab Logo" className="w-full h-full object-cover" />
                        </div>

                    </a>


                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {items.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-sm font-medium text-navy-800 hover:text-fox-500 transition-colors relative group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fox-500 group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                        <Magnetic>
                            <a
                                href="#contact"
                                className="px-5 py-2 bg-navy-800 text-white rounded-full text-sm font-medium hover:bg-fox-500 transition-all hover:shadow-lg inline-block"
                            >
                                Seja Parceiro
                            </a>
                        </Magnetic>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-navy-800 p-2 hover:bg-black/5 rounded-full transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav >

            {/* Mobile Menu Overlay */}
            < motion.div
                initial={false}
                animate={mobileMenuOpen ? { opacity: 1, pointerEvents: 'auto' } : { opacity: 0, pointerEvents: 'none' }
                }
                className="fixed inset-0 z-30 bg-white/90 backdrop-blur-xl pt-24 px-6 md:hidden"
            >
                <div className="flex flex-col gap-6 items-center text-center">
                    {items.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-3xl font-display font-bold text-navy-800 hover:text-fox-500 transition-colors"
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="mt-4 px-8 py-3 bg-navy-800 text-white rounded-full text-lg font-medium hover:bg-fox-500 transition-colors w-full max-w-xs block"
                    >
                        Seja Parceiro
                    </a>
                </div>
            </motion.div >
        </>
    );
};
