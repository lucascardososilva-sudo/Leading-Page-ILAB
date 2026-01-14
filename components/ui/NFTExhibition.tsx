import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const NFTExhibition: React.FC = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[320px] lg:max-w-[380px] group"
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 backdrop-blur-sm"
            >
                {/* Image Section */}
                <div className="relative aspect-square overflow-hidden bg-fox-500/10">
                    <img
                        src="/reynard-nft.png"
                        alt="Reynard NFT"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Like Counter Overlay */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-sm">
                        <span className="text-red-500 text-sm">❤️</span>
                        <span className="text-navy-800 font-bold text-sm">125</span>
                    </div>

                    {/* Free Badge Overlay */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="absolute top-4 left-4 bg-gradient-to-br from-fox-500 to-orange-600 text-white px-3 py-1.5 rounded-xl flex items-center shadow-lg z-20 border border-white/20"
                    >
                        <span className="text-[10px] font-black uppercase tracking-widest leading-none">Edição Limitada</span>
                    </motion.div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info Section */}
                <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h4 className="text-2xl font-display font-bold text-navy-800">Reynard #1827</h4>
                            <p className="text-gray-500 text-sm">Reynard NFT</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center gap-1.5 text-fox-500 font-black">
                                <span className="text-xl">GRÁTIS</span>
                            </div>
                            <p className="text-gray-400 text-xs mt-1 leading-none italic font-medium">Resgate agora!</p>
                        </div>
                    </div>

                    <a
                        href="https://gotas.com/gota/1768414044897x001528323405718401"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-block py-4 bg-[#FFDB4D] hover:bg-[#FFD21A] text-navy-800 font-bold rounded-2xl transition-all duration-300 shadow-[0_4px_0_0_#D9B31A] active:shadow-none active:translate-y-[4px] text-center"
                    >
                        Resgate a sua NFT do SanFran InovaLab
                    </a>
                </div>
            </div>

            {/* Reflection Effect */}
            <motion.div
                style={{
                    transform: "translateZ(20px)",
                }}
                className="absolute -inset-4 bg-fox-500/20 rounded-[2.5rem] blur-2xl -z-10 opacity-0 group-hover:opacity-50 transition-opacity duration-500"
            />
        </motion.div>
    );
};
