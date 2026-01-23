import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Brain, Sparkles, Code2 } from 'lucide-react';

const CODE_SNIPPETS = [
    "// Prompt: Criar agente de validação jurídica",
    "import { Agent } from '@sanfran-lab/ai';",
    "",
    "const agent = new Agent({",
    "  task: 'Mapear riscos contratuais',",
    "  tools: ['LawCrawler', 'RiskAnalyzer']",
    "});",
    "",
    "await agent.validate();",
    "// Success: 98% accuracy"
];

export const VibeCoding: React.FC = () => {
    return (
        <section className="py-24 bg-navy-900 overflow-hidden relative">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fox-500/10 border border-fox-500/20 text-fox-500 text-sm font-bold mb-6">
                                Vibe Coding Orientado
                            </div>
                            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                                Codifique na velocidade <br />
                                <span className="text-fox-500">da sua criatividade.</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                Nossos squads não perdem tempo com sintaxe. Eles usam IA como co-piloto para prototipar soluções funcionais reais sem escrever uma única linha de código 'braçal'.
                                <br /><br />
                                É o fim da barreira técnica entre a ideia jurídica e a solução tecnológica.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Premium Code Container */}
                        <div className="bg-[#0A0F1E] rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative group">
                            {/* Terminal Header */}
                            <div className="bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/40" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/40" />
                                </div>
                                <Terminal size={14} className="text-white/20" />
                            </div>

                            {/* Code Snippet Area */}
                            <div className="p-10 font-mono text-sm sm:text-base leading-relaxed relative">
                                <div className="space-y-2">
                                    <div className="flex gap-4">
                                        <span className="text-white/20 select-none">01</span>
                                        <p><span className="text-purple-400">import</span> <span className="text-blue-400">{`{ Agent }`}</span> <span className="text-purple-400">from</span> <span className="text-emerald-400">'@sanfran/ai'</span>;</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-white/20 select-none">02</span>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-white/20 select-none">03</span>
                                        <p><span className="text-purple-400">const</span> <span className="text-fox-400">agent</span> = <span className="text-purple-400">new</span> <span className="text-blue-400">Agent</span>({`{`}</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-white/20 select-none">04</span>
                                        <p>&nbsp;&nbsp;<span className="text-blue-300">task</span>: <span className="text-emerald-400">'Mapear riscos contratuais'</span>,</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-white/20 select-none">05</span>
                                        <p>&nbsp;&nbsp;<span className="text-blue-300">tools</span>: [<span className="text-emerald-400">'LawCrawler'</span>, <span className="text-emerald-400">'Analyzer'</span>]</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-white/20 select-none">06</span>
                                        <p>{`}`});</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-white/20 select-none">07</span>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-white/20 select-none">08</span>
                                        <p><span className="text-purple-400">await</span> <span className="text-fox-400">agent</span>.<span className="text-blue-400">validate</span>();</p>
                                    </div>
                                </div>

                                {/* Artificial Intelligence Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-fox-500/5 to-transparent pointer-events-none" />

                                {/* Scanning Line Effect */}
                                <motion.div
                                    animate={{ top: ["0%", "100%", "0%"] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-fox-500/50 to-transparent z-10 shadow-[0_0_15px_rgba(245,128,37,0.5)]"
                                />
                            </div>


                        </div>

                        {/* Background Glowing Orbs */}
                        <div className="absolute -top-20 -right-20 w-80 h-80 bg-fox-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-fox-500/20 transition-colors duration-700" />
                        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
