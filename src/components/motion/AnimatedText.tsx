import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}

function Character({ char, index, total, scrollYProgress }: CharacterProps) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <span className="relative">
      <span className="invisible">{char === ' ' ? ' ' : char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char === ' ' ? ' ' : char}
      </motion.span>
    </span>
  );
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });
  const characters = Array.from(text);

  return (
    <p ref={ref} className={className}>
      {characters.map((char, i) => (
        <Character key={i} char={char} index={i} total={characters.length} scrollYProgress={scrollYProgress} />
      ))}
    </p>
  );
}
