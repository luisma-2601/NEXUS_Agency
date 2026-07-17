import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/content';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-[1000] border-b border-border bg-[rgba(10,10,18,0.7)] backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-[18px]">
        <a href="#inicio" className="flex items-center gap-2.5 font-display text-[22px] font-bold">
          <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-accent-grad text-base font-bold text-white">
            N
          </span>
          Nexus
        </a>

        <div className="hidden gap-9 font-display text-[15px] font-medium uppercase tracking-wider text-text-dim md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-opacity hover:opacity-70" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          className="hidden rounded-[10px] bg-accent-grad px-[22px] py-2.5 text-sm font-semibold text-white shadow-nav-cta md:inline-block"
        >
          Agenda una llamada
        </a>

        <button
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setMenuOpen((open) => !open)}
          className="text-text md:hidden"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="flex flex-col gap-[18px] border-b border-border bg-[rgba(10,10,18,0.98)] px-6 py-5 font-display uppercase tracking-wider md:hidden">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-text-dim hover:text-text" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="w-fit rounded-[10px] bg-accent-grad px-[22px] py-2.5 text-sm font-semibold text-white shadow-nav-cta"
          >
            Agenda una llamada
          </a>
        </div>
      )}
    </header>
  );
}
