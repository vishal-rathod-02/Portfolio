import { useMemo, useState } from 'react';
import { terminalCommands } from '../models/portfolio.model';

export function useTerminalController() {
  const [input, setInput] = useState('help');
  const [history, setHistory] = useState([
    {
      command: 'help',
      output: terminalCommands.help,
    },
  ]);

  const commandList = useMemo(() => Object.keys(terminalCommands), []);

  const runCommand = (command) => {
    const normalized = command.trim().toLowerCase();

    if (!normalized) {
      return;
    }

    if (normalized === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const output = terminalCommands[normalized] ?? [
      `Command not found: ${normalized}`,
      `Try: ${commandList.join(', ')}, clear`,
    ];

    setHistory((current) => [...current, { command: normalized, output }]);
    setInput('');
  };

  return {
    input,
    setInput,
    history,
    commandList: [...commandList, 'clear'],
    runCommand,
  };
}
