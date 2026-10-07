import React, { useState } from 'react';
import { WORKSHOP_TIMELINE } from '../data/event';
import { CheckCircle2, PlayCircle } from 'lucide-react';

export const WorkshopTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="experience" className="py-20 md:py-28 bg-white border-b border-gray-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-google-blue" />
            <span className="font-mono text-xs font-semibold text-charcoal-400 uppercase tracking-widest">
              STEP-BY-STEP PROGRESSION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-charcoal-900 font-sans">
            What to Expect.
          </h2>

          <p className="text-lg text-charcoal-600 leading-relaxed font-normal">
            A structured roadmap that transforms conceptual understanding into an operational multi-agent application.
          </p>
        </div>

        {/* Interactive Timeline Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Selector List (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {WORKSHOP_TIMELINE.map((item: { step: string; title: string; desc: string }, index: number) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(index)}
                  className={`cursor-pointer rounded-xl p-4 sm:p-5 border transition-all duration-200 flex items-start space-x-4 ${
                    isActive
                      ? 'bg-gray-50 border-charcoal-900 shadow-sm'
                      : 'bg-white border-gray-200/90 hover:border-gray-300 hover:bg-canvas-subtle'
                  }`}
                >
                  {/* Step Badge */}
                  <div className={`w-9 h-9 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 transition-colors ${
                    isActive
                      ? 'bg-charcoal-900 text-white'
                      : 'bg-gray-100 text-charcoal-600'
                  }`}>
                    {item.step}
                  </div>

                  {/* Step Title & Summary */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-base font-bold font-sans tracking-tight ${
                        isActive ? 'text-charcoal-900' : 'text-charcoal-800'
                      }`}>
                        {item.title}
                      </h3>
                      {isActive && (
                        <span className="hidden sm:inline-flex items-center text-[10px] font-mono font-semibold text-google-blue bg-google-blue-subtle px-2 py-0.5 rounded">
                          ACTIVE STAGE
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-charcoal-500 mt-1 line-clamp-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Canvas (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 bg-canvas-subtle border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-tech-card">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-6">
              <span className="font-mono text-xs text-charcoal-400 uppercase tracking-wider">
                STAGE DEEP DIVE
              </span>
              <span className="font-mono text-xs font-bold text-google-blue bg-google-blue-subtle px-2 py-0.5 rounded">
                PHASE {WORKSHOP_TIMELINE[activeStep].step} OF 06
              </span>
            </div>

            <div className="space-y-4">
              <div className="inline-block p-2 rounded-xl bg-white border border-gray-200 shadow-2xs">
                <PlayCircle className="w-6 h-6 text-google-blue" />
              </div>

              <h4 className="text-xl font-extrabold text-charcoal-900 font-sans tracking-tight">
                {WORKSHOP_TIMELINE[activeStep].title}
              </h4>

              <p className="text-sm text-charcoal-600 leading-relaxed font-sans">
                {WORKSHOP_TIMELINE[activeStep].desc}
              </p>

              <div className="p-4 bg-white rounded-xl border border-gray-200 space-y-2 mt-4">
                <span className="font-mono text-[10px] text-charcoal-400 uppercase tracking-widest block">
                  DELIVERABLE OUTCOME
                </span>
                <p className="text-xs font-mono text-charcoal-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-google-green shrink-0" />
                  Hands-on mastery verified via code execution
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-mono text-charcoal-500">
                <span>Interactive Architecture</span>
                <span className="text-google-green font-semibold">● 100% Practical</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
