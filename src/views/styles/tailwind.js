export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const sectionShell =
  'mx-auto w-[min(1180px,calc(100vw-40px))] max-[720px]:w-[min(calc(100vw-24px),1180px)]';

export const contentSection = 'py-24 max-[720px]:py-[72px]';

export const eyebrowText =
  'mb-4 inline-flex items-center gap-2 font-mono text-[0.76rem] font-semibold uppercase text-portfolio-mint';

export const glassPanel =
  'border border-[var(--line)] bg-[var(--surface)] shadow-[0_18px_60px_rgba(0,0,0,0.2)] backdrop-blur-[16px]';

export const glassPanelStrong =
  'border border-[var(--line)] bg-[var(--surface-strong)] shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-[16px]';

export const iconButtonClass =
  'inline-grid h-10 w-10 place-items-center rounded-full border border-[var(--line)] bg-white/[0.055] text-portfolio-text transition duration-200 hover:-translate-y-px hover:border-[rgba(117,240,191,0.45)] hover:bg-[rgba(117,240,191,0.1)]';

export const textButtonClass =
  'inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-white/[0.055] px-[13px] text-[0.86rem] font-extrabold text-portfolio-text transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(117,240,191,0.42)] hover:bg-[rgba(117,240,191,0.1)]';

export const cardIconClass =
  'inline-grid h-[42px] w-[42px] place-items-center rounded-[var(--radius-sm)] border border-[rgba(117,240,191,0.24)] bg-[rgba(117,240,191,0.1)] text-portfolio-mint';

export const smallPillClass =
  'inline-flex min-h-[30px] items-center gap-1.5 rounded-full border border-[var(--line)] bg-white/[0.055] px-2.5 text-[0.72rem] font-extrabold text-portfolio-muted';

export const stackPillClass =
  'inline-flex min-h-8 items-center rounded-full border border-[var(--line)] bg-white/[0.055] px-[11px] text-[0.79rem] font-extrabold text-portfolio-text';

export const modalBackdropClass =
  'fixed inset-0 z-[80] grid place-items-center bg-[rgba(1,4,3,0.72)] p-5 backdrop-blur-xl';

export const modalPanelClass =
  'relative max-h-[min(740px,calc(100svh-40px))] overflow-y-auto rounded-[var(--radius-xl)] border border-[var(--line-strong)] bg-[rgba(17,25,21,0.96)] p-[clamp(22px,4vw,34px)] shadow-[var(--shadow)]';

export const buttonBase =
  'inline-flex min-h-12 items-center justify-center gap-[9px] rounded-full border px-[18px] text-[0.94rem] font-extrabold transition duration-200 hover:-translate-y-0.5 max-[720px]:w-full';

export const buttonPrimary =
  `${buttonBase} border-transparent bg-gradient-to-br from-portfolio-mint to-portfolio-cyan text-[#07100d] shadow-[0_18px_42px_rgba(117,240,191,0.2)]`;

export const buttonSecondary =
  `${buttonBase} border-[var(--line)] bg-white/[0.06] text-portfolio-text hover:border-[rgba(117,240,191,0.4)] hover:bg-[rgba(117,240,191,0.1)]`;
