import React from 'react';
import { 
  RESOURCE_PERSON,
  RESOURCE_PERSON_COMPANY,
  ORGANIZER,
  EVENT_DATE, 
  EVENT_TIME, 
  EVENT_VENUE 
} from '../data/event';
import { Wrench, Cpu, Compass, UserCheck, Building2, Users, Calendar, Clock, MapPin } from 'lucide-react';

export const EventInfoStrip: React.FC = () => {
  // The 6 exact cards specified in the prompt:
  // WORKSHOP, TECHNOLOGY, FOCUS, RESOURCE PERSON, COMPANY, ORGANIZER
  const baseCards = [
    {
      label: "WORKSHOP",
      value: "Hands-on AI Workshop",
      icon: Wrench,
      accent: "#4285F4" // Blue
    },
    {
      label: "TECHNOLOGY",
      value: "CrewAI",
      icon: Cpu,
      accent: "#EA4335" // Red
    },
    {
      label: "FOCUS",
      value: "Multi-Agent AI",
      icon: Compass,
      accent: "#FBBC05" // Yellow
    },
    {
      label: "RESOURCE PERSON",
      value: RESOURCE_PERSON,
      icon: UserCheck,
      accent: "#34A853" // Green
    },
    {
      label: "COMPANY",
      value: RESOURCE_PERSON_COMPANY,
      icon: Building2,
      accent: "#4285F4" // Blue
    },
    {
      label: "ORGANIZER",
      value: ORGANIZER,
      icon: Users,
      accent: "#34A853" // Green
    }
  ];

  // Optional configurable logistics rendered ONLY if non-null
  const optionalCards = [];
  if (EVENT_DATE) {
    optionalCards.push({
      label: "DATE",
      value: EVENT_DATE,
      icon: Calendar,
      accent: "#4285F4"
    });
  }
  if (EVENT_TIME) {
    optionalCards.push({
      label: "TIME",
      value: EVENT_TIME,
      icon: Clock,
      accent: "#FBBC05"
    });
  }
  if (EVENT_VENUE) {
    optionalCards.push({
      label: "VENUE",
      value: EVENT_VENUE,
      icon: MapPin,
      accent: "#34A853"
    });
  }

  const allCards = [...baseCards, ...optionalCards];

  return (
    <section className="bg-canvas-subtle border-b border-gray-200/80 py-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {allCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-gray-200/90 rounded-xl p-4 shadow-2xs card-hover-tech flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[9px] sm:text-[10px] text-charcoal-400 font-semibold uppercase tracking-wider">
                    {card.label}
                  </span>
                  <Icon className="w-3.5 h-3.5 text-charcoal-400" />
                </div>
                <div className="font-semibold text-charcoal-900 text-xs sm:text-sm leading-tight tracking-tight mt-1 font-sans">
                  {card.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
