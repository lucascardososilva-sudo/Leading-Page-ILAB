import React, { useEffect } from 'react';
import Lenis from 'lenis';

interface SmoothScrollLayoutProps {
    children: React.ReactNode;
}

export const SmoothScrollLayout: React.FC<SmoothScrollLayoutProps> = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <div className="smooth-scroll-wrapper">{children}</div>;
};
