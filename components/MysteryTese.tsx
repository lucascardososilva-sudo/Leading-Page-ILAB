import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
    HelpCircle,
    AlertCircle,
    Scale,
    Landmark,
    Gavel,
    ShieldCheck,
    Cpu,
    Database,
    Zap,
    TrendingUp
} from 'lucide-react';

export const MysteryTese: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax and Surge values
    const leftWallX = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [-150, 0, 0, -150]);
    const rightWallX = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [150, 0, 0, 150]);
    const wallOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const surgeScale = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [1, 1.05, 1]);

    const sectors = [
        { icon: Landmark, label: "Govtech", color: "text-blue-400", desc: "Setor público em paralisia sistêmica" },
        { icon: ShieldCheck, label: "Regtech", color: "text-emerald-400", desc: "Complexidade regulatória inalcançável" },
        { icon: Gavel, label: "Legaltech", color: "text-purple-400", desc: "Escritórios lutando contra escala de dados" },
        { icon: Scale, label: "Lawtech", color: "text-amber-400", desc: "Justiça privada buscando novos modelos" },
        { icon: Database, label: "Taxtech", color: "text-rose-400", desc: "Ineficiência tributária drenando o PIB" }
    ];

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[140vh] bg-[#020617] flex items-center justify-center overflow-hidden py-32"
        >


            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-3 gap-8 xl:gap-16 items-center">

                {/* Left Wall: 80 Million Processes */}
                <motion.div
                    style={{ x: leftWallX, opacity: wallOpacity, scale: surgeScale }}
                    className="flex flex-col gap-6"
                >
                    <div className="flex items-center gap-3 text-red-500/80 mb-2">
                        <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                            <AlertCircle size={24} />
                        </motion.div>
                        <span className="text-sm font-black uppercase tracking-[0.2em]">Paredão de Processos</span>
                    </div>

                    <div className="relative p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl group hover:border-red-500/40 transition-all duration-500 overflow-hidden">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute -top-4 -left-4 bg-red-500 px-4 py-1 rounded-full text-[10px] font-black text-white rotate-[-5deg] shadow-lg">INEFICIÊNCIA</div>
                        <h4 className="text-7xl font-display font-black text-white mb-2 tracking-tighter">80M+</h4>
                        <p className="text-gray-400 text-xl leading-tight uppercase font-black tracking-tighter">Causas Travadas</p>

                        <div className="mt-10 space-y-3">
                            {[...Array(5)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ width: "20%" }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ delay: i * 0.1, duration: 2 }}
                                    className="h-1 bg-gradient-to-r from-red-500/50 via-red-500/20 to-transparent rounded-full"
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Center: The Mystery Box / Tese Call */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="relative group"
                >
                    <div className="absolute -inset-8 bg-fox-500/10 blur-[80px] rounded-full group-hover:bg-fox-500/20 transition-all duration-700" />

                    <div className="relative bg-[#0a0f1e] rounded-[3rem] p-1 shadow-2xl overflow-hidden border border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />

                        <div className="relative p-10 xl:p-12 text-center flex flex-col items-center">
                            <motion.div
                                animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-16 h-16 xl:w-20 xl:h-20 bg-gradient-to-tr from-fox-500 to-orange-400 rounded-3xl flex items-center justify-center text-white mb-8 shadow-[0_0_30px_rgba(245,128,37,0.4)]"
                            >
                                <HelpCircle size={40} />
                            </motion.div>

                            <h3 className="text-2xl xl:text-4xl font-display font-black text-white mb-4 leading-tight tracking-tight">
                                Qual será a nossa <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fox-400 via-fox-500 to-orange-500">Tese 2026?</span>
                            </h3>

                            <p className="text-gray-400 text-sm xl:text-base mb-8 leading-relaxed max-w-sm">
                                Estamos selecionando as ideias que irão compor a nova rodada de incubação. Você está dentro?
                            </p>

                            {/* Processo Seletivo Steps */}
                            <div className="flex justify-center gap-2 xl:gap-4 mb-10 w-full max-w-xs">
                                {[
                                    { step: "1", label: "Submete" },
                                    { step: "2", label: "Pitch" },
                                    { step: "3", label: "Squad" }
                                ].map((s, i) => (
                                    <div key={i} className="flex flex-col items-center gap-2 grow">
                                        <div className="w-8 h-8 rounded-full border border-fox-500/30 flex items-center justify-center text-[10px] font-black text-fox-500 bg-fox-500/5">{s.step}</div>
                                        <span className="text-[8px] uppercase font-bold tracking-widest text-gray-500">{s.label}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="#contact"
                                className="group/btn relative inline-flex items-center justify-center px-10 py-5 font-black text-white transition-all duration-300 bg-fox-500 rounded-full hover:bg-fox-600 hover:shadow-[0_0_40px_rgba(245,128,37,0.5)] overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Submeta a sua ideia <Zap size={20} className="fill-white" />
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full -skew-x-12 translate-x-[-150%] group-hover/btn:translate-x-[150%] transition-transform duration-700"
                                />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Right Wall: Sectors Suffering / SURGE */}
                <motion.div
                    style={{ x: rightWallX, opacity: wallOpacity, scale: surgeScale }}
                    className="flex flex-col gap-8"
                >
                    <div className="flex items-center gap-4">
                        <span className="h-px bg-white/20 grow" />
                        <h4 className="text-xs font-black text-white/40 tracking-[0.4em] uppercase">Setores Sob Ataque</h4>
                    </div>

                    <div className="grid grid-cols-1 gap-3 xl:gap-4">
                        {sectors.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: 20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ x: -10, backgroundColor: "rgba(255,255,255,0.05)" }}
                                className="flex items-center gap-4 p-4 xl:p-5 rounded-2xl bg-white/[0.02] border border-white/5 group cursor-default backdrop-blur-sm transition-all shadow-lg"
                            >
                                <div className={`p-3 xl:p-4 rounded-xl bg-white/5 ${s.color} group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                                    <s.icon size={26} />
                                </div>
                                <div className="grow">
                                    <div className="flex justify-between items-center mb-0.5">
                                        <span className="text-white font-black text-base xl:text-lg tracking-tight">{s.label}</span>
                                        <motion.div
                                            animate={{ opacity: [0.3, 1, 0.3] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                                            className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_orange]"
                                        />
                                    </div>
                                    <div className="text-[9px] xl:text-[10px] text-gray-500 font-bold uppercase tracking-wider">{s.desc}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>


        </section>
    );
};
