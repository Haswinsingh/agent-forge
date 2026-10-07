import React, { useState } from 'react';
import { ChevronRight, Cpu, Layers, Terminal, Activity } from 'lucide-react';

interface AgentNode {
  id: string;
  name: string;
  role: string;
  status: string;
  tag: string;
  tools: string[];
  accentHex: string;
  x: number;
  y: number;
  isCenter?: boolean;
}

export const AgentNetworkGraph: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('crewai');

  // Multi-Agent Orchestration Node Topology matching exact prompt specs:
  // Central node: CREWAI (Blue)
  // Connected nodes: PLANNER (Yellow), RESEARCHER (Red), ANALYST (Blue), DEVELOPER (Green), REVIEWER (Red) -> FINAL OUTPUT (Green)
  const nodes: AgentNode[] = [
    {
      id: 'crewai',
      name: 'CREWAI',
      role: 'Central Orchestration Engine & Autonomous Supervisor Loop',
      status: 'ORCHESTRATING',
      tag: 'CENTRAL_NODE',
      tools: ['HierarchicalRouter', 'ProcessManager', 'MemorySync'],
      accentHex: '#4285F4', // Blue -> CrewAI
      x: 230,
      y: 200,
      isCenter: true
    },
    {
      id: 'planner',
      name: 'PLANNER',
      role: 'Decomposes Goal into Hierarchical Delegable Subtasks',
      status: 'STRATEGIZING',
      tag: 'PLANNING_NODE',
      tools: ['TaskDecomposer', 'PriorityQueue'],
      accentHex: '#FBBC05', // Yellow -> Planning
      x: 230,
      y: 70
    },
    {
      id: 'researcher',
      name: 'RESEARCHER',
      role: 'Information Discovery, Search Tooling & Document Retrieval',
      status: 'SEARCHING',
      tag: 'RESEARCH_NODE',
      tools: ['SerperDevTool', 'VectorStoreQuery', 'WebScraper'],
      accentHex: '#EA4335', // Red -> Research
      x: 90,
      y: 140
    },
    {
      id: 'analyst',
      name: 'ANALYST',
      role: 'Data Synthesis, Structural Formatting & Verification',
      status: 'ANALYZING',
      tag: 'ANALYSIS_NODE',
      tools: ['JSONSchemaValidator', 'DataSynthesizer'],
      accentHex: '#4285F4', // Blue -> Analysis
      x: 80,
      y: 280
    },
    {
      id: 'developer',
      name: 'DEVELOPER',
      role: 'Code Synthesis, API Execution & Tool Invocation',
      status: 'EXECUTING',
      tag: 'EXECUTION_NODE',
      tools: ['PythonREPL', 'CodeInterpreter', 'APIDispatcher'],
      accentHex: '#34A853', // Green -> Execution
      x: 370,
      y: 140
    },
    {
      id: 'reviewer',
      name: 'REVIEWER',
      role: 'Quality Assurance, Constraint Auditing & Edge Validation',
      status: 'VALIDATING',
      tag: 'AUDIT_NODE',
      tools: ['LinterGuard', 'SafetyEvaluator', 'ConstraintAuditor'],
      accentHex: '#EA4335', // Red -> Reviewer
      x: 380,
      y: 280
    },
    {
      id: 'output',
      name: 'FINAL OUTPUT',
      role: 'Verified Production Artifact Produced by the Multi-Agent Crew',
      status: 'DELIVERED',
      tag: 'OUTCOME_NODE',
      tools: ['ArtifactPipeline', 'ExportManager'],
      accentHex: '#34A853', // Green -> Result
      x: 230,
      y: 350
    }
  ];

  const currentNode = nodes.find(n => n.id === activeNode) || nodes[0];

  return (
    <div className="relative w-full rounded-2xl bg-white border border-gray-200/90 shadow-tech-card overflow-hidden">
      {/* Canvas Top Bar - Engineering Blueprint Style */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50/80 border-b border-gray-200 text-xs font-mono">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-google-red" />
            <span className="w-2.5 h-2.5 rounded-full bg-google-yellow" />
            <span className="w-2.5 h-2.5 rounded-full bg-google-green" />
          </div>
          <span className="text-charcoal-400 pl-2">|</span>
          <span className="text-charcoal-700 font-semibold text-[11px] flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-charcoal-400" />
            CREWAI_ORCHESTRATION_CANVAS
          </span>
        </div>
        <div className="flex items-center space-x-3 text-[11px] text-charcoal-600">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-google-green animate-pulse" />
            LIVE SIGNAL FLOW
          </span>
          <span className="hidden sm:inline text-charcoal-400">· 7 NODES CONNECTED</span>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* SVG Network Graph Visualization (7 cols) */}
        <div className="lg:col-span-7 relative flex items-center justify-center min-h-[380px] bg-canvas-subtle/50 rounded-xl border border-gray-100 p-2">
          {/* Subtle background technical grid inside canvas */}
          <div className="absolute inset-0 tech-crosshairs opacity-25 pointer-events-none" />

          {/* SVG Diagram */}
          <svg 
            viewBox="0 0 460 420" 
            className="w-full h-auto max-w-[440px] relative z-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Thin Connecting Lines from Central CREWAI (230, 200) */}
            {/* CREWAI -> PLANNER */}
            <line x1="230" y1="200" x2="230" y2="70" stroke="#E5E7EB" strokeWidth="1.5" />
            <line x1="230" y1="200" x2="230" y2="70" stroke="#FBBC05" strokeWidth="1.2" className="animate-flow-dash opacity-75" />

            {/* CREWAI -> RESEARCHER */}
            <line x1="230" y1="200" x2="90" y2="140" stroke="#E5E7EB" strokeWidth="1.5" />
            <line x1="230" y1="200" x2="90" y2="140" stroke="#EA4335" strokeWidth="1.2" className="animate-flow-dash opacity-75" />

            {/* CREWAI -> ANALYST */}
            <line x1="230" y1="200" x2="80" y2="280" stroke="#E5E7EB" strokeWidth="1.5" />
            <line x1="230" y1="200" x2="80" y2="280" stroke="#4285F4" strokeWidth="1.2" className="animate-flow-dash opacity-75" />

            {/* CREWAI -> DEVELOPER */}
            <line x1="230" y1="200" x2="370" y2="140" stroke="#E5E7EB" strokeWidth="1.5" />
            <line x1="230" y1="200" x2="370" y2="140" stroke="#34A853" strokeWidth="1.2" className="animate-flow-dash opacity-75" />

            {/* CREWAI -> REVIEWER */}
            <line x1="230" y1="200" x2="380" y2="280" stroke="#E5E7EB" strokeWidth="1.5" />
            <line x1="230" y1="200" x2="380" y2="280" stroke="#EA4335" strokeWidth="1.2" className="animate-flow-dash opacity-75" />

            {/* CREWAI -> FINAL OUTPUT */}
            <line x1="230" y1="200" x2="230" y2="350" stroke="#E5E7EB" strokeWidth="1.5" />
            <line x1="230" y1="200" x2="230" y2="350" stroke="#34A853" strokeWidth="1.5" className="animate-flow-dash opacity-80" />

            {/* Inter-Agent Sequential Flow Paths */}
            {/* PLANNER -> RESEARCHER */}
            <path d="M 230,70 C 140,80 110,110 90,140" fill="none" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="2 3" />
            {/* RESEARCHER -> ANALYST */}
            <path d="M 90,140 L 80,280" fill="none" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="2 3" />
            {/* PLANNER -> DEVELOPER */}
            <path d="M 230,70 C 320,80 350,110 370,140" fill="none" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="2 3" />
            {/* DEVELOPER -> REVIEWER */}
            <path d="M 370,140 L 380,280" fill="none" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="2 3" />
            {/* REVIEWER -> FINAL OUTPUT */}
            <path d="M 380,280 C 330,340 280,350 230,350" fill="none" stroke="#34A853" strokeWidth="1.2" strokeDasharray="3 3" />

            {/* Render Nodes */}
            {nodes.map((node) => {
              const isSelected = activeNode === node.id;
              const isCenter = Boolean(node.isCenter);

              return (
                <g 
                  key={node.id} 
                  transform={`translate(${node.x}, ${node.y})`}
                  className="cursor-pointer transition-transform"
                  onClick={() => setActiveNode(node.id)}
                >
                  {/* Outer Pulsing Halo */}
                  {(isSelected || isCenter) && (
                    <circle 
                      cx="0" 
                      cy="0" 
                      r={isCenter ? "28" : "22"} 
                      fill="none" 
                      stroke={node.accentHex} 
                      strokeWidth={isCenter ? "1.5" : "1"}
                      className="pulse-halo"
                    />
                  )}

                  {/* Outer Node Shell */}
                  <circle 
                    cx="0" 
                    cy="0" 
                    r={isCenter ? "20" : "13"} 
                    fill="#FFFFFF" 
                    stroke={isSelected ? node.accentHex : "#BDC1C6"} 
                    strokeWidth={isSelected ? "2.5" : "1.5"}
                    className="transition-all duration-200"
                  />

                  {/* Inner Node Core */}
                  <circle 
                    cx="0" 
                    cy="0" 
                    r={isCenter ? "9" : "5"} 
                    fill={node.accentHex} 
                    className="transition-all duration-200"
                  />

                  {/* Node Label Text */}
                  <text 
                    x="0" 
                    y={node.y > 270 && !isCenter ? 26 : (isCenter ? 34 : -20)} 
                    textAnchor="middle" 
                    className={`font-mono ${isCenter ? 'text-[11px] font-bold fill-google-blue' : 'text-[10px] font-semibold fill-charcoal-900'} tracking-tight`}
                    style={{ pointerEvents: 'none' }}
                  >
                    {node.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Live Agent Telemetry & Inspector Panel (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-charcoal-400 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-charcoal-500" />
                NODE TELEMETRY
              </span>
              <span 
                className="font-mono text-[10px] px-2 py-0.5 rounded uppercase font-semibold"
                style={{
                  backgroundColor: `${currentNode.accentHex}15`,
                  color: currentNode.accentHex
                }}
              >
                {currentNode.status}
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span 
                  className="w-2.5 h-2.5 rounded-full inline-block"
                  style={{ backgroundColor: currentNode.accentHex }}
                />
                <h4 className="text-base font-bold text-charcoal-900 font-sans tracking-tight">
                  {currentNode.name}
                </h4>
              </div>
              <p className="text-xs text-charcoal-500 font-mono pl-4">
                {currentNode.tag}
              </p>
            </div>

            <p className="mt-3 text-xs text-charcoal-600 leading-relaxed bg-gray-50/80 p-3 rounded-lg border border-gray-100 font-sans">
              <span className="font-semibold text-charcoal-800">Operational Role: </span>
              {currentNode.role}
            </p>
          </div>

          {/* Tools & Capabilities */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase text-charcoal-400 tracking-wider flex items-center gap-1">
              <Layers className="w-3 h-3" />
              Subsystems & Tools:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {currentNode.tools.map((t) => (
                <span 
                  key={t}
                  className="px-2 py-1 bg-white border border-gray-200 rounded font-mono text-[11px] text-charcoal-700 shadow-2xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Orchestration Concept Footnote */}
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-charcoal-500 font-mono">
            <span className="flex items-center gap-1">
              <Activity className="w-3.5 h-3.5 text-google-green" />
              Autonomous Crew Loop
            </span>
            <span className="text-charcoal-400">Click any node to inspect</span>
          </div>
        </div>
      </div>

      {/* Bottom Technical Strip: Flow Progression */}
      <div className="px-4 py-2.5 bg-gray-50/60 border-t border-gray-100 flex items-center justify-between text-[11px] text-charcoal-500 font-mono overflow-x-auto">
        <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
          <span className="font-bold text-charcoal-800">PIPELINE:</span>
          <span className="text-charcoal-700 font-medium">Agents</span>
          <ChevronRight className="w-3 h-3 text-charcoal-400" />
          <span className="text-charcoal-700 font-medium">Collaboration</span>
          <ChevronRight className="w-3 h-3 text-charcoal-400" />
          <span className="text-google-blue font-semibold">Orchestration</span>
          <ChevronRight className="w-3 h-3 text-charcoal-400" />
          <span className="text-google-green font-semibold">Result</span>
        </div>
        <span className="hidden md:inline text-charcoal-400 text-[10px]">
          Framework: CrewAI
        </span>
      </div>
    </div>
  );
};
