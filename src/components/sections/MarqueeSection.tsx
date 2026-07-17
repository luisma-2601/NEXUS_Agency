import { useEffect, useRef } from 'react';
import { marqueeRow1, marqueeRow2, type MarqueeTile } from '../../data/marqueeMedia';

function tripleTiles(tiles: MarqueeTile[]) {
  return [...tiles, ...tiles, ...tiles];
}

const row1Tiles = tripleTiles(marqueeRow1);
const row2Tiles = tripleTiles(marqueeRow2);

export function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleScroll() {
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.offsetTop;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      if (row1Ref.current) row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      if (row2Ref.current) row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden bg-bg pb-10 pt-24 sm:pt-32 md:pt-40">
      <div ref={row1Ref} className="mb-3 flex gap-3" style={{ willChange: 'transform' }}>
        {row1Tiles.map((tile, i) => (
          <img
            key={`${tile.id}-${i}`}
            src={tile.src}
            alt={tile.alt}
            loading="lazy"
            className="h-[270px] w-[420px] flex-shrink-0 rounded-2xl object-cover"
          />
        ))}
      </div>
      <div ref={row2Ref} className="flex gap-3" style={{ willChange: 'transform' }}>
        {row2Tiles.map((tile, i) => (
          <img
            key={`${tile.id}-${i}`}
            src={tile.src}
            alt={tile.alt}
            loading="lazy"
            className="h-[270px] w-[420px] flex-shrink-0 rounded-2xl object-cover"
          />
        ))}
      </div>
    </section>
  );
}
