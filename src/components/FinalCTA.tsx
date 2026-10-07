import React from 'react';
import { ArrowRight } from 'lucide-react';
import { EVENT_NAME, WORKSHOP_TOPIC, ORGANIZER, INSTITUTION } from '../data/event';

interface FinalCTAProps {
  onRegisterClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onRegisterClick }) => {
  return (
    <section className="py-24 md:py-32 bg-white tech-grid-bg relative border-b border-gray-200/80 overflow-hidden text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        {/* Subtle Google-color micro-indicators */}
        <div className="flex items-center justify-center space-x-2.5 mb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-google-blue" />
          <span className="w-2.5 h-2.5 rounded-full bg-google-red" />
          <span className="w-2.5 h-2.5 rounded-full bg-google-yellow" />
          <span className="w-2.5 h-2.5 rounded-full bg-google-green" />
        </div>

        {/* Large Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-charcoal-900 tracking-tight font-sans max-w-3xl mx-auto leading-[1.12]">
          Build Agents.<br />
          Orchestrate Intelligence.
        </h2>

        {/* Then: AGENT FORGE · Multi-Agent Implementation & Orchestration Using CrewAI */}
        <div className="space-y-1.5 pt-2">
          <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 font-sans tracking-tight">
            {EVENT_NAME}
          </h3>
          <p className="text-sm sm:text-base font-semibold text-charcoal-700 font-sans max-w-xl mx-auto">
            {WORKSHOP_TOPIC}
          </p>
        </div>

        {/* Display: Organized by Google Developer Student Clubs · Sri Sairam Engineering College */}
        <p className="text-xs sm:text-sm font-mono text-charcoal-600 font-medium">
          Organized by {ORGANIZER} · {INSTITUTION}
        </p>

        {/* CTA with Google-color subtle decorative lines */}
        <div className="pt-4 flex flex-col items-center">
          <div className="flex items-center space-x-3 mb-4">
            <span className="w-8 h-[1px] bg-google-blue/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-google-blue" />
            <span className="w-1.5 h-1.5 rounded-full bg-google-red" />
            <span className="w-1.5 h-1.5 rounded-full bg-google-yellow" />
            <span className="w-1.5 h-1.5 rounded-full bg-google-green" />
            <span className="w-8 h-[1px] bg-google-green/40" />
          </div>

          <button
            onClick={onRegisterClick}
            className="inline-flex items-center justify-center space-x-2.5 px-9 py-4 text-sm font-bold uppercase tracking-wider text-white bg-google-blue hover:bg-google-blue-hover rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98] group"
          >
            <span>REGISTER NOW →</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="pt-2 font-mono text-[11px] text-charcoal-400">
          Hands-on AI Lab · Community Workshop · Direct Industry Instruction
        </div>
      </div>
    </section>
  );
};
