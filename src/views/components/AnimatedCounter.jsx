import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function AnimatedCounter({ value, suffix = '', duration = 1100, className = '' }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) {
      return undefined;
    }

    let frameId;
    let startedAt;

    const tick = (timestamp) => {
      startedAt ??= timestamp;
      const progress = Math.min((timestamp - startedAt) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;

      setCount(Math.round(value * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [duration, isInView, value]);

  return (
    <strong className={className} ref={ref}>
      {count}
      {suffix}
    </strong>
  );
}
