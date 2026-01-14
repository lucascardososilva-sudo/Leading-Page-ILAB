import React from 'react';
import { motion } from 'framer-motion';
import { SQUAD_FEATURES } from '../constants';
import { BentoGrid, BentoItem } from './ui/BentoGrid';
import { SquadsIllustration } from './ui/SquadsIllustration';

export const Squads: React.FC = () => {
  return (
    <section id="squads" className="py-24 bg-cream relative border-b border-gray-100 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fox-100/50 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-fox-100 text-fox-600 font-bold uppercase tracking-wider text-xs mb-4">
              Nossa Fábrica de Soluções
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-800 mb-6">
              O Modelo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-fox-500 to-fox-600">Squads</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Deixamos para trás a teoria pura. Nossos squads operam como micro-startups interdisciplinares: recebem um problema real, desenvolvem a tecnologia e entregam um protótipo funcional.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <BentoGrid>
          {/* Main Visual - Spans full width or large part */}
          <BentoItem cols={3} rows={2} className="relative overflow-visible !bg-transparent !border-0 !shadow-none !p-0 hidden md:block">
            <div className="h-full flex items-center justify-center">
              <SquadsIllustration />
            </div>
          </BentoItem>

          {/* Mobile Illustration (Hidden on Desktop to avoid duplication if needed, or structured differently) */}
          <div className="md:hidden mb-8">
            <SquadsIllustration />
          </div>

          {/* Features */}
          {SQUAD_FEATURES.map((feature, index) => (
            <BentoItem key={index} cols={1} rows={1}>
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-fox-100 flex items-center justify-center text-fox-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-display font-bold text-navy-800 mb-3 group-hover:text-fox-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </BentoItem>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};
