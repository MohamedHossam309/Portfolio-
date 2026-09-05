import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { methodology } from '../../data/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function Methodology() {
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();

  return (
    <div className="space-y-8">
      {/* Timeline */}
      <div className="relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-border-subtle" />

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
          {methodology.map((step, index) => (
            <motion.button
              key={step.stage}
              onClick={() => setActiveStage(activeStage === index ? null : index)}
              className={`relative flex flex-col items-center gap-2 p-3 rounded-lg border transition-all duration-200 cursor-pointer ${
                activeStage === index
                  ? 'border-accent-red bg-accent-red/10'
                  : 'border-border-subtle hover:border-border-hover bg-card hover:bg-card-hover'
              }`}
              whileHover={prefersReduced ? {} : { y: -2 }}
              whileTap={prefersReduced ? {} : { scale: 0.98 }}
            >
              <span className={`font-mono text-xs font-bold ${
                activeStage === index ? 'text-accent-red' : 'text-text-dark'
              }`}>
                {step.stage}
              </span>
              <span className={`text-[10px] sm:text-xs text-center leading-tight ${
                activeStage === index ? 'text-text-primary' : 'text-text-muted'
              }`}>
                {step.title}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Detail panel */}
      <AnimatePresence mode="wait">
        {activeStage !== null && (
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: prefersReduced ? 0 : 0.3 }}
            className="overflow-hidden"
          >
            <div className="glass-card rounded-lg p-6">
              <div className="flex items-start gap-4 mb-4">
                <span className="font-mono text-2xl font-bold text-accent-red">
                  {methodology[activeStage].stage}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary">
                    {methodology[activeStage].title}
                  </h3>
                  <p className="text-text-secondary text-sm mt-1">
                    {methodology[activeStage].description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Tools */}
                <div>
                  <h4 className="font-mono text-xs text-text-dark uppercase tracking-wider mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {methodology[activeStage].tools.map((tool) => (
                      <span key={tool} className="font-mono text-xs px-2 py-0.5 rounded bg-secondary border border-border-subtle text-text-muted">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Objectives */}
                <div>
                  <h4 className="font-mono text-xs text-text-dark uppercase tracking-wider mb-2">Objectives</h4>
                  <ul className="space-y-1">
                    {methodology[activeStage].objectives.map((obj) => (
                      <li key={obj} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="text-accent-red mt-1 text-xs">▸</span>
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Disclaimer */}
      <p className="text-center text-text-dark text-xs font-mono">
        Methodology framework based on DEPI Vulnerability Analyst & Penetration Tester training track.
        For educational reference only.
      </p>
    </div>
  );
}
