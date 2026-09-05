import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import { terminalCommands } from '../../data/portfolio';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface LineEntry {
  type: 'command' | 'output';
  text: string;
}

export default function TerminalSection() {
  const [lines, setLines] = useState<LineEntry[]>([]);
  const [currentCmd, setCurrentCmd] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (currentCmd >= terminalCommands.length) return;

    const cmd = terminalCommands[currentCmd];

    if (prefersReduced) {
      setLines((prev) => [
        ...prev,
        { type: 'command', text: `$ ${cmd.command}` },
        { type: 'output', text: `> ${cmd.output}` },
      ]);
      setCurrentCmd((c) => c + 1);
      return;
    }

    // Typing animation
    setIsTyping(true);
    let charIndex = 0;
    const fullText = cmd.command;

    const typeInterval = setInterval(() => {
      charIndex++;
      setTypingText(`$ ${fullText.slice(0, charIndex)}`);

      if (charIndex >= fullText.length) {
        clearInterval(typeInterval);
        setIsTyping(false);
        setTypingText('');

        // Add command line
        setLines((prev) => [...prev, { type: 'command', text: `$ ${fullText}` }]);

        // Show output after short delay
        setTimeout(() => {
          const outputLines = cmd.output.split('\n');
          for (let i = 0; i < outputLines.length; i++) {
            setTimeout(() => {
              setLines((prev) => [...prev, { type: 'output', text: `> ${outputLines[i]}` }]);
            }, i * 200);
          }

          // Move to next command
          setTimeout(() => {
            setCurrentCmd((c) => c + 1);
          }, outputLines.length * 200 + 600);
        }, 300);
      }
    }, 60);

    return () => clearInterval(typeInterval);
  }, [currentCmd, prefersReduced]);

  // Auto-scroll
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [lines, typingText]);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="glass-card rounded-lg overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border-subtle bg-secondary/50">
          <div className="w-2.5 h-2.5 rounded-full bg-accent-red" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <div className="flex items-center gap-1.5 ml-3">
            <Terminal className="w-3.5 h-3.5 text-text-dark" />
            <span className="font-mono text-xs text-text-dark">operator@mh-security ~ </span>
          </div>
        </div>

        {/* Terminal content */}
        <div ref={containerRef} className="p-4 font-mono text-sm min-h-[260px] max-h-[360px] overflow-y-auto space-y-1">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={line.type === 'command' ? 'text-accent-red' : 'text-accent-cyan'}
            >
              {line.text}
            </motion.div>
          ))}
          {/* Currently typing */}
          {isTyping && (
            <div className="text-accent-red">
              {typingText}
              <span className="inline-block w-2 h-4 bg-accent-red animate-status-pulse ml-0.5 align-middle" />
            </div>
          )}
          {/* Cursor when idle */}
          {!isTyping && currentCmd < terminalCommands.length && (
            <div className="text-text-dark">
              $ <span className="inline-block w-2 h-4 bg-accent-red animate-status-pulse ml-0.5 align-middle" />
            </div>
          )}
          {/* Done */}
          {currentCmd >= terminalCommands.length && (
            <div className="text-text-dark mt-2">
              $ <span className="text-text-muted">Session complete. Type &apos;help&apos; for more info.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
