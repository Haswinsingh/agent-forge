import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WORKFLOW_STAGES } from '../data/event';
import { 
  Target, 
  GitFork, 
  Search, 
  BarChart3, 
  Code2, 
  CheckCheck, 
  Sparkles, 
  ArrowRight, 
  ArrowDown, 
  Activity 
} from 'lucide-react';

export const AgentWorkflow: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<string>('planner');

  const icons = [
    Target,       // 01 USER GOAL
    GitFork,      // 02 PLANNER AGENT
    Search,       // 03 RESEARCH AGENT
    BarChart3,    // 04 ANALYSIS AGENT
    Code2,        // 05 IMPLEMENTATION AGENT
    CheckCheck,   // 06 REVIEW AGENT
    Sparkles      // 07 FINAL OUTPUT
  ];

  return (
    <section id="workflow" className="py-20 md:py-28 bg-white border-b border-gray-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-google-blue" />
            <span className="font-mono text-xs font-semibold text-charcoal-400 uppercase tracking-widest">
              EXECUTION PIPELINE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-charcoal-900 font-sans">
            Agent Orchestration Workflow
          </h2>

          <p className="text-lg text-charcoal-600 leading-relaxed font-normal">
            Trace how a raw objective transforms into verified output through a coordinated chain of specialized autonomous agents.
          </p>
        </div>

        {/* Workflow Showcase Box */}
        <div className="mt-14 bg-canvas-subtle border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-tech-card">
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-gray-200/80">
            <div>
              <span className="font-mono text-xs font-semibold text-charcoal-500 uppercase tracking-wider block">
                INTERACTIVE TECHNICAL WORKFLOW
              </span>
              <h3 className="text-base sm:text-lg font-bold text-charcoal-900 tracking-tight mt-0.5 font-sans">
                Sequential Task Delegation & Review Loop
              </h3>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-xs font-mono text-charcoal-600 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
              <span className="w-2 h-2 rounded-full bg-google-green animate-pulse" />
              <span>DETERMINISTIC PIPELINE</span>
            </div>
          </div>

          {/* Sequential Animated Nodes: Desktop (Horizontal Chain) / Mobile (Vertical Timeline) */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-3 relative">
            {WORKFLOW_STAGES.map((stage, idx) => {
              const isSelected = selectedStage === stage.id;
              const isLast = idx === WORKFLOW_STAGES.length - 1;
              const Icon = icons[idx] || Activity;

              return (
                <div key={stage.id} className="relative flex flex-col items-stretch">
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.08 }}
                    whileHover={{ y: -3, transition: { duration: 0.15 } }}
                    onClick={() => setSelectedStage(stage.id)}
                    className={`cursor-pointer h-full rounded-xl p-4 flex flex-col justify-between transition-colors border ${
                      isSelected
                        ? 'bg-white border-charcoal-900 shadow-md ring-1 ring-charcoal-900'
                        : 'bg-white border-gray-200/90 hover:border-gray-300 shadow-2xs hover:shadow'
                    }`}
                  >
                    <div>
                      {/* Top Bar: Icon with Google-color accent & Step Number */}
                      <div className="flex items-center justify-between mb-3">
                        <div 
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-charcoal-800"
                          style={{ backgroundColor: `${stage.googleColor}15` }}
                        >
                          <Icon className="w-3.5 h-3.5" style={{ color: stage.googleColor }} />
                        </div>
                        <span className="font-mono text-[10px] font-bold text-charcoal-400">
                          {stage.step}
                        </span>
                      </div>

                      {/* Node Heading */}
                      <h4 className="text-xs sm:text-sm font-bold text-charcoal-900 font-sans tracking-tight leading-snug">
                        {stage.label}
                      </h4>

                      {/* Role sub-badge */}
                      <span className="inline-block mt-1 font-mono text-[9px] uppercase tracking-wider text-charcoal-500 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">
                        {stage.role}
                      </span>
                    </div>

                    {/* Brief description */}
                    <p className="text-[11px] text-charcoal-500 mt-3 pt-3 border-t border-gray-100 leading-tight">
                      {stage.desc}
                    </p>
                  </motion.div>

                  {/* Flow Arrow on Desktop (connector) */}
                  {!isLast && (
                    <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-charcoal-300 pointer-events-none">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}

                  {/* Flow Arrow on Mobile (vertical timeline) */}
                  {!isLast && (
                    <div className="flex md:hidden justify-center my-2 text-charcoal-300">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Interactive Inspection Card */}
          {selectedStage && (
            <motion.div 
              key={selectedStage}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-xl border border-gray-200"
            >
              <div className="flex items-center space-x-3">
                <div 
                  className="p-2.5 rounded-lg border flex items-center justify-center shrink-0"
                  style={{
                    backgroundColor: `${WORKFLOW_STAGES.find(s => s.id === selectedStage)?.googleColor}15`,
                    borderColor: `${WORKFLOW_STAGES.find(s => s.id === selectedStage)?.googleColor}30`
                  }}
                >
                  <Activity 
                    className="w-4 h-4" 
                    style={{ color: WORKFLOW_STAGES.find(s => s.id === selectedStage)?.googleColor }} 
                  />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-charcoal-400 uppercase tracking-wider block">
                    STAGE INSPECTOR
                  </span>
                  <h4 className="text-sm font-bold text-charcoal-900 font-sans">
                    {WORKFLOW_STAGES.find(s => s.id === selectedStage)?.label}
                  </h4>
                </div>
              </div>

              <div className="text-xs text-charcoal-600 font-mono sm:text-right max-w-md">
                {WORKFLOW_STAGES.find(s => s.id === selectedStage)?.desc}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
