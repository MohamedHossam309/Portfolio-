import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch, large screens
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice || window.innerWidth < 1024) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference transition-transform duration-200 ease-out"
        style={{
          left: position.x - 16,
          top: position.y - 16,
          width: 32,
          height: 32,
          border: '1px solid rgba(220, 38, 38, 0.6)',
          borderRadius: '50%',
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
        }}
      />
      {/* Center dot */}
      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: position.x - 2,
          top: position.y - 2,
          width: 4,
          height: 4,
          backgroundColor: '#dc2626',
          borderRadius: '50%',
        }}
      />
    </>
  );
}
