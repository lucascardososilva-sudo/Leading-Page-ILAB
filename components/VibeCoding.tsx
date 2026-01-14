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
    const [displayText, setDisplayText] = useState("");
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        if (lineIndex < CODE_SNIPPETS.length) {
            if (charIndex < CODE_SNIPPETS[lineIndex].length) {
                const timer = setTimeout(() => {
                    setDisplayText(prev => prev + CODE_SNIPPETS[lineIndex][charIndex]);
                    setCharIndex(prev => prev + 1);
                }, 40);
                return () => clearTimeout(timer);
            } else {
                const timer = setTimeout(() => {
                    setDisplayText(prev => prev + "\n");
                    setLineIndex(prev => prev + 1);
                    setCharIndex(0);
                }, 300);
                return () => clearTimeout(timer);
            }
        }
    }, [lineIndex, charIndex]);

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
                                <Sparkles size={16} />
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
                        {/* Glossy Terminal */}
                        <div className="bg-[#050914] rounded-3xl border border-white/10 shadow-2xl p-1 overflow-hidden">
                            <div className="bg-white/5 px-6 py-3 flex items-center justify-between border-b border-white/5">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <Terminal size={14} className="text-white/20" />
                            </div>
                            <div className="p-8 min-h-[350px] font-mono text-sm">
                                <pre className="text-emerald-400 whitespace-pre-wrap">
                                    {displayText}
                                    <motion.span
                                        animate={{ opacity: [0, 1] }}
                                        transition={{ duration: 0.8, repeat: Infinity }}
                                        className="border-l-2 border-fox-500 ml-1"
                                    />
                                </pre>
                            </div>
                        </div>

                        {/* Glowing Orbs */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-fox-500/20 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
