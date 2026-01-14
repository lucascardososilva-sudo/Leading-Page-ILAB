import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  MODULE_1_BUSINESS,
  MODULE_1_TECH,
  MODULE_2_TRACKS
} from '../constants';
import {
  BookOpen,
  Cpu,
  Zap,
  ChevronRight,
  Dna,
  Binary,
  Star,
  CheckCircle2
} from 'lucide-react';

export const Education: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Global background transition: Cream (Module 1) to Deep Advanced Navy (Module 2)
  const bgColor = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.6, 0.9],
    ["#F9F9F5", "#F9F9F5", "#0a0f1e", "#0a0f1e"]
  );

  // Level Up progress indicator
  const levelProgress = useTransform(scrollYProgress, [0.3, 0.7], [0, 100]);

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-cream">
      <motion.div
        style={{ backgroundColor: bgColor }}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Background Decorative level-up icons */}
        <LevelUpParticles progress={scrollYProgress} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.div
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0]),
                y: useTransform(scrollYProgress, [0, 0.1], [0, 0])
              }}
            >
              <span className="text-fox-600 font-black uppercase tracking-[0.3em] text-xs">O Programa Evolutivo</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-navy-800">
                <motion.span style={{ color: useTransform(scrollYProgress, [0.5, 0.6], ["#1a2b4b", "#ffffff"]) }}>
                  A <span className="text-fox-500">Jornada</span> de Formação
                </motion.span>
              </h2>
            </motion.div>
          </div>

          <div className="relative flex justify-center items-center h-[600px] w-full max-w-5xl mx-auto">
            {/* Card 1: Module 1 */}
            <ModuleCard
              index={0}
              progress={scrollYProgress}
              title="Módulo 1: Fundamentos"
              subtitle="Nível Primário: Alfabetização"
              theme="light"
            >
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="space-y-3">
                  <h4 className="text-navy-800 font-bold flex items-center gap-2 mb-4">
                    <BookOpen size={18} className="text-fox-500" /> Negócios
                  </h4>
                  {MODULE_1_BUSINESS.map((t, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <t.icon size={16} className="text-fox-500" />
                      <span className="text-xs font-bold text-navy-800">{t.title}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <h4 className="text-navy-800 font-bold flex items-center gap-2 mb-4">
                    <Binary size={18} className="text-blue-500" /> Tecnologia
                  </h4>
                  {MODULE_1_TECH.map((t, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <t.icon size={16} className="text-blue-500" />
                      <span className="text-xs font-bold text-navy-800">{t.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ModuleCard>

            {/* Card 2: Module 2 */}
            <ModuleCard
              index={1}
              progress={scrollYProgress}
              title="Módulo 2: Trilhas & Squads"
              subtitle="Nível Superior: Diferenciação"
              theme="dark"
            >
              <div className="grid md:grid-cols-3 gap-6">
                {MODULE_2_TRACKS.map((track, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 group hover:bg-white/10 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-fox-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-fox-500/20">
                      <track.icon size={20} />
                    </div>
                    <h5 className="text-base font-bold text-white mb-2 leading-tight">{track.title}</h5>
                    <p className="text-[10px] text-gray-400 mb-4 line-clamp-2 leading-relaxed">{track.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {track.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="text-[8px] bg-white/5 text-fox-400 px-2 py-0.5 rounded-full uppercase font-bold tracking-tighter">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-fox-500/20 to-transparent border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black text-white uppercase tracking-widest">A Trilha de Polinização</div>
                  <div className="text-[10px] text-gray-500 italic">Conexão final entre Tech, Direito e Negócios.</div>
                </div>
                <Star size={24} className="text-fox-500 animate-pulse" />
              </div>
            </ModuleCard>
          </div>

          {/* Level Progress Bar */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-1.5 bg-gray-200/20 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-fox-500 shadow-[0_0_10px_rgba(245,128,37,0.5)]"
              style={{ width: levelProgress }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const ModuleCard: React.FC<{
  index: number;
  progress: any;
  title: string;
  subtitle: string;
  theme: 'light' | 'dark';
  children: React.ReactNode;
}> = ({ index, progress, title, subtitle, theme, children }) => {
  // Logic: 
  // Card 0: 0 -> 0.4 (Center), 0.5 -> Exit
  // Card 1: 0.5 -> Entrance, 0.6 -> 1 (Center)
  const start = index === 0 ? 0.0 : 0.5;
  const end = index === 0 ? 0.5 : 1.0;

  const y = useTransform(progress, [start - 0.1, start, end, end + 0.1], [index === 0 ? 0 : 200, 0, 0, index === 0 ? -200 : 0]);
  const scale = useTransform(progress, [start - 0.1, start, end, end + 0.1], [0.8, 1, 1, 0.8]);
  const opacity = useTransform(progress, [start - 0.05, start, end, end + 0.05], [0, 1, 1, 0]);
  const rotateX = useTransform(progress, [start, end], [index === 0 ? 0 : -10, index === 0 ? 10 : 0]);

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        rotateX,
        zIndex: index === 0 ? 10 : 20,
        perspective: 1000
      }}
      className={`absolute w-full max-w-4xl p-1 rounded-[3rem] shadow-2xl overflow-hidden will-change-transform transform-gpu
        ${theme === 'light' ? 'bg-white border border-gray-100' : 'bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-fox-500/10'}
      `}
    >
      <div className={`p-8 md:p-12 rounded-[2.8rem] h-full ${theme === 'light' ? 'bg-white' : 'bg-[#0a0f1e]/80'}`}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10 pb-6 border-b border-gray-100/10">
          <div>
            <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${theme === 'light' ? 'text-fox-500' : 'text-fox-400'}`}>
              {subtitle}
            </span>
            <h3 className={`text-3xl md:text-4xl font-display font-black tracking-tight ${theme === 'light' ? 'text-navy-800' : 'text-white'}`}>
              {title}
            </h3>
          </div>

        </div>

        {children}
      </div>
    </motion.div>
  );
};

const LevelUpParticles: React.FC<{ progress: any }> = ({ progress }) => {
  // Flash effect when transitioning at 0.5
  const flash = useTransform(progress, [0.45, 0.5, 0.55], ["rgba(255,255,255,0)", "rgba(245, 128, 37, 0.4)", "rgba(255,255,255,0)"]);
  const iconOpacity = useTransform(progress, [0.4, 0.6], [0, 0.2]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        style={{ backgroundColor: flash }}
        className="absolute inset-0 z-50 mix-blend-overlay"
      />

      <motion.div style={{ opacity: iconOpacity }} className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Dna size={800} className="text-fox-500/10" />
        </motion.div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-48">
          <Zap size={100} className="text-fox-400 animate-pulse" />
          <Cpu size={120} className="text-blue-400 animate-pulse delay-75" />
        </div>
      </motion.div>
    </div>
  );
};