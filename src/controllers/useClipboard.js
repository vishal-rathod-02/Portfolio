import { useCallback, useState } from 'react';

export function useClipboard(timeout = 1600) {
  const [copiedValue, setCopiedValue] = useState('');

  const copy = useCallback(
    async (value) => {
      if (!value) {
        return false;
      }

      try {
        await navigator.clipboard.writeText(value);
        setCopiedValue(value);
        window.setTimeout(() => setCopiedValue(''), timeout);
        return true;
      } catch {
        return false;
      }
    },
    [timeout],
  );

  return { copiedValue, copy };
}
