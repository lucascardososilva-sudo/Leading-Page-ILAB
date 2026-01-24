import React, { useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const SquadsIllustration: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  // Parallax Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPct = e.clientX - rect.left - width / 2;
    const mouseYPct = e.clientY - rect.top - height / 2;
    x.set(mouseXPct / width);
    y.set(mouseYPct / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };



  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-[350px] md:h-[450px] bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 mb-8 relative perspective-1000"
    >
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="w-full h-full">
        <svg
          viewBox="0 0 1600 800"
          className="w-full h-full relative z-10"
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

            <linearGradient id="pipeGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#CBD5E1" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#f58025" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.2" />
            </linearGradient>

            <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FCD34D" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>

            <linearGradient id="foxGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f58025" />
              <stop offset="100%" stopColor="#d96418" />
            </linearGradient>

            <linearGradient id="holoBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
            </linearGradient>


          </defs>

          {/* ==================== 1. INPUT ZONE (Esquerda) ==================== */}
          <g transform="translate(340, 400) scale(1.2)">
            {/* Conexões Animadas */}
            <motion.path d="M-120 -140 Q0 -140 0 -50" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5 5" />
            <motion.path d="M-150 0 L0 0" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5 5" />
            <motion.path d="M-120 140 Q0 140 0 50" fill="none" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="5 5" />

            {/* Fonte 1: GOVERNO */}
            <g transform="translate(-120, -140)">
              <motion.circle r="45" fill="white" stroke="#1a2b4b" strokeWidth="2" whileHover={{ scale: 1.1 }} />
              <text x="0" y="5" textAnchor="middle" className="text-[10px] font-bold fill-navy-800" style={{ fontFamily: 'Space Grotesk' }}>GOVERNO</text>
              <motion.circle r="50" fill="none" stroke="#1a2b4b" strokeWidth="1" strokeDasharray="4 4" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} opacity="0.1" />
            </g>

            {/* Fonte 2: STARTUPS */}
            <g transform="translate(-150, 0)">
              <motion.circle r="45" fill="white" stroke="#f58025" strokeWidth="2" whileHover={{ scale: 1.1 }} />
              <text x="0" y="5" textAnchor="middle" className="text-[10px] font-bold fill-navy-800" style={{ fontFamily: 'Space Grotesk' }}>STARTUPS</text>
              <motion.circle r="50" fill="none" stroke="#f58025" strokeWidth="1" strokeDasharray="4 4" animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} opacity="0.2" />
            </g>

            {/* Fonte 3: ESCRITÓRIOS */}
            <g transform="translate(-120, 140)">
              <motion.circle r="45" fill="white" stroke="#475569" strokeWidth="2" whileHover={{ scale: 1.1 }} />
              <text x="0" y="5" textAnchor="middle" className="text-[10px] font-bold fill-navy-800" style={{ fontFamily: 'Space Grotesk' }}>ESCRITÓRIOS</text>
              <motion.circle r="50" fill="none" stroke="#475569" strokeWidth="1" strokeDasharray="4 4" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} opacity="0.1" />
            </g>

            {/* Nó Central de Demanda */}
            <circle cx="0" cy="0" r="50" fill="#F8FAFC" stroke="#cbd5e1" strokeWidth="1" />
            <text x="0" y="5" textAnchor="middle" className="text-xs font-bold fill-gray-500 tracking-wider">DEMANDA</text>
          </g>

          {/* ==================== CONEXÃO DATA STREAM ==================== */}
          <g>
            <path d="M420 400 L600 400" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="round" />
            <motion.path
              d="M420 400 L600 400"
              stroke="url(#pipeGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="20 20"
              animate={{ strokeDashoffset: [0, -40] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </g>

          {/* ==================== 2. SQUAD PLATFORM (Centro) ==================== */}
          <g transform="translate(800, 400) scale(1.1)">

            {/* Base Holográfica */}
            <motion.path
              d="M0 200 L-260 80 L-260 -80 L0 -200 L260 -80 L260 80 Z"
              fill="white"
              stroke="#f58025"
              strokeWidth="1"
              strokeOpacity="0.2"
            />

            <motion.ellipse cx="0" cy="100" rx="220" ry="110" fill="none" stroke="#f58025" strokeWidth="1" strokeDasharray="10 10" opacity="0.1" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />

            {/* ==================== POLYMATH NETWORK (Polinização) ==================== */}
            {/* Linhas de conexão neural entre os cargos */}
            <g opacity="0.4">
              {/* CTO(Top) to PM(Left) & MKT(Right) */}
              <line x1="0" y1="-140" x2="-180" y2="0" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="-140" x2="180" y2="0" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" />

              {/* COO(Bottom) to PM(Left) & MKT(Right) */}
              <line x1="0" y1="140" x2="-180" y2="0" stroke="#f58025" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="140" x2="180" y2="0" stroke="#f58025" strokeWidth="1" strokeDasharray="4 4" />

              {/* CEO(Center) to All */}
              <line x1="0" y1="-20" x2="0" y2="-140" stroke="#7c3aed" strokeWidth="2" opacity="0.3" />
              <line x1="0" y1="-20" x2="0" y2="140" stroke="#7c3aed" strokeWidth="2" opacity="0.3" />
              <line x1="0" y1="-20" x2="-180" y2="0" stroke="#7c3aed" strokeWidth="2" opacity="0.3" />
              <line x1="0" y1="-20" x2="180" y2="0" stroke="#7c3aed" strokeWidth="2" opacity="0.3" />
            </g>



            <text x="0" y="240" textAnchor="middle" className="text-xl font-bold fill-navy-800" style={{ fontFamily: 'Space Grotesk' }}>SQUAD DE RAPOSAS</text>


            {/* ==================== 1. CEO (Centro - Visionário) ==================== */}
            <g transform="translate(0, -20)">
              {/* Force Field Shield Rotation */}
              <motion.g animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                <circle r="60" fill="none" stroke="url(#holoBlue)" strokeWidth="0.5" strokeDasharray="10 20" opacity="0.5" />
                <path d="M-60 0 A60 60 0 0 1 60 0" stroke="#7c3aed" strokeWidth="1" fill="none" opacity="0.2" />
              </motion.g>

              {/* Strategic Pulsing Waves */}
              <motion.circle r="1" stroke="#7c3aed" strokeWidth="2" fill="none"
                animate={{ r: [1, 80], opacity: [0.8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
              />

              <rect x="-25" y="-75" width="50" height="20" rx="10" fill="#7c3aed" />
              <text x="0" y="-61" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">CEO</text>


              <motion.g animate={{ y: [-6, 6, -6] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
                {/* Capa Visionária e Corpo */}
                <path d="M-15 20 Q-25 40 -35 50 L35 50 Q25 40 15 20" fill="#8b5cf6" />
                <path d="M-15 20 C-20 35, 20 35, 15 20 L10 5 L-10 5 Z" fill="#f58025" />
                <path d="M-8 20 C-10 30, 10 30, 8 20 L5 10 L-5 10 Z" fill="#fff5eb" />

                {/* Cabeça + Mind Stone */}
                <g transform="translate(0, -5)">
                  <path d="M-15 -10 L-25 -30 L-5 -20 Z" fill="#f58025" />
                  <path d="M-18 -12 L-22 -22 L-10 -16 Z" fill="#ffe8cc" />
                  <path d="M15 -10 L25 -30 L5 -20 Z" fill="#f58025" />
                  <path d="M18 -12 L22 -22 L10 -16 Z" fill="#ffe8cc" />
                  <ellipse cx="0" cy="-5" rx="20" ry="16" fill="#f58025" />
                  <path d="M-20 -5 Q-15 12 0 12 Q15 12 20 -5 Q10 0 0 5 Q-10 0 -20 -5" fill="white" />
                  {/* Mind Stone (Glow) */}
                  <circle cx="0" cy="-10" r="3" fill="#fbbf24" filter="url(#strongGlow)" />
                  <circle cx="-6" cy="-5" r="2" fill="#1a2b4b" />
                  <circle cx="6" cy="-5" r="2" fill="#1a2b4b" />
                  <path d="M-2 8 Q0 9 2 8 L0 10 Z" fill="#1a2b4b" />
                </g>

                {/* Acessórios */}
                <g transform="translate(-25, 10) rotate(-20)">
                  <rect x="-2" y="0" width="4" height="20" fill="#78350f" />
                  <rect x="-8" y="-5" width="16" height="8" fill="#fbbf24" filter="url(#glow)" />
                </g>
                <g transform="translate(25, 10)">
                  <circle r="8" fill="#3b82f6" opacity="0.6" filter="url(#glow)" />
                  <motion.circle r="8" fill="url(#holoBlue)" animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 2, repeat: Infinity }} />
                </g>
              </motion.g>
            </g>

            {/* ==================== 2. CTO (Topo - Tech Lead Master) ==================== */}
            <g transform="translate(0, -140)">


              <motion.g animate={{ y: [-4, 4, -4] }} transition={{ duration: 4, repeat: Infinity }}>
                {/* Servidores Holográficos Avançados */}
                <rect x="-45" y="-20" width="12" height="40" fill="#0f172a" stroke="#3b82f6" strokeWidth="0.5" opacity="0.9" />
                <rect x="35" y="-20" width="12" height="40" fill="#0f172a" stroke="#3b82f6" strokeWidth="0.5" opacity="0.9" />
                <motion.rect x="-43" y="-15" width="8" height="2" fill="#22c55e" animate={{ opacity: [1, 0.3] }} transition={{ duration: 0.2, repeat: Infinity }} />
                <motion.rect x="37" y="-5" width="8" height="2" fill="#ef4444" animate={{ opacity: [1, 0.3] }} transition={{ duration: 0.8, repeat: Infinity }} />

                {/* Personagem CTO */}
                <g>
                  {/* Corpo */}
                  <path d="M-20 25 Q-45 35 -40 10 Q-35 -10 -20 5 Z" fill="#d96418" />
                  <path d="M-40 10 Q-38 -5 -25 5" fill="white" opacity="0.9" />
                  <path d="M-15 20 C-20 35, 20 35, 15 20 L10 10 L-10 10 Z" fill="#f58025" />
                  <path d="M-8 20 C-10 30, 10 30, 8 20 L5 15 L-5 15 Z" fill="#fff5eb" />
                  {/* Cabeça com Óculos AR */}
                  <g transform="translate(0, 0)">
                    <path d="M-15 -10 L-25 -30 L-5 -20 Z" fill="#f58025" />
                    <path d="M15 -10 L25 -30 L5 -20 Z" fill="#f58025" />
                    <ellipse cx="0" cy="-5" rx="20" ry="16" fill="#f58025" />
                    <path d="M-20 -5 Q-15 12 0 12 Q15 12 20 -5 Q10 0 0 5 Q-10 0 -20 -5" fill="white" />
                    {/* AR Glasses */}
                    <rect x="-14" y="-8" width="28" height="8" rx="2" fill="#000" opacity="0.8" />
                    <line x1="-14" y1="-4" x2="14" y2="-4" stroke="#22c55e" strokeWidth="1" />
                  </g>
                  {/* Digitando no ar */}
                  <path d="M-12 20 L-20 25" stroke="#f58025" strokeWidth="4" strokeLinecap="round" />
                  <path d="M12 20 L20 25" stroke="#f58025" strokeWidth="4" strokeLinecap="round" />
                  <motion.rect x="-25" y="28" width="50" height="15" fill="#3b82f6" opacity="0.2" rx="2"
                    animate={{ scaleX: [1, 1.1, 1] }} transition={{ duration: 0.2, repeat: Infinity }}
                  />
                </g>
              </motion.g>
            </g>

            {/* ==================== 3. PRODUCT MANAGER (Esquerda - Architect with Empathy) ==================== */}
            <g transform="translate(-180, 0)">


              {/* Wireframe Cube with HEART inside (User-Centric Structure) */}
              <motion.g transform="translate(-45, -20)">
                <motion.g animate={{ rotateY: 360, rotateX: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
                  <rect x="-12" y="-12" width="24" height="24" fill="none" stroke="#ec4899" strokeWidth="1" opacity="0.6" />
                  <path d="M-12 -12 L6 -6 M12 -12 L30 -6" stroke="#ec4899" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.3" />
                </motion.g>
                {/* The Empathy Core */}
                <motion.path
                  d="M0 -3 C-4 -7, -8 -3, -8 2 C-8 8, 0 12, 0 12 C0 12, 8 8, 8 2 C8 -3, 4 -7, 0 -3"
                  fill="#ec4899"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.g>

              {/* Blueprint Floor Projection */}
              <motion.ellipse cx="0" cy="40" rx="30" ry="10" fill="none" stroke="#ec4899" strokeWidth="1" strokeDasharray="4 2"
                animate={{ rx: [30, 35, 30], opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }}
              />

              <motion.g animate={{ y: [3, -3, 3] }} transition={{ duration: 5, repeat: Infinity }}>
                <g>
                  {/* Corpo e Cabeça */}
                  <path d="M-15 25 Q-35 40 -35 20 Q-30 0 -15 15" fill="#d96418" />
                  <path d="M-35 20 Q-32 10 -20 15" fill="white" opacity="0.9" />
                  <path d="M-15 20 C-20 35, 20 35, 15 20 L10 10 L-10 10 Z" fill="#f58025" />
                  <path d="M-8 20 C-10 30, 10 30, 8 20 L5 15 L-5 15 Z" fill="#fff5eb" />
                  <g transform="translate(0, 0)">
                    <path d="M-15 -10 L-25 -30 L-5 -20 Z" fill="#f58025" />
                    <path d="M15 -10 L25 -30 L5 -20 Z" fill="#f58025" />
                    <ellipse cx="0" cy="-5" rx="20" ry="16" fill="#f58025" />
                    <path d="M-20 -5 Q-15 12 0 12 Q15 12 20 -5 Q10 0 0 5 Q-10 0 -20 -5" fill="white" />
                    <circle cx="-6" cy="-5" r="2" fill="#1a2b4b" />
                    <circle cx="6" cy="-5" r="2" fill="#1a2b4b" />
                    <path d="M-2 8 Q0 9 2 8 L0 10 Z" fill="#1a2b4b" />
                  </g>

                  {/* Braço com User Journey Map (Tablet/Prancheta) */}
                  <path d="M15 15 L25 10" stroke="#f58025" strokeWidth="4" strokeLinecap="round" />
                  <g transform="translate(30, 8) rotate(-10)">
                    <rect x="-8" y="-10" width="16" height="20" fill="white" stroke="#ec4899" strokeWidth="1" rx="2" />
                    <path d="M-5 -5 L-2 -2 L2 -8" fill="none" stroke="#22c55e" strokeWidth="1" />
                    <line x1="-5" y1="0" x2="5" y2="0" stroke="#cbd5e1" strokeWidth="1" />
                    <line x1="-5" y1="4" x2="5" y2="4" stroke="#cbd5e1" strokeWidth="1" />
                  </g>

                  {/* Mão Pensativa (No queixo) */}
                  <path d="M-10 15 L-5 5" stroke="#f58025" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="-5" cy="5" r="3" fill="#f58025" />
                </g>
              </motion.g>
            </g>

            {/* ==================== 4. HEAD DE MARKETING (Direita - Broadcaster) ==================== */}
            <g transform="translate(180, 0)">
              <rect x="-60" y="-60" width="120" height="24" rx="12" fill="#22c55e" />
              <text x="0" y="-44" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">HEAD DE MKT & VENDAS</text>


              {/* Broadcast Waves */}
              <g transform="translate(30, 20) rotate(-20)">
                <motion.path d="M0 0 Q10 -5 10 10" stroke="#22c55e" strokeWidth="2" fill="none" animate={{ opacity: [1, 0], scale: [1, 1.5] }} transition={{ duration: 1, repeat: Infinity }} />
                <motion.path d="M5 0 Q20 -10 20 20" stroke="#22c55e" strokeWidth="2" fill="none" animate={{ opacity: [1, 0], scale: [1, 1.5] }} transition={{ duration: 1, repeat: Infinity, delay: 0.3 }} />
              </g>

              {/* Live Chart Background */}
              <polyline points="-40,-10 -20,10 0,-20 20,-10 40,-30" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
              <motion.circle cx="40" cy="-30" r="3" fill="#22c55e" animate={{ r: [3, 5, 3] }} transition={{ duration: 1, repeat: Infinity }} />

              <motion.g animate={{ y: [3, -3, 3] }} transition={{ duration: 4.5, repeat: Infinity }}>
                <g>
                  <path d="M15 25 Q35 35 30 10 Q25 -5 15 10" fill="#d96418" />
                  <path d="M30 10 Q28 0 20 5" fill="white" opacity="0.9" />
                  <path d="M-15 20 C-20 35, 20 35, 15 20 L10 10 L-10 10 Z" fill="#f58025" />
                  <path d="M-8 20 C-10 30, 10 30, 8 20 L5 15 L-5 15 Z" fill="#fff5eb" />
                  {/* Gravata Mkt */}
                  <path d="M0 15 L3 25 L0 28 L-3 25 Z" fill="#ea580c" stroke="#9a3412" strokeWidth="0.5" />
                  <g transform="translate(0, 0)">
                    <path d="M-15 -10 L-25 -30 L-5 -20 Z" fill="#f58025" />
                    <path d="M15 -10 L25 -30 L5 -20 Z" fill="#f58025" />
                    <ellipse cx="0" cy="-5" rx="20" ry="16" fill="#f58025" />
                    <path d="M-20 -5 Q-15 12 0 12 Q15 12 20 -5 Q10 0 0 5 Q-10 0 -20 -5" fill="white" />
                    <circle cx="-6" cy="-5" r="2" fill="#1a2b4b" />
                    <circle cx="6" cy="-5" r="2" fill="#1a2b4b" />
                    {/* Smile */}
                    <path d="M-5 8 Q0 12 5 8" fill="none" stroke="#1a2b4b" strokeWidth="1.5" />
                  </g>
                  {/* Megafone Futurista */}
                  <path d="M-10 20 L-20 25" stroke="#d96418" strokeWidth="4" strokeLinecap="round" />
                  <g transform="translate(-25, 25) rotate(-20)">
                    <path d="M0 0 L-15 -8 L-15 8 Z" fill="white" stroke="#22c55e" strokeWidth="1" />
                    <circle cx="0" cy="0" r="4" fill="#22c55e" />
                  </g>
                </g>
              </motion.g>
            </g>

            {/* ==================== 5. COO (Baixo - Operations Engine) ==================== */}
            <g transform="translate(0, 140)">
              <rect x="-25" y="55" width="50" height="20" rx="10" fill="#f58025" />
              <text x="0" y="69" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">COO</text>


              {/* Conveyor Belt / Base */}
              <rect x="-50" y="25" width="100" height="10" rx="5" fill="#334155" />
              <motion.line x1="-40" y1="30" x2="40" y2="30" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 5" animate={{ strokeDashoffset: [-10, 0] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />

              {/* Engrenagens de Operação Conectadas */}
              <motion.g animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} transform="translate(45, 10)">
                <path d="M-10 -10 L10 10 M-10 10 L10 -10 M0 -14 L0 14 M-14 0 L14 0" stroke="#cbd5e1" strokeWidth="4" />
                <circle r="10" fill="white" stroke="#f58025" strokeWidth="2" />
              </motion.g>
              <motion.g animate={{ rotate: -360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} transform="translate(-45, 0)">
                <path d="M-8 -8 L8 8 M-8 8 L8 -8 M0 -12 L0 12 M-12 0 L12 0" stroke="#cbd5e1" strokeWidth="3" />
                <circle r="8" fill="white" stroke="#f58025" strokeWidth="2" />
              </motion.g>

              <motion.g animate={{ y: [-4, 4, -4] }} transition={{ duration: 5.5, repeat: Infinity }}>
                <g>
                  <path d="M20 10 Q40 10 35 -10 Q25 -20 15 -10" fill="#d96418" />
                  <path d="M35 -10 Q32 -15 25 -15" fill="white" opacity="0.9" />
                  <path d="M-15 10 C-20 25, 20 25, 15 10 L10 0 L-10 0 Z" fill="#f58025" />
                  <path d="M-8 10 C-10 20, 10 20, 8 10 L5 5 L-5 5 Z" fill="#fff5eb" />
                  <g transform="translate(0, -10)">
                    <path d="M-15 -10 L-25 -30 L-5 -20 Z" fill="#f58025" />
                    <path d="M15 -10 L25 -30 L5 -20 Z" fill="#f58025" />
                    <ellipse cx="0" cy="-5" rx="20" ry="16" fill="#f58025" />
                    <path d="M-20 -5 Q-15 12 0 12 Q15 12 20 -5 Q10 0 0 5 Q-10 0 -20 -5" fill="white" />
                    <circle cx="-6" cy="-5" r="2" fill="#1a2b4b" />
                    <circle cx="6" cy="-5" r="2" fill="#1a2b4b" />
                    {/* Headset Avançado */}
                    <path d="M-20 -10 C-20 -30, 20 -30, 20 -10" fill="none" stroke="#1f2937" strokeWidth="2" />
                    <rect x="-22" y="-12" width="6" height="12" rx="2" fill="#1f2937" />
                    <path d="M-20 -6 L-24 6 L-12 10" fill="none" stroke="#1f2937" strokeWidth="1" />
                    <circle cx="-12" cy="10" r="2" fill="#f58025" filter="url(#glow)" />
                  </g>
                  {/* Multitasking Arms */}
                  <path d="M-12 10 L-25 15" stroke="#f58025" strokeWidth="4" strokeLinecap="round" />
                  <path d="M12 10 L25 15" stroke="#f58025" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="-25" cy="15" r="4" fill="#22c55e" /> {/* Status OK */}
                  <circle cx="25" cy="15" r="4" fill="#3b82f6" /> {/* Task */}
                </g>
              </motion.g>
            </g>

          </g>

          {/* ==================== CONEXÃO SAÍDA ==================== */}
          <g>
            <path d="M1100 400 L1280 400" stroke="#E2E8F0" strokeWidth="6" strokeLinecap="round" />
            <motion.path
              d="M1100 400 L1280 400"
              stroke="url(#goldGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray="20 20"
              animate={{ strokeDashoffset: [0, -40] }}
              transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
              filter="url(#glow)"
            />
            {/* Output Particles */}
            {[0, 1, 2].map(i => (
              <motion.circle
                key={i}
                r="5"
                fill="#FCD34D"
                filter="url(#strongGlow)"
                animate={{ cx: [1100, 1280], cy: [400, 400], opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.5, ease: "linear" }}
              />
            ))}
          </g>

          {/* ==================== 3. OUTPUT ZONE (Direita) ==================== */}
          <g transform="translate(1400, 400) scale(1.4)">
            <motion.circle cx="0" cy="0" r="70" fill="#f0fdf4" stroke="#86efac" strokeWidth="1" animate={{ r: [70, 75, 70], strokeOpacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} />
            <text x="0" y="100" textAnchor="middle" className="text-[10px] font-bold fill-navy-800" style={{ fontFamily: 'Space Grotesk' }}>SOLUÇÃO VALIDADA</text>

            {/* Cubo Flutuante Complexo */}
            <motion.g animate={{ y: [-8, 8, -8], rotateY: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
              <path d="M0 40 L-35 20 L-35 -20 L0 0 L35 -20 L35 20 Z" fill="#22c55e" opacity="0.9" />
              <path d="M0 0 L0 -40 L-35 -60 L-35 -20 Z" fill="#16a34a" />
              <path d="M0 0 L35 -20 L35 -60 L0 -40 Z" fill="#4ade80" />
              <circle cx="0" cy="-20" r="10" fill="white" opacity="0.5" />
              <path d="M-10 -30 L0 -20 L15 -45" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </motion.g>


            <g>
              {[0, 120, 240].map((deg, i) => (
                <motion.g key={i} animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: i }}>
                  <circle cx="0" cy="-90" r="6" fill="#fbbf24" />
                </motion.g>
              ))}
            </g>
          </g>

        </svg>
      </motion.div>
    </motion.div>
  );
};