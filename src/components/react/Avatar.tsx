import { personalInfo } from '../../data/portfolio';

interface AvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'hero' | 'about';
  className?: string;
}

const sizeMap = {
  sm: { container: 'w-12 h-12', text: 'text-sm', label: 'text-[6px]' },
  md: { container: 'w-24 h-24', text: 'text-2xl', label: 'text-[8px]' },
  lg: { container: 'w-36 h-36', text: 'text-4xl', label: 'text-[10px]' },
  hero: { container: 'w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56', text: 'text-2xl sm:text-3xl md:text-5xl lg:text-6xl', label: 'text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px]' },
  about: { container: 'w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80', text: 'text-4xl md:text-6xl lg:text-8xl', label: 'text-[10px] md:text-[12px] lg:text-[16px]' },
};

export default function Avatar({ size = 'md', className = '' }: AvatarProps) {
  const s = sizeMap[size];

  if (personalInfo.hasPhoto) {
    return (
      <div className={`relative ${s.container} ${className}`}>
        <div className={`${s.container} avatar-scan-frame rounded-lg border border-border-subtle`}>
          <img
            src={personalInfo.photoUrl}
            alt={personalInfo.shortName}
            className={`${s.container} rounded-lg object-cover`}
            loading="eager"
          />
        </div>
        <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t border-l border-accent-red" />
        <div className="absolute -top-0.5 -right-0.5 w-3 h-3 border-t border-r border-accent-red" />
        <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-b border-l border-accent-red" />
        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b border-r border-accent-red" />
      </div>
    );
  }

  return (
    <div className={`relative ${s.container} ${className}`}>
      {/* Outer frame */}
      <div className={`${s.container} avatar-scan-frame rounded-lg border border-border-subtle bg-secondary flex items-center justify-center relative overflow-hidden`}>
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1),transparent_70%)]" />
        {/* Initials */}
        <span className={`font-mono font-bold ${s.text} text-text-primary relative z-10`}>
          {personalInfo.initials}
        </span>
        {/* OPERATOR label */}
        <span className={`absolute bottom-1 font-mono ${s.label} text-accent-red tracking-[0.2em] uppercase`}>
          OPERATOR
        </span>
      </div>
      {/* Corner reticles */}
      <div className="absolute -top-0.5 -left-0.5 w-3 h-3 border-t border-l border-accent-red" />
      <div className="absolute -top-0.5 -right-0.5 w-3 h-3 border-t border-r border-accent-red" />
      <div className="absolute -bottom-0.5 -left-0.5 w-3 h-3 border-b border-l border-accent-red" />
      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 border-b border-r border-accent-red" />
    </div>
  );
}
