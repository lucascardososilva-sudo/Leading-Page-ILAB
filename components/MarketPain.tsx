import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Coins, GraduationCap, Split, Globe } from 'lucide-react';

export const MarketPain: React.FC = () => {
  const pains = [
    {
      title: "O Abismo da Tradução",
      desc: "Quem entende de tecnologia ignora as nuances e travas jurídicas. Quem vive o Direito tropeça no código. O resultado? Projetos caros que não resolvem a dor real do usuário.",
      icon: Split
    },
    {
      title: "Soluções Mascaradas",
      desc: "O mercado vende ferramentas genéricas como se fossem revoluções personalizadas. Escritórios e GovTechs recebem 'mil serviços' que não dialogam com o caso concreto.",
      icon: AlertTriangle
    },
    {
      title: "Descompasso Global",
      desc: "Parte considerável do mercado não acompanha os grandes centros de inovação. Baseiam-se em soluções atrasadas enquanto, lá fora, o jogo já está em outra fase de tecnologia e modelos de negócios.",
      icon: Globe
    },
    {
      title: "Custo do P&D",
      desc: "Qual startup tem caixa para errar? P&D profundo é um luxo proibitivo para o mercado privado, que exige retorno imediato. Sem pesquisa, não há inovação real.",
      icon: Coins
    }
  ];

  return (
    <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-navy-800/50 -skew-x-12 transform origin-top translate-x-1/3 will-change-transform" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fox-600/10 rounded-full blur-3xl pointer-events-none will-change-transform" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="max-w-4xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white leading-tight">
              GovTech, LawTech e LegalTech <br />
              <span className="text-fox-500">travadas na barreira da inovação.</span>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              Escritórios de advocacia, startups e instituições governamentais compartilham a mesma ambição de se alinharem às novas tecnologias, mas encontram barreiras estruturais que o mercado tradicional não consegue derrubar sozinho.
            </p>
          </motion.div>
        </div>

        {/* The Pain Grid - Adjusted for 4 items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pains.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover="hover"
              className="relative bg-navy-800 p-6 rounded-2xl border border-navy-700 hover:border-fox-500/50 transition-colors group flex flex-col overflow-hidden will-change-transform"
            >
              <div className="w-12 h-12 bg-navy-900 rounded-lg flex items-center justify-center mb-6 text-fox-500 transition-transform duration-300 group-hover:scale-110">
                <pain.icon size={24} />
              </div>

              <h3 className="text-lg font-bold font-display mb-4 text-white leading-tight group-hover:text-fox-400 transition-colors uppercase tracking-tight relative z-10">
                {pain.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed flex-grow relative z-10">
                {pain.desc}
              </p>

              {/* Optimized Hover Gradient (No heavy scanline) */}
              <motion.div
                variants={{
                  hover: { opacity: 0.1 }
                }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-fox-600 to-transparent pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* The University Solution - Featured Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-fox-600 to-fox-500 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decor */}
          <div className="absolute -right-10 -bottom-10 opacity-20 rotate-12">
            <GraduationCap size={200} className="text-white" />
          </div>

          <div className="relative z-10 md:w-3/4">
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-4 text-white">
              Nascemos para unificar a Inovação Jurídica no Brasil
            </h3>
            <p className="text-white/90 text-lg leading-relaxed mb-0">
              Não basta entender de Direito, negócios ou de Tecnologia isoladamente. É preciso de grandes talentos criativos e com perfil polímata que moram nas universidades. O SanFran InovaLab oferece a infraestrutura para P&D que o mercado não pode custear, unindo a força da USP para prototipar o futuro, pensando empaticamente nos Stakeholders da solução.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};