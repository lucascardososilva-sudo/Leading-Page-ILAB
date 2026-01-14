import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Wrench, Zap, LayoutDashboard, Code2, BarChart, Network } from 'lucide-react';

const FEATURES = [
  {
    id: 'poc',
    title: "POC & Deep Tools",
    subtitle: "Do Slide ao Código",
    icon: Wrench,
    visualIcon: Code2,
    description: "Muitos centros param no 'Pitch'. Nós oferecemos o ferramental profundo para construir Provas de Conceito (POC) funcionais, indo além do slide para o código e a arquitetura real.",
    color: "from-fox-500 to-orange-400"
  },
  {
    id: 'validation',
    title: "Validação Ágil",
    subtitle: "Dados, não suposições",
    icon: Zap,
    visualIcon: BarChart,
    description: "Não validamos ideias com 'achismos'. Utilizamos metodologias de validação de teses de negócios ágeis baseadas em dados reais, testando a viabilidade de mercado antes de escrever uma linha de código.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 'startup',
    title: "Imersão Startup",
    subtitle: "Vivência Corporativa Real",
    icon: LayoutDashboard,
    visualIcon: Network,
    description: "Uma imersão real no organograma de uma startup de ponta. Os membros vivenciam papéis reais, desde o 'Build Tech' desenvolvendo a solução até o 'Head of Outreach' vendendo a visão.",
    color: "from-purple-600 to-pink-500"
  }
];

export const ValueProposition: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Background transformation for "Imersão"
  // Logic: When we reach the last card (startup), darken the background
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.4, 0.6, 0.7, 1],
    ["#ffffff", "#ffffff", "#f0ece2", "#f0ece2", "#0f172a", "#0f172a"]
  );

  return (
    <section ref={containerRef} className="relative h-[400vh]">
      {/* Sticky Background */}
      <motion.div
        style={{ backgroundColor: bgColor }}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden transition-colors duration-700"
      >
        {/* Speed Lines for Validação Ágil */}
        <SpeedLines progress={scrollYProgress} />

        {/* Neon Grid for Imersão */}
        <NeonGrid progress={scrollYProgress} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              style={{
                opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0.5]),
                y: useTransform(scrollYProgress, [0, 0.1], [0, -20])
              }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold text-navy-800 mb-4 transition-colors duration-700">
                Metodologia <span className="text-fox-500">Imersiva</span>
              </h2>

            </motion.div>
          </div>

          <div className="relative flex justify-center items-center h-[500px]">
            {FEATURES.map((feature, index) => (
              <StackedCard
                key={feature.id}
                feature={feature}
                index={index}
                total={FEATURES.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

interface StackedCardProps {
  feature: typeof FEATURES[0];
  index: number;
  total: number;
  progress: any;
}

const StackedCard: React.FC<StackedCardProps> = ({ feature, index, total, progress }) => {
  // Logic for cycling:
  // Offset ranges per card
  const start = index / total;
  const end = (index + 1) / total;

  // Transition parameters
  // Each card goes from "waiting" to "active" to "exit"
  const y = useTransform(progress, [start - 0.1, start, end, end + 0.1], [100, 0, 0, -100]);
  const scale = useTransform(progress, [start - 0.1, start, end, end + 0.1], [0.8, 1, 1, 0.9]);
  const opacity = useTransform(progress, [start - 0.1, start, end, end + 0.1], [0, 1, 1, 0]);
  const rotate = useTransform(progress, [start, end], [0, index % 2 === 0 ? 2 : -2]);

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        rotate,
        zIndex: total - index
      }}
      className="absolute w-full max-w-2xl bg-white rounded-[2.5rem] p-1 shadow-2xl overflow-hidden border border-gray-100"
    >
      <div className="bg-white rounded-[2.4rem] p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shrink-0 shadow-lg`}>
            <feature.icon size={48} />
          </div>

          <div className="text-center md:text-left">
            <span className="text-fox-500 font-bold uppercase tracking-widest text-xs mb-2 block">
              {feature.subtitle}
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-navy-800 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>

        {/* Visual Decoration */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i <= index ? 'bg-fox-500' : 'bg-gray-200'}`} />
            ))}
          </div>
          <div className="text-navy-800/20">
            <feature.visualIcon size={64} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SpeedLines: React.FC<{ progress: any }> = ({ progress }) => {
  // Active during the middle card (index 1) which is "Validação Ágil"
  const opacity = useTransform(progress, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0]);
  const terms = ["RAG", "Contratos", "Minutas inteligentes", "Vetores", "LLM", "Parsing"];

  return (
    <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none z-0">
      {/* Rays */}
      {[...Array(60)].map((_, i) => (
        <motion.div
          key={`ray-${i}`}
          className="absolute bg-gradient-to-r from-transparent via-blue-400/60 to-transparent h-[1.5px] w-[400px]"
          style={{
            top: `${Math.random() * 100}%`,
            left: '-20%',
          }}
          animate={{
            x: ['0vw', '150vw'],
          }}
          transition={{
            duration: 0.3 + Math.random() * 0.4,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2
          }}
        />
      ))}

      {/* Floating Terms */}
      {terms.map((term, i) => (
        <motion.div
          key={`term-${i}`}
          className="absolute text-blue-400/40 font-mono text-xs font-bold whitespace-nowrap"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: '-20%',
          }}
          animate={{
            x: ['0vw', '150vw'],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 0.8 + Math.random() * 1,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5
          }}
        >
          {term}
        </motion.div>
      ))}
    </motion.div>
  );
};

const NeonGrid: React.FC<{ progress: any }> = ({ progress }) => {
  // Active during the last card (index 2) which is "Imersão Startup"
  // Range is 0.66 to 1.0
  const opacity = useTransform(progress, [0.65, 0.75, 0.9, 1], [0, 0.6, 0.6, 0.1]);
  const y = useTransform(progress, [0.66, 1], [0, -100]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
              linear-gradient(to right, rgba(245, 128, 37, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(245, 128, 37, 0.05) 1px, transparent 1px)
            `,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'center center',
        }}
      />
      {/* Pulsing Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fox-500/10 rounded-full blur-[120px] animate-pulse" />
    </motion.div>
  );
};