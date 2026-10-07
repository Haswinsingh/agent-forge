import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { 
  EVENT_NAME, 
  WORKSHOP_TOPIC, 
  ORGANIZER, 
  INSTITUTION, 
  RESOURCE_PERSON, 
  RESOURCE_PERSON_DESIGNATION, 
  RESOURCE_PERSON_COMPANY,
  EVENT_CONFIG
} from '../data/event';
import { AgentNetworkGraph } from './AgentNetworkGraph';

interface HeroProps {
  onRegisterClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <section 
      id="hero" 
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 border-b border-gray-200/80 tech-grid-bg overflow-hidden"
    >
      {/* Technical Blueprint Coordinates & Labeling */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 hidden md:flex items-center justify-between text-[11px] font-mono text-charcoal-400 select-none">
        <span>+ GDSC_SEC::ORCHESTRATION_CANVAS // ACTIVE_LAB</span>
        <span>[CREWAI::MULTI_AGENT_WORKSPACE_V2026]</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split-Layout Hero: Left (Content) x Right (Hero Resource Person Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT SIDE (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small Label: GOOGLE DEVELOPER STUDENT CLUBS · SRI SAIRAM ENGINEERING COLLEGE */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-google-blue shrink-0" />
              <span className="font-mono text-xs sm:text-xs font-bold uppercase tracking-wider text-charcoal-700">
                {ORGANIZER} · {INSTITUTION}
              </span>
            </div>

            {/* Small Badge: AI WORKSHOP · 2026 */}
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-gray-200 bg-white shadow-2xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-google-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-google-green" />
              </span>
              <span className="font-mono text-xs font-semibold text-charcoal-800 tracking-wider">
                AI WORKSHOP · 2026
              </span>
              <span className="text-gray-300">|</span>
              <span className="font-mono text-[11px] text-charcoal-500 uppercase">
                HANDS-ON
              </span>
            </div>

            {/* Main Heading: AGENT FORGE */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-charcoal-900 font-sans leading-[1.05]">
              {EVENT_NAME}
            </h1>

            {/* Large Supporting Heading: Multi-Agent Implementation & Orchestration Using CrewAI */}
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-charcoal-800 tracking-tight leading-snug">
              {WORKSHOP_TOPIC}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed font-normal max-w-2xl">
              {EVENT_CONFIG.description}
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              {/* Primary Button: REGISTER NOW → */}
              <button
                onClick={onRegisterClick}
                className="inline-flex items-center justify-center space-x-2 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-google-blue hover:bg-google-blue-hover rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98] group"
              >
                <span>REGISTER NOW</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary Button: EXPLORE WORKSHOP ↓ */}
              <a
                href="#about"
                className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 text-sm font-semibold text-charcoal-800 bg-white hover:bg-gray-50 border border-gray-200/90 rounded-xl shadow-2xs hover:shadow transition-all duration-200"
              >
                <span>EXPLORE WORKSHOP</span>
                <ArrowDown className="w-4 h-4 text-charcoal-500" />
              </a>
            </div>

            {/* Google-Color Accent Indicators */}
            <div className="flex items-center space-x-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-google-blue" />
              <span className="w-2 h-2 rounded-full bg-google-red" />
              <span className="w-2 h-2 rounded-full bg-google-yellow" />
              <span className="w-2 h-2 rounded-full bg-google-green" />
              <span className="font-mono text-[11px] text-charcoal-400 pl-2">
                Google Developer Community · Dell Technologies
              </span>
            </div>
          </div>

          {/* RIGHT SIDE (5 cols): HERO RESOURCE PERSON CARD */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-white border border-gray-200/90 rounded-2xl p-5 sm:p-6 shadow-tech-card card-hover-tech relative overflow-hidden">
              {/* Corner accent marker */}
              <div className="corner-bracket">
                {/* Speaker Photograph */}
                <div className="relative rounded-xl overflow-hidden bg-gray-100 border border-gray-200/80 aspect-[3/4] w-full">
                  <img 
                    src="/assets/resoources.jpeg" 
                    alt="Mohammed Al Riyaz D — AI Generalist at Dell Technologies"
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                    loading="eager"
                  />
                  {/* Subtle technical tag over photo */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md border border-gray-200 text-[10px] font-mono font-bold text-charcoal-800 shadow-xs">
                    RESOURCE PERSON
                  </div>
                </div>

                {/* Below Photograph: Details */}
                <div className="mt-5 space-y-2.5">
                  {/* Google-blue accent line */}
                  <div className="w-10 h-1 bg-google-blue rounded-full" />

                  <div>
                    <h3 className="text-xl font-bold text-charcoal-900 tracking-tight font-sans">
                      {RESOURCE_PERSON}
                    </h3>
                    <div className="text-sm font-semibold text-google-blue font-sans mt-0.5">
                      {RESOURCE_PERSON_DESIGNATION}
                    </div>
                    <div className="text-xs font-mono text-charcoal-600 mt-0.5">
                      {RESOURCE_PERSON_COMPANY}
                    </div>
                  </div>

                  <p className="text-xs text-charcoal-500 leading-relaxed font-sans pt-1 border-t border-gray-100">
                    {EVENT_CONFIG.resourcePerson.supportingText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HERO AI VISUAL: Subtle Technical AI Orchestration Visualization */}
        <div className="mt-16 sm:mt-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-3 mb-4 border-b border-gray-200/80">
            <div>
              <span className="font-mono text-xs font-semibold text-charcoal-500 uppercase tracking-wider block">
                AI ORCHESTRATION ARCHITECTURE
              </span>
              <h3 className="text-lg font-bold text-charcoal-900 tracking-tight mt-0.5 font-sans">
                Agents → Collaboration → Orchestration → Result
              </h3>
            </div>
            <div className="mt-2 sm:mt-0 font-mono text-[11px] text-charcoal-400">
              Interactive Blueprint Canvas
            </div>
          </div>

          <AgentNetworkGraph />
        </div>
      </div>
    </section>
  );
};
