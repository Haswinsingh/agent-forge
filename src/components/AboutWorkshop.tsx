import React from 'react';
import { PenTool, GitFork, Play } from 'lucide-react';

export const AboutWorkshop: React.FC = () => {
  const cards = [
    {
      number: "01",
      badge: "01 — DESIGN",
      title: "DESIGN",
      description: "Define specialized AI agents with clear roles and goals.",
      icon: PenTool,
      accentBorder: "hover:border-google-blue"
    },
    {
      number: "02",
      badge: "02 — ORCHESTRATE",
      title: "ORCHESTRATE",
      description: "Coordinate multiple agents through structured workflows.",
      icon: GitFork,
      accentBorder: "hover:border-google-red"
    },
    {
      number: "03",
      badge: "03 — EXECUTE",
      title: "EXECUTE",
      description: "Build practical multi-agent applications using CrewAI.",
      icon: Play,
      accentBorder: "hover:border-google-green"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-gray-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-google-blue" />
            <span className="font-mono text-xs font-semibold text-charcoal-400 uppercase tracking-widest">
              ABOUT WORKSHOP
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-charcoal-900 font-sans">
            Forge the Future of AI Agents.
          </h2>

          <p className="text-lg text-charcoal-700 leading-relaxed font-normal">
            AGENT FORGE is a hands-on workshop focused on understanding how multiple AI agents can collaborate, communicate, delegate tasks, and execute complex workflows using CrewAI.
          </p>

          <p className="text-base text-charcoal-600 leading-relaxed">
            Participants will explore how specialized AI agents can work together as a coordinated team to solve complex tasks beyond the capabilities of a single AI agent.
          </p>
        </div>

        {/* Three Cards: 01 — DESIGN, 02 — ORCHESTRATE, 03 — EXECUTE */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.number}
                className={`group relative bg-white border border-gray-200/90 rounded-2xl p-7 shadow-tech-card card-hover-tech transition-all ${card.accentBorder}`}
              >
                <div className="corner-bracket">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-sm font-bold text-google-blue tracking-wider bg-google-blue-subtle/80 px-2.5 py-1 rounded-md border border-google-blue/20">
                      {card.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-charcoal-700 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-charcoal-800" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-charcoal-900 tracking-tight font-sans">
                      {card.title}
                    </h3>
                    <p className="text-sm text-charcoal-600 leading-relaxed pt-2 font-sans">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono text-charcoal-400">
                  <span>CREWAI WORKFLOW</span>
                  <span className="text-google-green font-semibold">
                    PHASE {card.number}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
