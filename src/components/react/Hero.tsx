import { motion } from 'framer-motion';
import { ChevronDown, Download, MessageSquare, Eye } from 'lucide-react';
import { personalInfo, summary } from '../../data/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';



export default function Hero() {
  const prefersReduced = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: prefersReduced ? 0 : 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(220,38,38,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(34,211,238,0.04),transparent_60%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
            {/* Status */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-status-pulse" />
              <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider">
                System Status: {personalInfo.statusText}
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <p className="font-mono text-text-muted text-sm mb-1 sm:mb-2">Hi, I&apos;m</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
                {personalInfo.shortName}
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p variants={itemVariants} className="text-xl sm:text-2xl font-semibold text-gradient-red">
              {personalInfo.tagline}
            </motion.p>

            {/* Role */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {personalInfo.role.split(' | ').map((r) => (
                <span key={r} className="font-mono text-xs px-3 py-1 rounded-full border border-border-subtle text-text-secondary bg-secondary">
                  {r}
                </span>
              ))}
            </motion.div>

            {/* Summary */}
            <motion.p variants={itemVariants} className="text-text-secondary leading-relaxed max-w-lg">
              {summary.slice(0, summary.indexOf('. A self-driven')) + '.'}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
              <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-accent-red hover:bg-accent-red-dark text-white font-medium rounded-lg transition-colors duration-200">
                <Eye className="w-4 h-4" />
                View My Work
              </a>
              <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-6 py-3 border border-border-subtle hover:border-border-hover text-text-secondary hover:text-text-primary rounded-lg transition-colors duration-200 bg-secondary/50">
                <Download className="w-4 h-4" />
                Download Résumé
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border border-border-subtle hover:border-accent-cyan text-text-secondary hover:text-accent-cyan rounded-lg transition-colors duration-200">
                <MessageSquare className="w-4 h-4" />
                Let&apos;s Talk
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: prefersReduced ? 0 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="glass-card rounded-lg p-3">
                {/* Title bar */}
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border-subtle">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-red" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="text-text-dark ml-2 font-mono text-xs">security-profile — identity</span>
                </div>
                {/* Profile Image */}
                <div className="relative overflow-hidden rounded-md">
                  <img
                    src={personalInfo.photoUrl}
                    alt={personalInfo.shortName}
                    className="w-full h-auto object-cover rounded-md"
                    loading="eager"
                  />
                  {/* Corner reticles */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-accent-red" />
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-accent-red" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-accent-red" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-accent-red" />
                </div>
              </div>
              {/* Status bar below image */}
              <div className="flex gap-2 mt-3">
                <div className="glass-card rounded-lg px-3 py-2 flex items-center gap-2 flex-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-status-pulse" />
                  <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">Status</span>
                  <span className="ml-auto font-mono text-[10px] text-green-400">ACTIVE</span>
                </div>
                <div className="glass-card rounded-lg px-3 py-2 flex items-center gap-2 flex-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-red animate-status-pulse" />
                  <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">Clearance</span>
                  <span className="ml-auto font-mono text-[10px] text-accent-red">OPERATOR</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-text-dark" />
        </motion.div>
      </div>
    </section>
  );
}
