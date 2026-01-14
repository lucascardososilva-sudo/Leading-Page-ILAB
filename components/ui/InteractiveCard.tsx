import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon, ChevronDown, Sparkles } from 'lucide-react';

interface InteractiveCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  tags?: string[];
  delay?: number;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  title,
  description,
  icon: Icon,
  tags,
  delay = 0
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(245, 128, 37, 0.25)" }}
      onClick={() => setIsExpanded(!isExpanded)}
      className="bg-white rounded-2xl p-6 border-2 border-fox-100 shadow-sm relative overflow-hidden group h-full flex flex-col cursor-pointer select-none"
      style={{
        background: isExpanded
          ? 'linear-gradient(135deg, #fff 0%, #fff5eb 100%)'
          : 'white'
      }}
    >
      {/* Animated Glowing Border Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: [
            'inset 0 0 0 2px rgba(245, 128, 37, 0.1)',
            'inset 0 0 0 2px rgba(245, 128, 37, 0.4)',
            'inset 0 0 0 2px rgba(245, 128, 37, 0.1)',
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Pulsing Glow Effect - Top Right Corner */}
      <motion.div
        className="absolute -top-2 -right-2 w-16 h-16 rounded-full pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: 'radial-gradient(circle, rgba(245,128,37,0.4) 0%, transparent 70%)'
        }}
      />

      {/* Shimmer Effect Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="absolute inset-0 w-[200%]"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(245,128,37,0.1) 50%, transparent 100%)'
          }}
        />
      </motion.div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-fox-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />

      {/* Icon with pulse effect */}
      <div className="relative z-10 mb-4">
        <motion.div
          className="w-12 h-12 bg-fox-100 rounded-xl flex items-center justify-center text-fox-600 group-hover:bg-fox-500 group-hover:text-white transition-colors duration-300"
          animate={!isExpanded ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Icon size={24} strokeWidth={1.5} />
        </motion.div>

        {/* Sparkle indicator */}
        <motion.div
          className="absolute -top-1 -right-1 text-fox-500"
          animate={{
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Sparkles size={14} />
        </motion.div>
      </div>

      <h3 className="text-xl font-display font-bold text-navy-800 mb-2 z-10">{title}</h3>

      {/* Click indicator row */}
      <div className="flex items-center justify-between mb-3 z-10">
        <span className="text-xs font-semibold text-fox-500 uppercase tracking-wider">
          {isExpanded ? 'Clique para fechar' : 'Clique para saber mais'}
        </span>
        <motion.div
          animate={{
            y: isExpanded ? 0 : [0, 4, 0],
            rotate: isExpanded ? 180 : 0
          }}
          transition={{
            y: { duration: 1, repeat: Infinity },
            rotate: { duration: 0.3 }
          }}
          className="text-fox-500"
        >
          <ChevronDown size={20} />
        </motion.div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden z-10"
          >
            <div className="border-t border-fox-200 pt-4 mt-2">
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>

              {tags && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-xs font-medium px-3 py-1.5 bg-fox-500 text-white rounded-full shadow-sm"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Collapsed state - show truncated description */}
      {!isExpanded && (
        <p className="text-gray-500 text-sm leading-relaxed mb-4 z-10 flex-grow line-clamp-2">
          {description.substring(0, 80)}...
        </p>
      )}

      {/* Bottom interaction hint */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-fox-400 via-fox-500 to-fox-400 rounded-b-2xl"
        animate={{
          scaleX: [0.3, 1, 0.3],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};