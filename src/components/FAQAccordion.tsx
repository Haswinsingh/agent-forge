import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_ITEMS } from '../data/event';
import { Plus, Minus } from 'lucide-react';

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-gray-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50">
            <span className="w-2 h-2 rounded-full bg-google-red" />
            <span className="font-mono text-xs font-semibold text-charcoal-500 uppercase tracking-wider">
              FAQ
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-charcoal-900 font-sans">
            Frequently Asked Questions
          </h2>

          <p className="text-base text-charcoal-500 leading-relaxed font-sans">
            Everything you need to know about AGENT FORGE, CrewAI, and the registration process.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-xl transition-all duration-200 ${
                  isOpen 
                    ? 'border-gray-300 bg-canvas-subtle shadow-2xs' 
                    : 'border-gray-200/90 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-google-blue rounded-xl"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <span className="font-mono text-xs font-semibold text-charcoal-400">
                      0{index + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-charcoal-900 font-sans tracking-tight">
                      {item.question}
                    </span>
                  </div>

                  <div className="w-7 h-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center shrink-0 text-charcoal-600 transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-google-blue" />
                    ) : (
                      <Plus className="w-4 h-4 text-charcoal-500" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-sm text-charcoal-600 leading-relaxed font-sans border-t border-gray-100/80 mt-1">
                        <p className="pl-7">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
