import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects, type Project } from '../../data/projects';
import { LiveProjectButton } from '../common/LiveProjectButton';

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
}

function ProjectCard({ project, index, total }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ['start end', 'start start'] });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 h-[85vh] md:top-32"
      style={{ top: `${96 + index * 28}px`, zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale }}
        className="h-full rounded-[40px] border-2 border-text bg-bg p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="mb-4 flex flex-wrap items-center gap-4 sm:mb-6">
          <span
            className="font-display font-black text-text"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)', lineHeight: 1 }}
          >
            {project.num}
          </span>
          <div className="flex flex-1 flex-col gap-1">
            <span className="text-xs font-medium uppercase tracking-widest text-accent-2">{project.category}</span>
            <h3 className="font-display text-xl font-semibold uppercase text-text sm:text-2xl md:text-3xl">
              {project.name}
            </h3>
          </div>
          <LiveProjectButton />
        </div>

        <p className="mb-4 max-w-xl text-sm text-text-dim sm:mb-6">{project.description}</p>

        <div className="flex gap-3" style={{ height: 'clamp(160px, 26vw, 340px)' }}>
          <div className="flex w-[40%] flex-col gap-3">
            <img
              src={project.imageLeft1}
              alt={project.alt}
              className="w-full flex-shrink-0 rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.imageLeft2}
              alt={project.alt}
              className="w-full flex-1 rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
          <img
            src={project.imageRight}
            alt={project.alt}
            className="w-[60%] rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
          />
        </div>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="proyectos"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-bg px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <h2
        className="hero-heading mb-16 text-center font-display font-black uppercase leading-none tracking-tight sm:mb-20"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Proyecto
      </h2>

      <div className="mx-auto max-w-5xl">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} total={projects.length} />
        ))}
        <div aria-hidden className="h-[20vh]" />
      </div>
    </section>
  );
}
