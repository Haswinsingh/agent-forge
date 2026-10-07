import React from 'react';
import { motion } from 'framer-motion';
import { LEARNING_CARDS } from '../data/event';
import { Network, Terminal, UserCog, GitMerge, Sliders, Box } from 'lucide-react';

export const LearningOutcomes: React.FC = () => {
  const icons = [Network, Terminal, UserCog, GitMerge, Sliders, Box];

  return (
    <section id="learning" className="py-20 md:py-28 bg-canvas-subtle border-b border-gray-200/80 tech-grid-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-google-yellow" />
            <span className="font-mono text-xs font-semibold text-charcoal-400 uppercase tracking-widest">
              CURRICULUM SPECIFICATION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-charcoal-900 font-sans">
            What You Will Learn
          </h2>

          <p className="text-lg text-charcoal-600 leading-relaxed font-normal">
            Gain practical, production-level expertise in engineering and orchestrating collaborative multi-agent systems with CrewAI.
          </p>
        </div>

        {/* Six Professional Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEARNING_CARDS.map((item, index) => {
            const Icon = icons[index] || Terminal;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="group relative bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-7 shadow-tech-card card-hover-tech flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
                    <span className="font-mono text-xs font-bold text-google-blue bg-google-blue-subtle/80 px-2 py-0.5 rounded">
                      {item.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-charcoal-800 group-hover:bg-charcoal-900 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-charcoal-900 tracking-tight font-sans">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-charcoal-600 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono text-charcoal-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-google-green" />
                    Hands-on Lab
                  </span>
                  <span>Practical Competency</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
