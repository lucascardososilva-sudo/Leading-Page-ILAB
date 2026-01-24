
import React from 'react';
import { motion } from 'framer-motion';

import {
  ChevronRight,
  FileCode,
  PenTool,
  Bot,
  BarChart3,
  Wifi,
  Glasses,
  FileSearch,
  Cloud,
  Blocks,
  BrainCircuit
} from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';
import { Magnetic } from './ui/Magnetic';
import { NFTExhibition } from './ui/NFTExhibition';
import { InfiniteMarquee } from './ui/InfiniteMarquee';

export const Hero: React.FC = () => {
  const terms = [
    { label: "Contratos Inteligentes", icon: FileCode, color: "text-fox-600 bg-fox-100" },
    { label: "Agentes de IA", icon: Bot, color: "text-purple-600 bg-purple-100" },
    { label: "Jurimetria & Dados", icon: BarChart3, color: "text-green-600 bg-green-100" },
    { label: "Legal Design", icon: PenTool, color: "text-navy-600 bg-navy-100" },
    { label: "Internet das Coisas", icon: Wifi, color: "text-blue-600 bg-blue-100" },
    { label: "NFT e Metaverso", icon: Glasses, color: "text-pink-600 bg-pink-100" },
    { label: "Blockchain", icon: Blocks, color: "text-indigo-600 bg-indigo-100" },
    { label: "Machine Learning", icon: BrainCircuit, color: "text-rose-600 bg-rose-100" },
    { label: "Provas Digitais", icon: FileSearch, color: "text-amber-600 bg-amber-100" },
    { label: "Cloud", icon: Cloud, color: "text-sky-600 bg-sky-100" },
  ];

  return (
    <section id="hero" className="min-h-screen relative flex flex-col justify-center pt-32 pb-24 lg:py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-fox-50/80 via-white to-navy-50/50" />
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-fox-200/30 rounded-full blur-3xl opacity-60 animate-mesh mix-blend-multiply will-change-transform translate-z-0" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-navy-200/20 rounded-full blur-3xl opacity-60 animate-mesh delay-75 mix-blend-multiply will-change-transform translate-z-0" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center flex-grow">
        <div className="relative z-20">
          <ScrollReveal delay={0.1}>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-navy-800 leading-[1.1] mb-6 tracking-tight">
              O Futuro do <br />
              <span className="text-fox-500">Direito e Inovação</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              O SanFran InovaLab não é apenas um grupo de estudos. Somos um ecossistema incubando soluções funcionais para desafios institucionais reais usando tecnologias 4.0. Nós temos sede na USP, mas temos caráter interinstitucional presentes também em Escolas como a FGV, a Mackenzie e o IBMEC.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              <Magnetic>
                <a
                  href="#mission"
                  className="h-14 px-8 bg-navy-800 text-white rounded-full font-medium hover:bg-fox-500 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group"
                >
                  Explorar Ecossistema <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#squads"
                  className="h-14 px-8 bg-white/80 backdrop-blur-sm text-navy-800 border border-gray-200 rounded-full font-medium hover:border-fox-500 hover:text-fox-500 transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                >
                  Como os Squads Funcionam
                </a>
              </Magnetic>
            </div>
          </ScrollReveal>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end mt-16 mb-8 lg:my-0 w-full"
        >
          <div className="relative w-full max-w-[420px] lg:max-w-[500px] flex justify-center items-center mx-auto lg:mx-0">


            <NFTExhibition />
          </div>
        </motion.div>
      </div>


    </section>
  );
};