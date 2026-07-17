import { contactChannels } from '../../data/content';

export function Footer() {
  return (
    <footer className="border-t border-border py-11">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-2.5 font-display text-[18px] font-bold">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-grad text-[13px] font-bold text-white">
            N
          </span>
          Nexus
        </div>
        <span className="text-[13px] text-text-faint">
          © 2026 Nexus. Automatizaciones y páginas web para negocios que quieren crecer.
        </span>
        <div className="flex gap-3.5">
          {contactChannels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener"
              aria-label={channel.label}
              className="flex h-9 w-9 items-center justify-center rounded-[9px] border border-border bg-surface text-[15px]"
            >
              {channel.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
