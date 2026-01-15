import React, { useState, useEffect, Suspense, lazy } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Lazy load heavy components
const Hero = lazy(() => import('./components/Hero').then(module => ({ default: module.Hero })));
const Squads = lazy(() => import('./components/Squads').then(module => ({ default: module.Squads })));
const Education = lazy(() => import('./components/Education').then(module => ({ default: module.Education })));
const Reynart = lazy(() => import('./components/Reynart').then(module => ({ default: module.Reynart })));
const PartnersCTA = lazy(() => import('./components/PartnersCTA').then(module => ({ default: module.PartnersCTA })));
const ValueProposition = lazy(() => import('./components/ValueProposition').then(module => ({ default: module.ValueProposition })));
const MarketPain = lazy(() => import('./components/MarketPain').then(module => ({ default: module.MarketPain })));
const MysteryTese = lazy(() => import('./components/MysteryTese').then(module => ({ default: module.MysteryTese })));
const VibeCoding = lazy(() => import('./components/VibeCoding').then(module => ({ default: module.VibeCoding })));
const ContactForm = lazy(() => import('./components/ContactForm').then(module => ({ default: module.ContactForm })));
const TermsOfUse = lazy(() => import('./components/TermsOfUse').then(module => ({ default: module.TermsOfUse })));

import { FloatingMascot } from './components/ui/FloatingMascot';
import { GlassNav } from './components/ui/GlassNav';
import { SmoothScrollLayout } from './components/ui/SmoothScrollLayout';
import { NAV_ITEMS } from './constants';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SmoothScrollLayout>
      <div className="min-h-screen font-sans selection:bg-fox-200 selection:text-navy-900">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-fox-500 origin-left z-50"
          style={{ scaleX }}
        />

        {/* Navigation */}
        <GlassNav items={NAV_ITEMS} />

        <main>
          <Suspense fallback={<div className="h-screen flex items-center justify-center bg-white"><div className="w-8 h-8 border-4 border-fox-500 border-t-transparent rounded-full animate-spin"></div></div>}>
            <Hero />

            {/* Mission Statement */}
            <section id="mission" className="py-20 bg-white border-y border-gray-100 relative overflow-hidden">
              <div className="absolute inset-0 bg-fox-50/50 pointer-events-none" />
              <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-2xl md:text-3xl font-display font-medium text-navy-800 leading-relaxed">
                    "Operamos não apenas como um centro de estudos, mas como um <span className="text-fox-500 underline decoration-fox-200 underline-offset-4">centro de interdisciplinaridade</span>. Unimos expertise em Direito, Tech e Negócios para promover reflexão crítica e gerar impacto social."
                  </h3>
                </div>
              </div>
            </section>

            <MarketPain />
            <ValueProposition />
            <MysteryTese />
            <VibeCoding />
            <Squads />
            <Education />
            <Reynart />
            <PartnersCTA />

            {/* Contact / Footer */}
            <section id="contact" className="py-20 bg-cream">
              <div className="container mx-auto px-6 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full overflow-hidden border-2 border-fox-500/20">
                  <img src="/lego-fox.jpg" alt="SanFran InovaLab Logo" className="w-full h-full object-cover opacity-80" />
                </div>
                <h2 className="text-3xl font-display font-bold text-navy-800 mb-6">
                  Pronto para inovar dentro das paredes da Sanfran?
                </h2>
                <div className="mt-12 max-w-4xl mx-auto">
                  <ContactForm />
                </div>
                <div className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
                  <p>© 2026 SanFran InovaLab. USP.</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-6">
                    <a href="https://www.instagram.com/sanfranlab/" target="_blank" rel="noopener noreferrer" className="hover:text-fox-500 transition-colors">Instagram</a>
                    <a href="https://br.linkedin.com/company/sanfran-lab" target="_blank" rel="noopener noreferrer" className="hover:text-fox-500 transition-colors">LinkedIn</a>
                    <button
                      onClick={() => setShowTerms(true)}
                      className="hover:text-fox-500 transition-colors cursor-pointer"
                    >
                      Termos de Uso
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <TermsOfUse isOpen={showTerms} onClose={() => setShowTerms(false)} />
        </Suspense>
      </div>
    </SmoothScrollLayout>
  );
};

export default App;