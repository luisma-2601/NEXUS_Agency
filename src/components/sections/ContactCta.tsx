import { FadeIn } from '../motion/FadeIn';
import { ContactButton } from '../common/ContactButton';
import { contactChannels } from '../../data/content';

export function ContactCta() {
  return (
    <section id="contacto" className="px-5 py-20 sm:px-8 sm:py-24 md:px-10 md:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 text-center">
        <FadeIn>
          <h2
            className="hero-heading font-display font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
          >
            Hablemos
          </h2>
          <p className="mt-4 text-[15px] text-text-dim sm:text-base">
            Cuéntanos qué necesitas y te respondemos en menos de 24 horas.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <ContactButton label="Contáctanos" />
        </FadeIn>

        <FadeIn delay={0.25} className="flex flex-wrap items-center justify-center gap-3.5">
          {contactChannels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener"
              className="flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2.5 text-sm text-text-dim transition-colors hover:border-accent/40 hover:text-text"
            >
              <span>{channel.icon}</span>
              {channel.label}
            </a>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
