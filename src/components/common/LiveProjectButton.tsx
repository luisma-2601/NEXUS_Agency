import { ArrowUpRight } from 'lucide-react';

interface LiveProjectButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export function LiveProjectButton({ href = '#contacto', label = 'Ver proyecto', className }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-1.5 rounded-full border-2 border-text px-8 py-3 text-sm font-medium uppercase tracking-widest text-text transition-colors hover:bg-text/10 sm:px-10 sm:py-3.5 ${className ?? ''}`}
    >
      {label}
      <ArrowUpRight size={16} />
    </a>
  );
}
