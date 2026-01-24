import React from 'react';
import { motion } from 'framer-motion';

export const SquadsIllustrationMobile: React.FC = () => {
    return (
        <motion.div
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-full bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 mb-8 relative"
        >


            <svg
                viewBox="0 0 400 1400"
                className="w-full h-auto relative z-10"
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <filter id="strongGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="5" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <linearGradient id="pipeGradientMobile" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#CBD5E1" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#f58025" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.2" />
                    </linearGradient>

                    <linearGradient id="goldGradientMobile" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FCD34D" />
                        <stop offset="100%" stopColor="#F59E0B" />
                    </linearGradient>

                    <linearGradient id="foxGradientMobile" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f58025" />
                        <stop offset="100%" stopColor="#d96418" />
                    </linearGradient>

                    <linearGradient id="holoBlueMobile" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
                    </linearGradient>


                </defs>

                {/* ==================== 1. INPUT ZONE (Topo - Vertical) ==================== */}
                <g transform="translate(200, 120)">
                    {/* Conexões Animadas - Vertical */}
                    <motion.path d="M-80 0 L0 60" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5 5" />
                    <motion.path d="M0 0 L0 60" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5 5" />
                    <motion.path d="M80 0 L0 60" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5 5" />

                    {/* Fonte 1: GOVERNO */}
                    <g transform="translate(-80, 0)">
                        <motion.circle r="35" fill="white" stroke="#1a2b4b" strokeWidth="2" whileHover={{ scale: 1.1 }} />
                        <text x="0" y="5" textAnchor="middle" className="text-[9px] font-bold fill-navy-800" style={{ fontFamily: 'Space Grotesk' }}>GOVERNO</text>
                        <motion.circle r="40" fill="none" stroke="#1a2b4b" strokeWidth="1" strokeDasharray="4 4" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} opacity="0.1" />
                    </g>

                    {/* Fonte 2: STARTUPS */}
                    <g transform="translate(0, 0)">
                        <motion.circle r="35" fill="white" stroke="#f58025" strokeWidth="2" whileHover={{ scale: 1.1 }} />
                        <text x="0" y="5" textAnchor="middle" className="text-[9px] font-bold fill-navy-800" style={{ fontFamily: 'Space Grotesk' }}>STARTUPS</text>
                        <motion.circle r="40" fill="none" stroke="#f58025" strokeWidth="1" strokeDasharray="4 4" animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} opacity="0.2" />
                    </g>

                    {/* Fonte 3: ESCRITÓRIOS */}
                    <g transform="translate(80, 0)">
                        <motion.circle r="35" fill="white" stroke="#475569" strokeWidth="2" whileHover={{ scale: 1.1 }} />
                        <text x="0" y="5" textAnchor="middle" className="text-[8px] font-bold fill-navy-800" style={{ fontFamily: 'Space Grotesk' }}>ESCRITÓRIOS</text>
                        <motion.circle r="40" fill="none" stroke="#475569" strokeWidth="1" strokeDasharray="4 4" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} opacity="0.1" />
                    </g>

                    {/* Nó Central de Demanda */}
                    <g transform="translate(0, 100)">
                        <circle cx="0" cy="0" r="40" fill="#F8FAFC" stroke="#cbd5e1" strokeWidth="1" />
                        <text x="0" y="5" textAnchor="middle" className="text-[10px] font-bold fill-gray-500 tracking-wider">DEMANDA</text>
                    </g>
                </g>

                {/* ==================== CONEXÃO DATA STREAM (Vertical) ==================== */}
                <g>
                    <path d="M200 260 L200 340" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="round" />
                    <motion.path
                        d="M200 260 L200 340"
                        stroke="url(#pipeGradientMobile)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="20 20"
                        animate={{ strokeDashoffset: [0, -40] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                </g>

                {/* ==================== 2. SQUAD PLATFORM (Centro - Vertical Layout) ==================== */}
                <g transform="translate(200, 700)">

                    {/* Base Holográfica - Ajustada para vertical */}
                    <motion.path
                        d="M0 280 L-160 180 L-160 -180 L0 -280 L160 -180 L160 180 Z"
                        fill="white"
                        stroke="#f58025"
                        strokeWidth="1"
                        strokeOpacity="0.2"
                    />
                    <motion.ellipse cx="0" cy="150" rx="130" ry="60" fill="none" stroke="#f58025" strokeWidth="1" strokeDasharray="10 10" opacity="0.1" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />

                    {/* ==================== POLYMATH NETWORK (Polinização) ==================== */}
                    <g opacity="0.4">
                        {/* CTO(Top) to PM(Left) & MKT(Right) */}
                        <line x1="0" y1="-200" x2="-100" y2="-60" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="0" y1="-200" x2="100" y2="-60" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />

                        {/* COO(Bottom) to PM(Left) & MKT(Right) */}
                        <line x1="0" y1="200" x2="-100" y2="60" stroke="#f58025" strokeWidth="1" strokeDasharray="4 4" />
                        <line x1="0" y1="200" x2="100" y2="60" stroke="#f58025" strokeWidth="1" strokeDasharray="4 4" />

                        {/* CEO(Center) to All */}
                        <line x1="0" y1="0" x2="0" y2="-200" stroke="#7c3aed" strokeWidth="2" opacity="0.3" />
                        <line x1="0" y1="0" x2="0" y2="200" stroke="#7c3aed" strokeWidth="2" opacity="0.3" />
                        <line x1="0" y1="0" x2="-100" y2="-60" stroke="#7c3aed" strokeWidth="2" opacity="0.3" />
                        <line x1="0" y1="0" x2="100" y2="60" stroke="#7c3aed" strokeWidth="2" opacity="0.3" />
                    </g>



                    <text x="0" y="320" textAnchor="middle" className="text-lg font-bold fill-navy-800" style={{ fontFamily: 'Space Grotesk' }}>SQUAD DE RAPOSAS</text>


                    {/* ==================== 1. CEO (Centro - Visionário) ==================== */}
                    <g transform="translate(0, 0)">
                        <motion.g animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                            <circle r="50" fill="none" stroke="url(#holoBlueMobile)" strokeWidth="0.5" strokeDasharray="10 20" opacity="0.5" />
                        </motion.g>

                        <motion.circle r="1" stroke="#7c3aed" strokeWidth="2" fill="none"
                            animate={{ r: [1, 60], opacity: [0.8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
                        />

                        <rect x="-20" y="-60" width="40" height="18" rx="9" fill="#7c3aed" />
                        <text x="0" y="-48" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">CEO</text>


                        <motion.g animate={{ y: [-4, 4, -4] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                            <path d="M-12 16 Q-20 32 -28 40 L28 40 Q20 32 12 16" fill="#8b5cf6" />
                            <path d="M-12 16 C-16 28, 16 28, 12 16 L8 4 L-8 4 Z" fill="#f58025" />
                            <path d="M-6 16 C-8 24, 8 24, 6 16 L4 8 L-4 8 Z" fill="#fff5eb" />
                            <g transform="translate(0, -4)">
                                <path d="M-12 -8 L-20 -24 L-4 -16 Z" fill="#f58025" />
                                <path d="M-14 -10 L-18 -18 L-8 -13 Z" fill="#ffe8cc" />
                                <path d="M12 -8 L20 -24 L4 -16 Z" fill="#f58025" />
                                <path d="M14 -10 L18 -18 L8 -13 Z" fill="#ffe8cc" />
                                <ellipse cx="0" cy="-4" rx="16" ry="13" fill="#f58025" />
                                <path d="M-16 -4 Q-12 10 0 10 Q12 10 16 -4 Q8 0 0 4 Q-8 0 -16 -4" fill="white" />
                                <circle cx="0" cy="-8" r="2.5" fill="#fbbf24" />
                                <circle cx="-5" cy="-4" r="1.6" fill="#1a2b4b" />
                                <circle cx="5" cy="-4" r="1.6" fill="#1a2b4b" />
                                <path d="M-1.5 6 Q0 7 1.5 6 L0 8 Z" fill="#1a2b4b" />
                            </g>
                        </motion.g>
                    </g>

                    {/* ==================== 2. CTO (Topo - Tech Lead) ==================== */}
                    <g transform="translate(0, -200)">
                        <rect x="-20" y="-50" width="40" height="18" rx="9" fill="#1e293b" />
                        <text x="0" y="-38" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">CTO</text>


                        <motion.g animate={{ y: [-3, 3, -3] }} transition={{ duration: 4, repeat: Infinity }}>
                            <rect x="-36" y="-16" width="10" height="32" fill="#0f172a" stroke="#3b82f6" strokeWidth="0.5" opacity="0.9" />
                            <rect x="28" y="-16" width="10" height="32" fill="#0f172a" stroke="#3b82f6" strokeWidth="0.5" opacity="0.9" />
                            <motion.rect x="-34" y="-12" width="6" height="2" fill="#22c55e" animate={{ opacity: [1, 0.3] }} transition={{ duration: 0.2, repeat: Infinity }} />
                            <motion.rect x="30" y="-4" width="6" height="2" fill="#ef4444" animate={{ opacity: [1, 0.3] }} transition={{ duration: 0.8, repeat: Infinity }} />

                            <g>
                                <path d="M-16 20 Q-36 28 -32 8 Q-28 -8 -16 4 Z" fill="#d96418" />
                                <path d="M-12 16 C-16 28, 16 28, 12 16 L8 8 L-8 8 Z" fill="#f58025" />
                                <path d="M-6 16 C-8 24, 8 24, 6 16 L4 12 L-4 12 Z" fill="#fff5eb" />
                                <g transform="translate(0, 0)">
                                    <path d="M-12 -8 L-20 -24 L-4 -16 Z" fill="#f58025" />
                                    <path d="M12 -8 L20 -24 L4 -16 Z" fill="#f58025" />
                                    <ellipse cx="0" cy="-4" rx="16" ry="13" fill="#f58025" />
                                    <path d="M-16 -4 Q-12 10 0 10 Q12 10 16 -4 Q8 0 0 4 Q-8 0 -16 -4" fill="white" />
                                    <rect x="-11" y="-6" width="22" height="6" rx="2" fill="#000" opacity="0.8" />
                                    <line x1="-11" y1="-3" x2="11" y2="-3" stroke="#22c55e" strokeWidth="1" />
                                </g>
                            </g>
                        </motion.g>
                    </g>

                    {/* ==================== 3. PRODUCT MANAGER (Esquerda Superior) ==================== */}
                    <g transform="translate(-100, -60)">
                        <rect x="-48" y="-50" width="96" height="20" rx="10" fill="#ec4899" />
                        <text x="0" y="-36" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">PRODUCT MANAGER</text>


                        <motion.g animate={{ y: [2, -2, 2] }} transition={{ duration: 5, repeat: Infinity }}>
                            <g>
                                <path d="M-12 20 Q-28 32 -28 16 Q-24 0 -12 12" fill="#d96418" />
                                <path d="M-12 16 C-16 28, 16 28, 12 16 L8 8 L-8 8 Z" fill="#f58025" />
                                <path d="M-6 16 C-8 24, 8 24, 6 16 L4 12 L-4 12 Z" fill="#fff5eb" />
                                <g transform="translate(0, 0)">
                                    <path d="M-12 -8 L-20 -24 L-4 -16 Z" fill="#f58025" />
                                    <path d="M12 -8 L20 -24 L4 -16 Z" fill="#f58025" />
                                    <ellipse cx="0" cy="-4" rx="16" ry="13" fill="#f58025" />
                                    <path d="M-16 -4 Q-12 10 0 10 Q12 10 16 -4 Q8 0 0 4 Q-8 0 -16 -4" fill="white" />
                                    <circle cx="-5" cy="-4" r="1.6" fill="#1a2b4b" />
                                    <circle cx="5" cy="-4" r="1.6" fill="#1a2b4b" />
                                    <path d="M-1.5 6 Q0 7 1.5 6 L0 8 Z" fill="#1a2b4b" />
                                </g>

                                <path d="M12 12 L20 8" stroke="#f58025" strokeWidth="3" strokeLinecap="round" />
                                <g transform="translate(24, 6) rotate(-10)">
                                    <rect x="-6" y="-8" width="12" height="16" fill="white" stroke="#ec4899" strokeWidth="1" rx="2" />
                                    <path d="M-4 -4 L-2 -2 L2 -6" fill="none" stroke="#22c55e" strokeWidth="1" />
                                    <line x1="-4" y1="0" x2="4" y2="0" stroke="#cbd5e1" strokeWidth="1" />
                                    <line x1="-4" y1="3" x2="4" y2="3" stroke="#cbd5e1" strokeWidth="1" />
                                </g>
                            </g>
                        </motion.g>
                    </g>

                    {/* ==================== 4. HEAD DE MARKETING (Direita Inferior) ==================== */}
                    <g transform="translate(100, 60)">
                        <rect x="-48" y="-50" width="96" height="20" rx="10" fill="#22c55e" />
                        <text x="0" y="-36" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">HEAD DE MKT & VENDAS</text>


                        <g transform="translate(24, 16) rotate(-20)">
                            <motion.path d="M0 0 Q8 -4 8 8" stroke="#22c55e" strokeWidth="2" fill="none" animate={{ opacity: [1, 0], scale: [1, 1.5] }} transition={{ duration: 1, repeat: Infinity }} />
                            <motion.path d="M4 0 Q16 -8 16 16" stroke="#22c55e" strokeWidth="2" fill="none" animate={{ opacity: [1, 0], scale: [1, 1.5] }} transition={{ duration: 1, repeat: Infinity, delay: 0.3 }} />
                        </g>

                        <motion.g animate={{ y: [2, -2, 2] }} transition={{ duration: 4.5, repeat: Infinity }}>
                            <g>
                                <path d="M12 20 Q28 28 24 8 Q20 -4 12 8" fill="#d96418" />
                                <path d="M-12 16 C-16 28, 16 28, 12 16 L8 8 L-8 8 Z" fill="#f58025" />
                                <path d="M-6 16 C-8 24, 8 24, 6 16 L4 12 L-4 12 Z" fill="#fff5eb" />
                                <path d="M0 12 L2.4 20 L0 22 L-2.4 20 Z" fill="#ea580c" stroke="#9a3412" strokeWidth="0.4" />
                                <g transform="translate(0, 0)">
                                    <path d="M-12 -8 L-20 -24 L-4 -16 Z" fill="#f58025" />
                                    <path d="M12 -8 L20 -24 L4 -16 Z" fill="#f58025" />
                                    <ellipse cx="0" cy="-4" rx="16" ry="13" fill="#f58025" />
                                    <path d="M-16 -4 Q-12 10 0 10 Q12 10 16 -4 Q8 0 0 4 Q-8 0 -16 -4" fill="white" />
                                    <circle cx="-5" cy="-4" r="1.6" fill="#1a2b4b" />
                                    <circle cx="5" cy="-4" r="1.6" fill="#1a2b4b" />
                                    <path d="M-4 6 Q0 10 4 6" fill="none" stroke="#1a2b4b" strokeWidth="1.2" />
                                </g>
                                <path d="M-8 16 L-16 20" stroke="#d96418" strokeWidth="3" strokeLinecap="round" />
                                <g transform="translate(-20, 20) rotate(-20)">
                                    <path d="M0 0 L-12 -6 L-12 6 Z" fill="white" stroke="#22c55e" strokeWidth="1" />
                                    <circle cx="0" cy="0" r="3" fill="#22c55e" />
                                </g>
                            </g>
                        </motion.g>
                    </g>

                    {/* ==================== 5. COO (Base - Operations Engine) ==================== */}
                    <g transform="translate(0, 200)">
                        <rect x="-20" y="44" width="40" height="18" rx="9" fill="#f58025" />
                        <text x="0" y="56" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">COO</text>


                        <rect x="-40" y="20" width="80" height="8" rx="4" fill="#334155" />
                        <motion.line x1="-32" y1="24" x2="32" y2="24" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 5" animate={{ strokeDashoffset: [-10, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />

                        <motion.g animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} transform="translate(36, 8)">
                            <path d="M-8 -8 L8 8 M-8 8 L8 -8 M0 -11 L0 11 M-11 0 L11 0" stroke="#cbd5e1" strokeWidth="3" />
                            <circle r="8" fill="white" stroke="#f58025" strokeWidth="2" />
                        </motion.g>
                        <motion.g animate={{ rotate: -360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} transform="translate(-36, 0)">
                            <path d="M-6 -6 L6 6 M-6 6 L6 -6 M0 -10 L0 10 M-10 0 L10 0" stroke="#cbd5e1" strokeWidth="2.5" />
                            <circle r="6" fill="white" stroke="#f58025" strokeWidth="2" />
                        </motion.g>

                        <motion.g animate={{ y: [-3, 3, -3] }} transition={{ duration: 5.5, repeat: Infinity }}>
                            <g>
                                <path d="M16 8 Q32 8 28 -8 Q20 -16 12 -8" fill="#d96418" />
                                <path d="M-12 8 C-16 20, 16 20, 12 8 L8 0 L-8 0 Z" fill="#f58025" />
                                <path d="M-6 8 C-8 16, 8 16, 6 8 L4 4 L-4 4 Z" fill="#fff5eb" />
                                <g transform="translate(0, -8)">
                                    <path d="M-12 -8 L-20 -24 L-4 -16 Z" fill="#f58025" />
                                    <path d="M12 -8 L20 -24 L4 -16 Z" fill="#f58025" />
                                    <ellipse cx="0" cy="-4" rx="16" ry="13" fill="#f58025" />
                                    <path d="M-16 -4 Q-12 10 0 10 Q12 10 16 -4 Q8 0 0 4 Q-8 0 -16 -4" fill="white" />
                                    <circle cx="-5" cy="-4" r="1.6" fill="#1a2b4b" />
                                    <circle cx="5" cy="-4" r="1.6" fill="#1a2b4b" />
                                    <path d="M-16 -8 C-16 -24, 16 -24, 16 -8" fill="none" stroke="#1f2937" strokeWidth="1.6" />
                                    <rect x="-18" y="-10" width="5" height="10" rx="2" fill="#1f2937" />
                                    <path d="M-16 -5 L-19 5 L-10 8" fill="none" stroke="#1f2937" strokeWidth="0.8" />
                                    <circle cx="-10" cy="8" r="1.6" fill="#f58025" />
                                </g>
                                <path d="M-10 8 L-20 12" stroke="#f58025" strokeWidth="3" strokeLinecap="round" />
                                <path d="M10 8 L20 12" stroke="#f58025" strokeWidth="3" strokeLinecap="round" />
                                <circle cx="-20" cy="12" r="3" fill="#22c55e" />
                                <circle cx="20" cy="12" r="3" fill="#3b82f6" />
                            </g>
                        </motion.g>
                    </g>

                </g>

                {/* ==================== CONEXÃO SAÍDA (Vertical) ==================== */}
                <g>
                    <path d="M200 1080 L200 1160" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="round" />
                    <motion.path
                        d="M200 1080 L200 1160"
                        stroke="url(#goldGradientMobile)"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeDasharray="20 20"
                        animate={{ strokeDashoffset: [0, -40] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />

                </g>

                {/* ==================== 3. OUTPUT ZONE (Base) ==================== */}
                <g transform="translate(200, 1280)">
                    <motion.circle cx="0" cy="0" r="56" fill="#f0fdf4" stroke="#86efac" strokeWidth="1" animate={{ r: [56, 60, 56], strokeOpacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} />
                    <text x="0" y="85" textAnchor="middle" className="text-[10px] font-bold fill-navy-800" style={{ fontFamily: 'Space Grotesk' }}>SOLUÇÃO VALIDADA</text>

                    <motion.g animate={{ y: [-6, 6, -6], rotateY: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                        <path d="M0 32 L-28 16 L-28 -16 L0 0 L28 -16 L28 16 Z" fill="#22c55e" opacity="0.9" />
                        <path d="M0 0 L0 -32 L-28 -48 L-28 -16 Z" fill="#16a34a" />
                        <path d="M0 0 L28 -16 L28 -48 L0 -32 Z" fill="#4ade80" />
                        <circle cx="0" cy="-16" r="8" fill="white" opacity="0.5" />
                        <path d="M-8 -24 L0 -16 L12 -36" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.g>

                    <g>
                        {[0, 120, 240].map((deg, i) => (
                            <motion.g key={i} animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: i }}>
                                <circle cx="0" cy="-72" r="5" fill="#fbbf24" />
                            </motion.g>
                        ))}
                    </g>
                </g>

            </svg>
        </motion.div>
    );
};
