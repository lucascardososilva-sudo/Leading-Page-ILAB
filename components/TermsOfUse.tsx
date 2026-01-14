import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck } from 'lucide-react';

interface TermsOfUseProps {
    isOpen: boolean;
    onClose: () => void;
}

export const TermsOfUse: React.FC<TermsOfUseProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                >
                    {/* Backdrop with elegant glass effect */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-navy-900/40 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col border border-white/20"
                    >
                        {/* Header section with brand colors */}
                        <div className="flex items-center justify-between px-8 py-6 border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-fox-500 rounded-xl flex items-center justify-center text-white">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-display font-bold text-navy-800">Termos de Uso</h2>
                                    <p className="text-xs font-medium text-fox-600 uppercase tracking-wider mt-0.5">SanFran InovaLab</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-100 rounded-full transition-all text-gray-400 hover:text-navy-800 hover:rotate-90"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Content Body */}
                        <div className="overflow-y-auto px-8 md:px-12 py-10 scrollbar-hide">
                            <div className="prose prose-navy max-w-none space-y-8 text-navy-900/80 leading-relaxed font-sans">

                                <section>
                                    <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold text-gray-500 mb-4 uppercase tracking-widest">
                                        Data efetiva: 25 de Dezembro de 2025
                                    </div>
                                    <p className="text-lg">
                                        Bem-vindo ao <strong>Labora</strong>!
                                    </p>
                                    <p className="mt-4">
                                        Estes Termos de Uso ("Termos") regulam o acesso e uso da plataforma, do site e de todos os materiais disponibilizados pelo <strong>Labora - SanFran InovaLab</strong> ("Labora", "nós", "nosso" ou "nossa").
                                    </p>
                                    <p className="mt-4">
                                        Ao acessar ou utilizar nosso site e materiais, você concorda em ficar vinculado a estes Termos. Se você não concordar com qualquer parte destes Termos, não poderá acessar ou utilizar nossa plataforma ou conteúdos.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <h3 className="text-xl font-bold font-display text-navy-800 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-fox-500 rounded-full"></span>
                                        1. Natureza Jurídica
                                    </h3>
                                    <p>
                                        O Labora é uma organização estudantil sem fins mercadológicos vinculada à Faculdade de Direito da USP (Sanfran) e não possui CNPJ próprio. Somos um ecossistema de inovação acadêmica. A finalidade do Labora é estritamente de pesquisa, extensão e desenvolvimento tecnológico, sendo vedada a exploração comercial de suas atividades por terceiros, ressalvados os acordos específicos internos de seus membros para a manutenção do ecossistema e fins não mercadológicos externos.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <h3 className="text-xl font-bold font-display text-navy-800 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-fox-500 rounded-full"></span>
                                        2. Definições
                                    </h3>
                                    <ul className="space-y-3 list-none pl-0">
                                        <li className="flex gap-3">
                                            <span className="text-fox-500 font-bold">•</span>
                                            <span><strong>"Plataforma"</strong>: significa o presente site, incluindo todos os conteúdos, funcionalidades, ferramentas de IA experimental e serviços oferecidos.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-fox-500 font-bold">•</span>
                                            <span><strong>"Usuário"</strong>: significa qualquer pessoa física ou jurídica que acesse ou utilize a Plataforma ou documentos do Labora.</span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-fox-500 font-bold">•</span>
                                            <span><strong>"Conteúdo"</strong>: significa toda e qualquer informação disponibilizada, incluindo textos, imagens, algoritmos, jurimetria, designs, e compilações de dados.</span>
                                        </li>
                                    </ul>
                                </section>

                                <section className="space-y-4 p-6 bg-fox-50/50 rounded-2xl border border-fox-100">
                                    <h3 className="text-xl font-bold font-display text-fox-600 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-fox-600 rounded-full"></span>
                                        3. Propriedade Intelectual (Direito Digital)
                                    </h3>
                                    <p className="text-navy-900 font-medium leading-relaxed">
                                        A Plataforma e todo o seu conteúdo são de propriedade intelectual exclusiva do Labora ou de seus membros/licenciadores, protegidos pelas leis de propriedade intelectual brasileiras e tratados internacionais.
                                    </p>
                                    <p className="text-navy-900 font-bold bg-white/60 p-4 rounded-xl border border-fox-200 shadow-sm">
                                        ⛔ AVISO LEGAL: Qualquer uso alternativo do conteúdo de algum material presente em documentos, na plataforma ou no presente site NÃO SERÁ PERMITIDO. Isso inclui, mas não se limita à reprodução, modificação, redistribuição ou exploração comercial sem autorização expressa e por escrito.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <h3 className="text-xl font-bold font-display text-navy-800 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-fox-500 rounded-full"></span>
                                        4. Uso da Plataforma e Restrições
                                    </h3>
                                    <p>
                                        Ao utilizar nossa plataforma, você concorda em não realizar engenharia reversa, extração massiva de dados (scraping/crawling) ou qualquer ato que comprometa a segurança e integridade das soluções desenvolvidas pelos nossos Squads. O uso inadequado será passível de medidas legais conforme os marcos regulatórios de Direito Digital.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <h3 className="text-xl font-bold font-display text-navy-800 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-fox-500 rounded-full"></span>
                                        5. Limitação de Responsabilidade
                                    </h3>
                                    <p>
                                        O Labora fornece ferramentas e estudos em caráter experimental e acadêmico. Não garantimos a infalibilidade de algoritmos ou a aplicabilidade comercial direta de pesquisas sem consulta profissional específica. O uso dessas informações é de risco exclusivo do Usuário.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <h3 className="text-xl font-bold font-display text-navy-800 flex items-center gap-2">
                                        <span className="w-1.5 h-6 bg-fox-500 rounded-full"></span>
                                        6. Foro
                                    </h3>
                                    <p>
                                        Qualquer disputa decorrente destes Termos será submetida ao foro da comarca da cidade de São Paulo, Capital, com exclusão de qualquer outro.
                                    </p>
                                </section>

                            </div>
                        </div>

                        {/* Footer buttons */}
                        <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter">
                                © 2025 Labora - SanFran InovaLab
                            </p>
                            <button
                                onClick={onClose}
                                className="w-full md:w-auto px-8 py-3 bg-navy-800 text-white font-bold rounded-2xl hover:bg-fox-500 transition-all shadow-lg shadow-navy-900/10 hover:shadow-fox-500/20 active:scale-95"
                            >
                                Ciente e De Acordo
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
