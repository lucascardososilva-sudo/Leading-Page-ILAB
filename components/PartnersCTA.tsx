import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Rocket, Landmark, ArrowRight, HeartHandshake, MessageSquarePlus, Cpu, Globe, Database, ShieldCheck, Code2, Zap } from 'lucide-react';
import { InfiniteMarquee } from './ui/InfiniteMarquee';

export const PartnersCTA: React.FC = () => {
  const partnerTypes = [
    {
      title: "Você é um Escritório?",
      icon: Building2,
      description: "A advocacia mudou. Não deixe sua estrutura ficar para trás.",
      action: "Nossos squads realizam um diagnóstico dos seus processos e propõem automações e soluções de Legal Design personalizadas.",
      cta: "Agendar Diagnóstico"
    },
    {
      title: "Você é uma Startup?",
      icon: Rocket,
      description: "Falta braço para P&D ou validação jurídica do seu produto?",
      action: "Submeta seu gap tecnológico ou jurídico. Nós testamos, validamos e prototipamos a evolução do seu produto com rigor acadêmico.",
      cta: "Submeter Desafio"
    },
    {
      title: "Você é do Governo?",
      icon: Landmark,
      description: "Eficiência pública através de tecnologia (Civic Tech).",
      action: "Traga problemas complexos da gestão pública. Nossos squads desenham soluções focadas no cidadão e na desburocratização.",
      cta: "Propor Parceria"
    }
  ];

  const techStack = [
    { icon: Cpu, label: "AI Agents" },
    { icon: Database, label: "Big Data" },
    { icon: ShieldCheck, label: "Cybersecurity" },
    { icon: Globe, label: "Web3" },
    { icon: Code2, label: "Legal Ops" },
    { icon: Zap, label: "Automation" },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fox-50 via-white to-white opacity-60 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-bold text-navy-800 mb-6"
          >
            Traga seu problema para o Lab. <br />
            <span className="text-fox-500">Nós construímos a solução.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Conectamos gaps reais do mercado com a inteligência criativa da universidade. Selecione seu perfil abaixo e inicie a transformação.
          </motion.p>
        </div>

        {/* Institutional Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {partnerTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-fox-200 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="w-14 h-14 bg-navy-50 rounded-2xl flex items-center justify-center mb-6 text-navy-800 group-hover:bg-fox-500 group-hover:text-white transition-colors duration-300">
                <type.icon size={28} />
              </div>

              <h3 className="text-2xl font-display font-bold text-navy-800 mb-3 group-hover:text-fox-600 transition-colors">
                {type.title}
              </h3>

              <p className="text-gray-500 font-medium mb-4 text-sm uppercase tracking-wide">
                {type.description}
              </p>

              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {type.action}
              </p>

              <a
                href="#contact"
                className="w-full py-4 rounded-xl border border-navy-100 text-navy-800 font-bold flex items-center justify-center gap-2 group-hover:bg-navy-800 group-hover:text-white group-hover:border-transparent transition-all"
              >
                {type.cta} <ArrowRight size={18} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Marquee */}
        <div className="mb-20 py-10 border-y border-gray-50 bg-gray-50/50 backdrop-blur-sm">
          <p className="text-center text-gray-400 text-sm font-bold uppercase tracking-widest mb-8">Tecnologias e Metodologias</p>
          <InfiniteMarquee speed={30}>
            {techStack.map((tech, i) => (
              <div key={i} className="flex items-center gap-3 px-6 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <tech.icon size={24} className="text-fox-500" />
                <span className="font-display font-bold text-xl text-navy-800">{tech.label}</span>
              </div>
            ))}
          </InfiniteMarquee>
        </div>

        {/* General Interest Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-navy-50 rounded-3xl p-8 md:p-12 border border-navy-100 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          {/* Decorative Circle */}
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-fox-200 rounded-full blur-3xl opacity-50" />

          <div className="flex items-start gap-6 relative z-10 max-w-2xl">
            <div className="p-4 bg-white rounded-2xl shadow-sm text-fox-500 hidden md:block">
              <HeartHandshake size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-navy-800 mb-2">
                Você está perdido ou quer apenas apoiar?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tem interesse em aderir ao projeto como estudante, mentor ou fazer uma parceria institucional diferente? Venha também! Somos um ecossistema aberto.
              </p>
            </div>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-fox-500 text-white rounded-full font-bold hover:bg-fox-600 transition-colors shadow-lg shadow-fox-500/20"
            >
              <MessageSquarePlus size={20} />
              Fale Conosco
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};