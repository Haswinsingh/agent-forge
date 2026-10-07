import React, { useState } from 'react';
import { WORKSHOP_JOURNEY } from '../data/event';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

export const WorkshopJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  // Google Colors for the 6 timeline steps
  const googleStepColors = [
    '#4285F4', // 01 Blue
    '#EA4335', // 02 Red
    '#FBBC05', // 03 Yellow
    '#34A853', // 04 Green
    '#4285F4', // 05 Blue
    '#34A853'  // 06 Green
  ];

  return (
    <section id="journey" className="py-20 md:py-28 bg-canvas-subtle border-b border-gray-200/80 tech-grid-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-google-blue" />
            <span className="font-mono text-xs font-semibold text-charcoal-400 uppercase tracking-widest">
              STEP-BY-STEP TIMELINE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-charcoal-900 font-sans">
            Workshop Journey
          </h2>

          <p className="text-lg text-charcoal-600 leading-relaxed font-normal">
            A structured progressive journey taking participants from core principles to autonomous multi-agent execution.
          </p>
        </div>

        {/* Technical Timeline Layout */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Selector List (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {WORKSHOP_JOURNEY.map((item, index) => {
              const isActive = activeStep === index;
              const stepColor = googleStepColors[index];

              return (
                <div key={item.step}>
                  <div
                    onClick={() => setActiveStep(index)}
                    className={`cursor-pointer rounded-xl p-4 sm:p-5 border transition-all duration-200 flex items-start space-x-4 ${
                      isActive
                        ? 'bg-white border-charcoal-900 shadow-md ring-1 ring-charcoal-900'
                        : 'bg-white/80 border-gray-200/90 hover:border-gray-300 hover:bg-white'
                    }`}
                  >
                    {/* Step Number with Google-color accent */}
                    <div 
                      className="w-9 h-9 rounded-lg font-mono text-xs font-bold flex items-center justify-center shrink-0 border"
                      style={{
                        backgroundColor: isActive ? '#202124' : '#F8F9FA',
                        color: isActive ? '#FFFFFF' : '#3C4043',
                        borderColor: isActive ? '#202124' : '#E5E7EB'
                      }}
                    >
                      {item.step}
                    </div>

                    {/* Step Title & Description */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span 
                            className="w-2 h-2 rounded-full inline-block shrink-0"
                            style={{ backgroundColor: stepColor }}
                          />
                          <h3 className={`text-base font-bold font-sans tracking-tight ${
                            isActive ? 'text-charcoal-900' : 'text-charcoal-800'
                          }`}>
                            {item.title}
                          </h3>
                        </div>
                        {isActive && (
                          <span className="hidden sm:inline-flex items-center text-[10px] font-mono font-semibold text-google-blue bg-google-blue-subtle/90 px-2 py-0.5 rounded border border-google-blue/20">
                            IN FOCUS
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-charcoal-500 mt-1.5 leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Flow Arrow indicator */}
                  {index < WORKSHOP_JOURNEY.length - 1 && (
                    <div className="flex justify-center my-1 text-charcoal-300">
                      <ArrowDown className="w-3.5 h-3.5 opacity-60" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Step Highlight Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-tech-card">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-6">
              <span className="font-mono text-xs text-charcoal-400 uppercase tracking-wider">
                STAGE DEEP DIVE
              </span>
              <span 
                className="font-mono text-xs font-bold px-2 py-0.5 rounded border"
                style={{
                  color: googleStepColors[activeStep],
                  backgroundColor: `${googleStepColors[activeStep]}15`,
                  borderColor: `${googleStepColors[activeStep]}30`
                }}
              >
                PHASE {WORKSHOP_JOURNEY[activeStep].step} OF 06
              </span>
            </div>

            <div className="space-y-4">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm"
                style={{
                  backgroundColor: `${googleStepColors[activeStep]}15`,
                  color: googleStepColors[activeStep]
                }}
              >
                {WORKSHOP_JOURNEY[activeStep].step}
              </div>

              <h4 className="text-xl font-extrabold text-charcoal-900 font-sans tracking-tight">
                {WORKSHOP_JOURNEY[activeStep].title}
              </h4>

              <p className="text-sm text-charcoal-600 leading-relaxed font-sans">
                {WORKSHOP_JOURNEY[activeStep].desc}
              </p>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-2 mt-4">
                <span className="font-mono text-[10px] text-charcoal-400 uppercase tracking-widest block">
                  WORKSHOP MILESTONE
                </span>
                <p className="text-xs font-mono text-charcoal-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-google-green shrink-0" />
                  Hands-on CrewAI architecture implemented
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-mono text-charcoal-500">
                <span>Google Developer Student Clubs</span>
                <span className="text-google-green font-semibold">● Hands-on Session</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
