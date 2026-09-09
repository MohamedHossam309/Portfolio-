import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// Authentic Kali Linux dragon vector path (official Kali Linux logomark)
const KALI_DRAGON_PATH = "m71.938 132.22c-29.422.0336-48.857 2.4022-49.018 2.4219-.00066.00008-.11132.01-.11132.01-1.9208.22095-1.6766 3.0824.2539 2.9746 0 0 106.98-5.0542 192.73 29.41 3.0595 13.089 11.139 33.152 15.912 43.816-6.4977 4.4595-13.468 8.9863-19.203 16.17-6.0198 7.5407-10.569 17.947-11.781 33.859-2.4573 32.277 25.225 60.533 59.463 61.404 31.749 1.6903 53.335 1.9234 79.613 15.543 12.272 6.7936 23.702 20.759 32.238 37.818 8.5411 17.068 14.208 37.205 15.225 56.195.0953 1.8662 2.8387 1.9003 2.9805.0371.005-.0578-.002-.13723.002-.19531 1.1026-14.541-1.0448-37.049-9.7617-58.461-7.3013-17.935-19.364-35.01-37.91-45.719 26.655 7.2789 41.914 20.807 50.686 33.168 10.065 14.183 11.551 26.806 11.543 26.736.21183 1.7846 2.8153 1.7434 2.9707-.0469 0 0 1.3231-15.473-9.3535-32.521-10.677-17.048-33.342-35.683-80.594-42.617-11.969-1.7561-27.074-3.1058-42.381-3.1445-.008-.00006-.0156-.00006-.0234 0-37.042.48976-55.716-20.623-58.623-42.279-1.4537-10.828 1.0887-21.796 7.3789-30.295 6.2903-8.4988 16.301-14.584 30.094-15.662h.006c22.647-1.8687 50.269 10.379 77.432 23.018-.027 3.1387.25112 6.3048 2.5449 9.1719 1.5359 1.9198 4.3068 3.2538 7.127 4.5859 2.8195 1.3318 5.7216 2.5388 6.873 3.1992 2.6176 1.5025 11.349 7.1032 16.496 13.803.66067.86123 1.9903.75224 2.502-.20508.0267-.05.80919-.9524 1.8418-1.8164 1.0326-.86401 2.3429-1.8488 3.6191-2.7676 2.5524-1.8375 4.9688-3.4121 4.9688-3.4121 1.2578-.81978.65535-2.7746-.8457-2.7441 0 0-.36678.0207-1.5391-.20313-1.1723-.22385-3.0361-.69459-5.6875-1.6855-2.4401-.91186-5.355-2.8865-7.6035-4.6719-1.1243-.89269-2.0919-1.7367-2.7754-2.3691-.0817-.0756-.11608-.11241-.18945-.18164.71444-.64282.81228-1.6703.66797-2.3164-.14752-.66029-.4352-1.1955-.75782-1.7168-.64468-1.0417-1.4644-1.9704-2.0312-2.5371l-.002-.002c.0821.0819-.16776-.20989-.41992-.57812-.25313-.36964-.57883-.86898-.94532-1.4453-.73297-1.1527-1.6317-2.6184-2.5058-4.0625-1.7483-2.8882-3.3259-5.5727-3.4785-5.8281-.002-.004-.37979-.7993-1.1133-1.2891-.1154-.0769-.24096-.13741-.37305-.17969-.82802-.26627-1.4844-.20389-2.334-.16015-.84955.0437-1.7923.1437-2.6856.25781-1.4943.19089-2.4216.35926-2.8262.42969-1.0103-.53287-8.9072-4.9072-11.809-13.82-.53531-1.6348-2.955-1.2177-2.9121.50196.0158.58562-.87006 2.3306-.67774 4.9707-3.5086-2.1141-6.527-5.4732-9.1562-12.393-.48274-1.276-2.2828-1.2899-2.7852-.0215-1.0069 2.5321-1.0677 4.6507-.86329 6.293-3.3327-1.5671-8.7895-5.0153-9.9785-11.869-.25503-1.4664-2.2636-1.698-2.8457-.32812-.98011 2.3107-1.0671 4.2231-.90235 5.7637-6.2107-2.6638-23.316-8.893-48.844-9.0312-4.927-.4525-8.8427-2.918-12.059-6.6152-3.2163-3.6977-5.659-8.6263-7.3887-13.73-1.7297-5.1042-2.7521-10.38-3.2148-14.732-.46272-4.3524-.2681-7.9507.0547-8.9824.21555-.6878-.0909-1.4314-.72852-1.7676 0 0-31.217-16.422-92.244-23.641-22.882-2.7067-44.211-3.5339-61.938-3.5137zm71.268 32.521c-9.2988.0701-19.28.41666-29.768 1.1621-56.026 3.9823-112.43 23.557-112.43 23.557-1.8043.62272-.9969 3.3276.85352 2.8594 0 0 115.04-28.873 211.14-11.949.0851.0153.17136.0231.25781.0234h.004c1.0058-.00041 1.7236-.97485 1.4258-1.9356l-2.5117-8.1055c-.16523-.5344-.61525-.93165-1.166-1.0293 0 0-27.515-4.8845-67.803-4.582-.004-.00002-.008-.00002-.0117 0zm68.311 17.264c-9.8882-.0418-40.315 1.204-86.016 15.504-57.354 17.946-89.998 43.459-89.998 43.459-1.4384 1.1375.04323 3.3653 1.6484 2.4785 0 0 84.923-47.363 180.56-50.051.99906-.0288 1.6884-1.0119 1.375-1.9609l-2.748-8.3184c-.19067-.57703-.712-.98095-1.3184-1.0215 0 0-1.2177-.0802-3.5-.0899zm62.531-.13867c-1.4649.0214-2.0262 1.9197-.8086 2.7344h.002c.0877.0585.18128.10765.27929.14648 26.227 10.663 48.975 24.757 66.609 44.131.0159.0173.0321.0342.0488.0508l.002.002c.30389.30352.72375.4615 1.1523.43359l4.2793-.2793c1.214-.0799 1.8281-1.5003 1.0547-2.4394 0 0-24.778-30.028-72.021-44.662-.005-.002-.0101-.006-.0156-.008-.0239-.009-.048-.0175-.0723-.0254-.0136-.005-.0273-.009-.041-.0137-.15151-.0482-.30975-.072-.46875-.0703zm74.68 63.225c.858.17286 2.4764 3.3569 3.9629 5.6309.1305.18477.26337.38161.38867.53711 0 .0138.002.0235.0117.0371.1679.23967.33529.48794.49609.6875.081.47558.21622.76606-.89648.53711-.094-.48886-.25391-.63086-.25391-.63086s-2.6864-1.5969-3.5098-2.7305c-.8241-1.1335-.9681-3.1153-.5664-3.8672.0971-.16808.22119-.22899.36719-.20118z";

// Wing and body emitter zones in SVG coordinates (viewBox: 0 74.28 437.72 363.44)
const EMITTER_ZONES = [
  // Outer Wing Tip & Upper Wing Sweep (primary flame zone)
  { x: 32, y: 136, spread: 6, weight: 1.4, type: 'flame' },
  { x: 55, y: 126, spread: 8, weight: 1.2, type: 'flame' },
  { x: 80, y: 114, spread: 9, weight: 1.3, type: 'flame' },
  { x: 108, y: 104, spread: 10, weight: 1.5, type: 'flame' },
  { x: 136, y: 96, spread: 11, weight: 1.6, type: 'flame' },
  { x: 164, y: 94, spread: 12, weight: 1.7, type: 'flame' },
  { x: 194, y: 98, spread: 10, weight: 1.5, type: 'flame' },
  { x: 224, y: 110, spread: 10, weight: 1.3, type: 'flame' },
  { x: 248, y: 128, spread: 8, weight: 1.1, type: 'flame' },

  // Mid-wing feather ridges
  { x: 142, y: 144, spread: 8, weight: 0.9, type: 'flame' },
  { x: 178, y: 140, spread: 8, weight: 1.0, type: 'flame' },
  { x: 212, y: 154, spread: 7, weight: 0.8, type: 'flame' },

  // Dragon Head Horn & Crest
  { x: 292, y: 172, spread: 6, weight: 0.9, type: 'ember' },
  { x: 318, y: 196, spread: 5, weight: 0.7, type: 'ember' },

  // Serpentine Spine & Tail Barb
  { x: 268, y: 255, spread: 7, weight: 0.8, type: 'ember' },
  { x: 382, y: 358, spread: 8, weight: 0.9, type: 'ember' },
  { x: 412, y: 388, spread: 6, weight: 1.0, type: 'flame' },
];

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  maxRadius: number;
  life: number;
  maxLife: number;
  colorType: 'core' | 'ember' | 'smoke' | 'cyber';
  alpha: number;
  driftFactor: number;
}

export default function AnimatedKaliBackground() {
  const prefersReduced = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // ViewBox coordinate mapping constants
    // SVG viewBox: 0 74.28 437.72 363.44
    // Canvas internal buffer: 876 x 728 (2x resolution for retina sharpness)
    const scaleX = 876 / 437.72;
    const scaleY = 728 / 363.44;
    const yOffset = 74.28;

    // Responsive particle count (reduced on mobile for buttery smooth 60fps)
    const isMobile = window.innerWidth < 768;
    const MAX_PARTICLES = isMobile ? 48 : 110;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let time = 0;
    let isVisible = true;

    // Helper: spawn single particle along dragon's wing/body contours
    const spawnParticle = (forceType?: 'flame' | 'ember' | 'smoke' | 'cyber'): Particle => {
      const zone = EMITTER_ZONES[Math.floor(Math.random() * EMITTER_ZONES.length)];
      const baseSvgX = zone.x + (Math.random() - 0.5) * zone.spread;
      const baseSvgY = zone.y + (Math.random() - 0.5) * zone.spread;

      const px = baseSvgX * scaleX;
      const py = (baseSvgY - yOffset) * scaleY;

      const type = forceType || (Math.random() < 0.65 ? 'core' : Math.random() < 0.85 ? 'ember' : Math.random() < 0.95 ? 'smoke' : 'cyber');

      if (type === 'core') {
        // Main flame tongue particle
        const maxLife = isMobile ? (25 + Math.random() * 25) : (35 + Math.random() * 35);
        return {
          x: px,
          y: py,
          vx: (Math.random() - 0.5) * 0.7,
          vy: -(1.2 + Math.random() * 2.2) * (isMobile ? 0.8 : 1.0),
          radius: (isMobile ? 5 : 8) + Math.random() * (isMobile ? 7 : 13),
          maxRadius: (isMobile ? 7 : 12) + Math.random() * (isMobile ? 8 : 14),
          life: 0,
          maxLife,
          colorType: 'core',
          alpha: 0.65 + Math.random() * 0.35,
          driftFactor: 0.8 + Math.random() * 1.5,
        };
      } else if (type === 'ember') {
        // Sparks / embers breaking away and floating high
        const maxLife = isMobile ? (45 + Math.random() * 35) : (65 + Math.random() * 60);
        return {
          x: px,
          y: py,
          vx: (Math.random() - 0.5) * 1.4,
          vy: -(1.6 + Math.random() * 2.8),
          radius: 1.2 + Math.random() * 2.2,
          maxRadius: 2.0 + Math.random() * 1.5,
          life: 0,
          maxLife,
          colorType: 'ember',
          alpha: 0.8 + Math.random() * 0.2,
          driftFactor: 1.2 + Math.random() * 1.8,
        };
      } else if (type === 'smoke') {
        // Subtle dark crimson dissipating smoke
        const maxLife = 50 + Math.random() * 40;
        return {
          x: px,
          y: py - 10,
          vx: (Math.random() - 0.5) * 0.5,
          vy: -(0.5 + Math.random() * 1.0),
          radius: 14 + Math.random() * 16,
          maxRadius: 28 + Math.random() * 24,
          life: 0,
          maxLife,
          colorType: 'smoke',
          alpha: 0.08 + Math.random() * 0.06,
          driftFactor: 0.5 + Math.random() * 0.8,
        };
      } else {
        // Digital cyber energy pixel mote
        const maxLife = 60 + Math.random() * 50;
        return {
          x: px + (Math.random() - 0.5) * 30,
          y: py + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 0.4,
          vy: -(0.8 + Math.random() * 1.2),
          radius: 1.5 + Math.random() * 1.0,
          maxRadius: 2.0,
          life: 0,
          maxLife,
          colorType: 'cyber',
          alpha: 0.7 + Math.random() * 0.3,
          driftFactor: 0.3,
        };
      }
    };

    // Pre-populate particles so there is no cold-start flicker
    for (let i = 0; i < MAX_PARTICLES; i++) {
      const p = spawnParticle();
      p.life = Math.random() * p.maxLife; // Stagger lifecycle
      particles.push(p);
    }

    // Render static frame if prefers-reduced-motion is active
    if (prefersReduced) {
      ctx.clearRect(0, 0, 876, 728);
      ctx.globalCompositeOperation = 'lighter';
      for (const p of particles) {
        if (p.colorType === 'core') {
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 1.5);
          grad.addColorStop(0, 'rgba(239, 68, 68, 0.4)');
          grad.addColorStop(0.5, 'rgba(220, 38, 38, 0.2)');
          grad.addColorStop(1, 'rgba(153, 27, 27, 0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      return;
    }

    // Animation Loop
    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      time += 0.03;
      ctx.clearRect(0, 0, 876, 728);

      // 1. Draw subtle smoke wisps first (source-over blending)
      ctx.globalCompositeOperation = 'source-over';
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (p.colorType === 'smoke') {
          const progress = p.life / p.maxLife;
          const currentRadius = p.radius + (p.maxRadius - p.radius) * progress;
          const currentAlpha = p.alpha * Math.sin(progress * Math.PI);

          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, currentRadius);
          grad.addColorStop(0, `rgba(70, 10, 15, ${currentAlpha.toFixed(3)})`);
          grad.addColorStop(0.6, `rgba(35, 8, 12, ${(currentAlpha * 0.5).toFixed(3)})`);
          grad.addColorStop(1, 'rgba(10, 5, 8, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2. Draw luminous flame tongues & embers with additive blending
      ctx.globalCompositeOperation = 'lighter';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life += 1;

        if (p.life >= p.maxLife) {
          particles[i] = spawnParticle();
          continue;
        }

        const progress = p.life / p.maxLife;

        // Natural turbulent waver
        const wobble = Math.sin(time * p.driftFactor + i) * 0.45;
        p.x += p.vx + wobble;
        p.y += p.vy;

        if (p.colorType === 'core') {
          // Flame tongue: shrinks, transitions from intense orange-red to crimson to dark red
          const currentRadius = p.maxRadius * (1 - progress * 0.65);
          const currentAlpha = p.alpha * Math.sin(progress * Math.PI) * (0.8 + 0.2 * Math.sin(time * 6 + i));

          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, currentRadius);
          // High temperature fiery core
          grad.addColorStop(0, `rgba(254, 215, 170, ${(currentAlpha * 0.95).toFixed(3)})`);
          grad.addColorStop(0.2, `rgba(251, 146, 60, ${(currentAlpha * 0.85).toFixed(3)})`);
          grad.addColorStop(0.55, `rgba(239, 68, 68, ${(currentAlpha * 0.65).toFixed(3)})`);
          grad.addColorStop(0.85, `rgba(185, 28, 28, ${(currentAlpha * 0.35).toFixed(3)})`);
          grad.addColorStop(1, 'rgba(127, 29, 29, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.colorType === 'ember') {
          // High rising embers with micro-flicker
          const flicker = 0.6 + 0.4 * Math.sin(time * 12 + i * 2);
          const currentAlpha = p.alpha * (1 - progress) * flicker;

          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2);
          grad.addColorStop(0, `rgba(254, 240, 138, ${currentAlpha.toFixed(3)})`);
          grad.addColorStop(0.35, `rgba(249, 115, 22, ${(currentAlpha * 0.85).toFixed(3)})`);
          grad.addColorStop(0.8, `rgba(220, 38, 38, ${(currentAlpha * 0.4).toFixed(3)})`);
          grad.addColorStop(1, 'rgba(153, 27, 27, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.colorType === 'cyber') {
          // Digital square energy motes
          const currentAlpha = p.alpha * (1 - progress);
          ctx.fillStyle = `rgba(239, 68, 68, ${(currentAlpha * 0.6).toFixed(3)})`;
          ctx.fillRect(p.x - p.radius, p.y - p.radius, p.radius * 2, p.radius * 2);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Tab visibility handling (pause CPU/GPU when not in focus)
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [prefersReduced]);

  return (
    <div
      id="kali-fixed-bg"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center select-none"
      aria-hidden="true"
    >
      {/* Deep Atmospheric Cyber-Security Red Radial Aura */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_45%,rgba(220,38,38,0.12),rgba(153,27,27,0.05)_45%,transparent_75%)]"
        aria-hidden="true"
      />
      
      {/* Secondary Cyan Accent Radial Aura (Subtle Cyber Contrast matching portfolio theme) */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_35%,rgba(34,211,238,0.03),transparent_70%)]"
        aria-hidden="true"
      />

      {/* Dragon Stage Container - Fixed anchored behind content */}
      <div
        className="relative w-[95vw] sm:w-[90vw] md:w-[86vw] max-w-[1150px] aspect-[438/364] flex items-center justify-center transition-opacity duration-1000"
        style={{
          // Center the dragon with slight offset matching the hero composition
          transform: 'translate3d(0, 0, 0)',
        }}
      >
        {/* Dragon SVG Layer with subtle breathing / floating animation */}
        <div
          className={`relative w-full h-full flex items-center justify-center ${
            prefersReduced ? 'opacity-[0.24]' : 'animate-kali-breathe'
          }`}
        >
          <svg
            viewBox="0 0 437.72 363.44"
            className="w-full h-full filter drop-shadow-[0_0_35px_rgba(220,38,38,0.32)]"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Dragon body gradient: Ruby Red to Deep Crimson Obsidian */}
              <linearGradient id="kaliRedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f87171" stopOpacity="0.95" />
                <stop offset="25%" stopColor="#ef4444" stopOpacity="0.92" />
                <stop offset="60%" stopColor="#dc2626" stopOpacity="0.88" />
                <stop offset="85%" stopColor="#991b1b" stopOpacity="0.82" />
                <stop offset="100%" stopColor="#450a0a" stopOpacity="0.75" />
              </linearGradient>

              {/* Wing Edge Cyber Rim Light Gradient */}
              <linearGradient id="kaliRimLight" x1="0%" y1="0%" x2="70%" y2="50%">
                <stop offset="0%" stopColor="#fca5a5" stopOpacity="0.7" />
                <stop offset="40%" stopColor="#ef4444" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0" />
              </linearGradient>

              {/* Ambient Glow Filter */}
              <filter id="kaliDragonGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Dragon Ambient Glow Shadow Path */}
            <path
              d={KALI_DRAGON_PATH}
              fill="none"
              stroke="rgba(220, 38, 38, 0.45)"
              strokeWidth="5"
              filter="url(#kaliDragonGlow)"
              className="opacity-70"
            />

            {/* Main Dragon Silhouette Body */}
            <path
              d={KALI_DRAGON_PATH}
              fill="url(#kaliRedGradient)"
              stroke="url(#kaliRimLight)"
              strokeWidth="0.75"
              className="opacity-95"
            />
          </svg>

          {/* Procedural High-Performance Flame & Energy Canvas */}
          <canvas
            ref={canvasRef}
            width={876}
            height={728}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              mixBlendMode: 'screen',
              filter: 'drop-shadow(0 0 16px rgba(239, 68, 68, 0.5))',
            }}
          />
        </div>
      </div>
    </div>
  );
}
