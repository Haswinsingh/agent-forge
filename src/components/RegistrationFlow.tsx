import React from 'react';
import { ArrowRight, ChevronRight, ShieldCheck, FileText, Send, UserCheck, Inbox } from 'lucide-react';
import { REGISTRATION_STEPS } from '../data/event';

interface RegistrationFlowProps {
  onRegisterClick: () => void;
}

export const RegistrationFlow: React.FC<RegistrationFlowProps> = ({ onRegisterClick }) => {
  const stepIcons = [FileText, UserCheck, Inbox, Send];

  return (
    <section id="register" className="py-20 md:py-28 bg-white border-b border-gray-200/80 tech-grid-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Registration Section Card */}
        <div className="bg-white border border-gray-200/90 rounded-2xl p-8 sm:p-12 shadow-premium relative overflow-hidden">
          {/* Subtle Google micro-accents in top right */}
          <div className="absolute top-6 right-6 flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-google-blue" />
            <span className="w-2 h-2 rounded-full bg-google-red" />
            <span className="w-2 h-2 rounded-full bg-google-yellow" />
            <span className="w-2 h-2 rounded-full bg-google-green" />
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-google-blue" />
              <span className="font-mono text-xs font-semibold text-charcoal-400 uppercase tracking-widest">
                OFFICIAL WORKSHOP REGISTRATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-charcoal-900 font-sans">
              Ready to Forge Your First AI Crew?
            </h2>

            <p className="text-lg text-charcoal-600 leading-relaxed font-normal">
              Join AGENT FORGE and explore the practical world of multi-agent AI with CrewAI.
            </p>
          </div>

          {/* Visual Four-Step Process: 01 — REGISTER -> 02 — CONFIRM DETAILS -> 03 — JOIN THE WORKSHOP -> 04 — BUILD YOUR AI CREW */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-mono text-xs font-semibold text-charcoal-500 uppercase tracking-wider">
                REGISTRATION FLOW
              </span>
              <span className="font-mono text-[11px] text-charcoal-400">
                4-STEP PARTICIPATION PATH
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {REGISTRATION_STEPS.map((step, idx) => {
                const Icon = stepIcons[idx] || FileText;
                const isLast = idx === REGISTRATION_STEPS.length - 1;

                return (
                  <div
                    key={step.step}
                    className="relative bg-canvas-subtle border border-gray-200 rounded-xl p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-bold text-google-blue">
                          0{idx + 1}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-charcoal-700">
                          <Icon className="w-4 h-4 text-charcoal-700" />
                        </div>
                      </div>

                      <h4 className="text-sm font-bold text-charcoal-900 font-sans tracking-tight">
                        0{idx + 1} — {step.title}
                      </h4>

                      <p className="text-xs text-charcoal-500 mt-2 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-200/60 font-mono text-[10px] text-charcoal-400 flex items-center justify-between">
                      <span>Step 0{idx + 1} of 04</span>
                      {!isLast && <ChevronRight className="w-3.5 h-3.5 text-charcoal-300 hidden lg:block" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTAs and Configuration Notice */}
          <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-charcoal-500">
              <ShieldCheck className="w-4 h-4 text-google-green" />
              <span>Official registration opens in external secure form</span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Primary Large CTA: REGISTER FOR AGENT FORGE → */}
              <button
                onClick={onRegisterClick}
                className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-google-blue hover:bg-google-blue-hover rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] group"
              >
                <span>REGISTER FOR AGENT FORGE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA: Continue to Registration → */}
              <button
                onClick={onRegisterClick}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 text-sm font-semibold text-charcoal-800 bg-white hover:bg-gray-50 border border-gray-200/90 rounded-xl shadow-2xs transition-all"
              >
                <span>Continue to Registration</span>
                <ArrowRight className="w-3.5 h-3.5 text-charcoal-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
