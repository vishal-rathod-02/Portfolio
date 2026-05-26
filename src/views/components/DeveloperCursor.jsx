import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function DeveloperCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothX = useSpring(cursorX, { stiffness: 420, damping: 32 });
  const smoothY = useSpring(cursorY, { stiffness: 420, damping: 32 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [label, setLabel] = useState('');

  useEffect(() => {
    const canUseCursor =
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!canUseCursor) {
      return undefined;
    }

    const updatePosition = (event) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      setIsVisible(true);
    };

    const updateTarget = (event) => {
      const target = event.target;
      const labeledTarget = target.closest?.('[data-cursor]');
      const interactiveTarget = target.closest?.(
        'a, button, input, textarea, select, [role="button"], [role="tab"]',
      );

      setLabel(labeledTarget?.dataset.cursor ?? (interactiveTarget ? 'Open' : ''));
    };

    const hideCursor = () => setIsVisible(false);
    const pressCursor = () => setIsPressed(true);
    const releaseCursor = () => setIsPressed(false);

    window.addEventListener('pointermove', updatePosition);
    window.addEventListener('pointerover', updateTarget);
    window.addEventListener('pointerdown', pressCursor);
    window.addEventListener('pointerup', releaseCursor);
    document.documentElement.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('pointermove', updatePosition);
      window.removeEventListener('pointerover', updateTarget);
      window.removeEventListener('pointerdown', pressCursor);
      window.removeEventListener('pointerup', releaseCursor);
      document.documentElement.removeEventListener('mouseleave', hideCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <div
      className={`developer-cursor ${isVisible ? 'developer-cursor--visible' : ''} ${
        label ? 'developer-cursor--active' : ''
      } ${isPressed ? 'developer-cursor--pressed' : ''}`}
      aria-hidden="true"
    >
      <motion.div className="developer-cursor__ring" style={{ x: smoothX, y: smoothY }}>
        {label ? <span>{label}</span> : null}
      </motion.div>
      <motion.div className="developer-cursor__dot" style={{ x: cursorX, y: cursorY }} />
    </div>
  );
}
