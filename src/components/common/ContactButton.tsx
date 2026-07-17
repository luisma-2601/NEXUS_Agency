interface ContactButtonProps {
  href?: string;
  label?: string;
  className?: string;
}

export function ContactButton({ href = '#contacto', label = 'Contáctanos', className }: ContactButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-accent-grad px-8 py-3 text-xs font-medium uppercase tracking-widest text-white shadow-btn-primary transition-transform hover:-translate-y-0.5 sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className ?? ''}`}
    >
      {label}
    </a>
  );
}
