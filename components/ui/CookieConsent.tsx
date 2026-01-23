import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, ShieldCheck } from 'lucide-react';

// DECLARE YOUR TRACKING IDs HERE
const GOOGLE_ANALYTICS_ID = 'G-XXXXXXXXXX'; // Ex: G-ABC1234567
const FACEBOOK_PIXEL_ID = 'XXXXXXXXXXXXXXX'; // Ex: 123456789012345

// Define types for window to avoid TS errors
declare global {
    interface Window {
        dataLayer: any[];
        fbq: any;
    }
}


export const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to inject scripts into the HEAD
    const loadTrackingScripts = () => {
        if (typeof window === 'undefined') return;

        // 1. Google Analytics
        if (!document.getElementById('ga-script')) {
            const scriptGA = document.createElement('script');
            scriptGA.id = 'ga-script';
            scriptGA.async = true;
            scriptGA.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;
            document.head.appendChild(scriptGA);

            const scriptConfig = document.createElement('script');
            scriptConfig.id = 'ga-config';
            scriptConfig.innerHTML = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GOOGLE_ANALYTICS_ID}');
            `;
            document.head.appendChild(scriptConfig);
            console.log('Google Analytics loaded');
        }

        // 2. Facebook Pixel
        if (!document.getElementById('fb-pixel')) {
            const scriptPixel = document.createElement('script');
            scriptPixel.id = 'fb-pixel';
            scriptPixel.innerHTML = `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${FACEBOOK_PIXEL_ID}');
                fbq('track', 'PageView');
            `;
            document.head.appendChild(scriptPixel);
            console.log('Facebook Pixel loaded');
        }
    };

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');

        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        } else if (consent === 'true') {
            // If already accepted, load scripts immediately on mount
            loadTrackingScripts();
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'true');
        setIsVisible(false);
        loadTrackingScripts();
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);
        // Optional: Remove scripts if they were somehow loaded, or just do nothing
        // Typically we just don't load them.
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:w-[400px] z-[100]"
                >
                    <div className="relative overflow-hidden bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-3xl p-6 group">
                        {/* Background Glow */}
                        <div className="absolute -top-24 -left-24 w-48 h-48 bg-fox-500/10 rounded-full blur-[80px] group-hover:bg-fox-500/20 transition-colors duration-700" />

                        <div className="relative flex flex-col gap-4">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl bg-fox-500/10 flex items-center justify-center text-fox-600">
                                        <Cookie size={22} className="animate-pulse" />
                                    </div>
                                    <h3 className="font-display font-bold text-navy-800 text-lg">Cookies e Privacidade</h3>
                                </div>
                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-400 hover:text-gray-600"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            <p className="text-sm text-gray-600 leading-relaxed">
                                Utilizamos cookies para personalizar sua experiência, analisar o tráfego do site e garantir que você aproveite ao máximo o <span className="text-fox-600 font-semibold">SanFran InovaLab</span>.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 mt-2">
                                <button
                                    onClick={handleAccept}
                                    className="flex-1 px-6 py-3 bg-navy-800 text-white rounded-2xl font-medium hover:bg-fox-600 transition-all duration-300 hover:shadow-lg hover:shadow-fox-500/20 active:scale-95"
                                >
                                    Aceitar Tudo
                                </button>
                                <button
                                    onClick={handleDecline}
                                    className="flex-1 px-6 py-3 bg-white/50 text-navy-800 border border-gray-200 rounded-2xl font-medium hover:bg-white hover:border-gray-300 transition-all duration-300 active:scale-95 text-sm"
                                >
                                    Apenas Essenciais
                                </button>
                            </div>

                            <div className="flex items-center gap-2 text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                                <ShieldCheck size={12} className="text-green-500" />
                                Sua segurança é nossa prioridade
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
