import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, Shield, FolderOpen } from 'lucide-react';
import { GithubIcon as Github } from '../icons/GithubIcon';
import { projects } from '../../data/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const prefersReduced = useReducedMotion();

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((project) => {
        const isExpanded = expandedId === project.id;
        const isPending = project.status === 'PENDING';

        return (
          <motion.div
            key={project.id}
            className={`glass-card glass-card-hover rounded-lg overflow-hidden transition-colors duration-200 ${
              isPending ? 'opacity-60' : ''
            }`}
            whileHover={prefersReduced ? {} : { y: -2 }}
          >
            {/* Header */}
            <div className="p-5">
              {/* Case file ID + status */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FolderOpen className="w-4 h-4 text-accent-red" />
                  <span className="font-mono text-xs text-accent-red font-bold">{project.id}</span>
                </div>
                <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${
                  isPending
                    ? 'text-text-dark border-border-subtle'
                    : 'text-green-400 border-green-400/30 bg-green-400/5'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Classification */}
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-3.5 h-3.5 text-text-dark" />
                <span className="font-mono text-[10px] text-text-dark uppercase tracking-wider">
                  {project.classification}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-text-primary mb-2">{project.title}</h3>
              <p className="text-sm text-text-secondary mb-3">{project.description}</p>

              {/* Stack */}
              {project.stack.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((tech) => (
                    <span key={tech} className="font-mono text-[10px] px-2 py-0.5 rounded bg-secondary border border-border-subtle text-text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Actions */}
              {!isPending && (
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : project.id)}
                    className="inline-flex items-center gap-1.5 text-xs text-accent-cyan hover:text-accent-cyan/80 transition-colors cursor-pointer"
                  >
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                    {isExpanded ? 'Close' : 'View Case Study'}
                  </button>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-text-muted hover:text-text-primary transition-colors">
                      <Github className="w-3.5 h-3.5" />
                      Source
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Expanded case study */}
            <AnimatePresence>
              {isExpanded && !isPending && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: prefersReduced ? 0 : 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-2 border-t border-border-subtle space-y-4">
                    {/* Details */}
                    <div>
                      <h4 className="font-mono text-xs text-text-dark uppercase tracking-wider mb-2">Key Features</h4>
                      <ul className="space-y-1.5">
                        {project.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                            <span className="text-accent-red mt-0.5 text-xs">▸</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Lessons */}
                    {project.lessonsLearned && (
                      <div>
                        <h4 className="font-mono text-xs text-text-dark uppercase tracking-wider mb-2">Lessons Learned</h4>
                        <p className="text-sm text-text-secondary">{project.lessonsLearned}</p>
                      </div>
                    )}

                    {/* GitHub link */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-accent-red hover:text-accent-red-dark transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Full Repository
                      </a>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
