import { Terminal } from 'lucide-react';
import { useTerminalController } from '../../controllers/useTerminalController';
import { Reveal } from '../components/Reveal.jsx';
import { SectionHeader } from '../components/SectionHeader.jsx';

export function TerminalSection() {
  const { input, setInput, history, commandList, runCommand } = useTerminalController();

  const handleSubmit = (event) => {
    event.preventDefault();
    runCommand(input);
  };

  return (
    <section className="content-section terminal-section section-shell" id="terminal">
      <SectionHeader
        eyebrow="Interactive"
        title="A compact terminal touch for developer personality."
        copy="A small command surface, kept intentionally restrained so the portfolio still feels professional and product-oriented."
      />

      <Reveal className="terminal-card">
        <div className="terminal-topbar">
          <div className="window-dots">
            <span />
            <span />
            <span />
          </div>
          <span>
            <Terminal size={15} />
            portfolio.shell
          </span>
        </div>

        <div className="terminal-output" aria-live="polite">
          {history.map((entry, entryIndex) => (
            <div className="terminal-entry" key={`${entry.command}-${entryIndex}`}>
              <p>
                <span>&gt;</span> {entry.command}
              </p>
              {entry.output.map((line) => (
                <code key={line}>{line}</code>
              ))}
            </div>
          ))}
        </div>

        <form className="terminal-input" onSubmit={handleSubmit}>
          <label htmlFor="terminal-command">&gt;</label>
          <input
            id="terminal-command"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Type help"
            autoComplete="off"
          />
          <button type="submit">Run</button>
        </form>

        <div className="command-chips" aria-label="Available terminal commands">
          {commandList.map((command) => (
            <button key={command} type="button" onClick={() => runCommand(command)}>
              {command}
            </button>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
