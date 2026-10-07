import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Organizer } from './components/Organizer';
import { EventInfoStrip } from './components/EventInfoStrip';
import { AboutWorkshop } from './components/AboutWorkshop';
import { WhyCrewAI } from './components/WhyCrewAI';
import { AgentWorkflow } from './components/AgentWorkflow';
import { LearningOutcomes } from './components/LearningOutcomes';
import { ResourcePerson } from './components/ResourcePerson';
import { WorkshopJourney } from './components/WorkshopJourney';
import { RegistrationFlow } from './components/RegistrationFlow';
import { FAQAccordion } from './components/FAQAccordion';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { REGISTRATION_FORM_URL, isRegistrationUrlConfigured } from './data/event';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleRegisterAction = () => {
    if (isRegistrationUrlConfigured()) {
      window.open(REGISTRATION_FORM_URL, '_blank', 'noopener,noreferrer');
    } else {
      setModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-charcoal-900 selection:bg-google-blue selection:text-white flex flex-col font-sans">
      {/* Sticky Navigation Bar with GDSC Label */}
      <Navbar onRegisterClick={handleRegisterAction} />

      {/* Main Page Layout */}
      <main className="flex-1">
        {/* Hero Section with AI Agent Orchestration Visual */}
        <Hero onRegisterClick={handleRegisterAction} />

        {/* Organizer Branding: Powered by Community */}
        <Organizer />

        {/* Event Information Grid (6 Cards) */}
        <EventInfoStrip />

        {/* About AGENT FORGE - Forge the Future of AI Agents */}
        <AboutWorkshop />

        {/* Why CrewAI? - From Single Agent to AI Crew */}
        <WhyCrewAI />

        {/* Workflow Visualization - 7-Stage Interactive Pipeline */}
        <AgentWorkflow />

        {/* What You Will Learn - 6 Module Cards */}
        <LearningOutcomes />

        {/* Resource Person Spotlight - Mohammed Al Riyaz D */}
        <ResourcePerson />

        {/* Workshop Journey - 6-Stage Roadmap Timeline */}
        <WorkshopJourney />

        {/* Registration Section & 4-Step Process Preview */}
        <RegistrationFlow onRegisterClick={handleRegisterAction} />

        {/* FAQ Accordion - 8 Questions */}
        <FAQAccordion />

        {/* Final CTA Banner */}
        <FinalCTA onRegisterClick={handleRegisterAction} />
      </main>

      {/* Comprehensive Footer with GDSC attribution */}
      <Footer onRegisterClick={handleRegisterAction} />

      {/* Centralized Registration Dispatcher & Configuration Guidance Modal */}
      <RegistrationModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </div>
  );
}

export default App;
