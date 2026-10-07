import React from 'react';
import { ArrowDown, ArrowRight, Bot, Users2, Sparkles } from 'lucide-react';

export const WhyCrewAI: React.FC = () => {
  return (
    <section id="why-crewai" className="py-20 md:py-28 bg-canvas-subtle border-b border-gray-200/80 tech-grid-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-google-red" />
            <span className="font-mono text-xs font-semibold text-charcoal-400 uppercase tracking-widest">
              PARADIGM SHIFT
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-charcoal-900 font-sans">
            From Single Agent to AI Crew.
          </h2>

          <p className="text-lg text-charcoal-600 leading-relaxed font-normal">
            CrewAI provides a framework for creating role-based AI agents and orchestrating their collaboration to accomplish complex tasks.
          </p>
        </div>

        {/* Visual Transformation Box: Single Agent -> Multi-Agent Crew -> Coordinated Intelligence */}
        <div className="mt-14 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-10 shadow-tech-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* SINGLE AGENT (5 cols) */}
            <div className="lg:col-span-5 bg-gray-50/80 border border-gray-200 rounded-xl p-6 sm:p-7 text-center space-y-5">
              <div className="inline-flex p-3 rounded-xl bg-white border border-gray-200 shadow-2xs">
                <Bot className="w-6 h-6 text-charcoal-600" />
              </div>

              <div>
                <span className="font-mono text-[11px] font-bold text-charcoal-400 uppercase tracking-wider block">
                  CONVENTIONAL ARCHITECTURE
                </span>
                <h3 className="text-xl font-bold text-charcoal-900 mt-1 font-sans">
                  SINGLE AGENT
                </h3>
              </div>

              <div className="space-y-2 pt-1 max-w-xs mx-auto">
                <div className="p-3 bg-white rounded-lg border border-gray-200 font-mono text-xs font-medium text-charcoal-800 shadow-2xs">
                  One model
                </div>
                <div className="text-charcoal-400 font-mono text-xs">↓</div>
                <div className="p-3 bg-white rounded-lg border border-gray-200 font-mono text-xs font-medium text-charcoal-800 shadow-2xs">
                  One role
                </div>
                <div className="text-charcoal-400 font-mono text-xs">↓</div>
                <div className="p-3 bg-white rounded-lg border border-gray-200 font-mono text-xs font-medium text-charcoal-800 shadow-2xs">
                  One task
                </div>
              </div>
            </div>

            {/* Transform Arrow (2 cols) */}
            <div className="lg:col-span-2 flex flex-col items-center justify-center py-2">
              <div className="w-12 h-12 rounded-full bg-google-blue-subtle border border-google-blue/30 flex items-center justify-center text-google-blue shadow-2xs">
                <ArrowRight className="w-5 h-5 hidden lg:block" />
                <ArrowDown className="w-5 h-5 lg:hidden" />
              </div>
              <span className="font-mono text-[10px] font-bold text-google-blue uppercase tracking-wider mt-2">
                TRANSFORM
              </span>
            </div>

            {/* MULTI-AGENT CREW (5 cols) */}
            <div className="lg:col-span-5 bg-white border-2 border-google-blue/40 rounded-xl p-6 sm:p-7 text-center space-y-5 shadow-subtle relative overflow-hidden">
              <div className="absolute top-3 right-3 flex space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-google-blue" />
                <span className="w-2 h-2 rounded-full bg-google-green" />
              </div>

              <div className="inline-flex p-3 rounded-xl bg-google-blue-subtle border border-google-blue/20">
                <Users2 className="w-6 h-6 text-google-blue" />
              </div>

              <div>
                <span className="font-mono text-[11px] font-bold text-google-blue uppercase tracking-wider block">
                  CREWAI ECOSYSTEM
                </span>
                <h3 className="text-xl font-bold text-charcoal-900 mt-1 font-sans">
                  MULTI-AGENT CREW
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-1 max-w-sm mx-auto">
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 font-mono text-xs font-semibold text-charcoal-800">
                  Planner
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 font-mono text-xs font-semibold text-charcoal-800">
                  Researcher
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 font-mono text-xs font-semibold text-charcoal-800">
                  Developer
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 font-mono text-xs font-semibold text-charcoal-800">
                  Reviewer
                </div>
              </div>

              <div className="text-charcoal-400 font-mono text-xs">↓</div>

              {/* COORDINATED INTELLIGENCE */}
              <div className="pt-1">
                <div className="p-3.5 bg-google-green-subtle border border-google-green/30 rounded-xl shadow-2xs">
                  <h4 className="font-mono text-xs sm:text-sm font-bold text-google-green uppercase tracking-wider flex items-center justify-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    COORDINATED INTELLIGENCE
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
