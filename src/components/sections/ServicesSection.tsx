import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../motion/FadeIn';
import { services } from '../../data/content';

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <h2
        className="mb-16 text-center font-display font-black uppercase text-bg sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Servicios
      </h2>

      <div className="mx-auto flex max-w-5xl flex-col">
        {services.map((service, i) => (
          <FadeIn key={service.num} delay={i * 0.1}>
            <div
              className={`flex items-start gap-6 py-8 sm:py-10 md:py-12 ${i > 0 ? 'border-t' : ''}`}
              style={{ borderColor: 'rgba(12, 12, 12, 0.15)' }}
            >
              <span
                className="font-display font-black text-bg"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)', lineHeight: 1 }}
              >
                {service.num}
              </span>
              <div className="flex flex-1 flex-col gap-2 pt-2 sm:pt-4 md:pt-6">
                <h3
                  className="flex items-center gap-2 font-medium uppercase text-bg"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.title}
                  <ArrowUpRight className="text-bg/50" size={22} />
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-bg/60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
