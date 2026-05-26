import { useCallback, useState } from 'react';

const defaultTransform = {
  rotateX: 0,
  rotateY: 0,
  translateX: 0,
  translateY: 0,
  glareX: 50,
  glareY: 50,
};

export function useMagneticTilt(strength = 18) {
  const [transform, setTransform] = useState(defaultTransform);

  const handlePointerMove = useCallback(
    (event) => {
      const bounds = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const centerX = bounds.width / 2;
      const centerY = bounds.height / 2;
      const percentX = (x - centerX) / centerX;
      const percentY = (y - centerY) / centerY;

      setTransform({
        rotateX: percentY * -strength * 0.45,
        rotateY: percentX * strength * 0.45,
        translateX: percentX * strength * 0.25,
        translateY: percentY * strength * 0.25,
        glareX: (x / bounds.width) * 100,
        glareY: (y / bounds.height) * 100,
      });
    },
    [strength],
  );

  const resetTransform = useCallback(() => {
    setTransform(defaultTransform);
  }, []);

  return {
    transform,
    pointerHandlers: {
      onPointerMove: handlePointerMove,
      onPointerLeave: resetTransform,
    },
  };
}
