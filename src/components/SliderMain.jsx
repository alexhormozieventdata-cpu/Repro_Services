import { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioProjects } from '../data/portfolioData';

const slides = portfolioProjects.filter((project) => project.id >= 6 && project.id <= 8);

export default function SliderMain({ onProjectSelect }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  const showSlide = (index) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Featured projects">
      <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">Selected work</span>
          <h2 className="mt-2 font-outfit text-3xl font-extrabold text-brand-navy sm:text-4xl">
            Made to make an impression
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Print, graphics, and signage crafted to bring brands into focus.
          </p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="mr-2 font-outfit text-sm font-semibold tabular-nums text-slate-500" aria-live="polite">
            0{activeIndex + 1} <span className="text-slate-300">/</span> 0{slides.length}
          </span>
          <button
            type="button"
            onClick={() => showSlide(activeIndex - 1)}
            aria-label="Previous project"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-navy transition-colors hover:border-brand-blue hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => showSlide(activeIndex + 1)}
            aria-label="Next project"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-navy transition-colors hover:border-brand-blue hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className="overflow-hidden rounded-2xl bg-brand-navy shadow-card sm:rounded-3xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
        }}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        aria-roledescription="carousel"
      >
        <div
          className="flex transition-transform duration-700 ease-in-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((project, index) => (
            <article
              key={project.id}
              className="relative min-w-full overflow-hidden"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}: ${project.title}`}
              aria-hidden={index !== activeIndex}
            >
              <img
                src={project.image}
                alt={`${project.title} for ${project.client}`}
                className="h-[24rem] w-full object-cover sm:h-[30rem] lg:h-[34rem]"
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-5 p-5 text-white sm:flex-row sm:items-end sm:justify-between sm:p-8 lg:p-10">
                <div className="max-w-2xl">
                  <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h3 className="mt-3 font-outfit text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                    {project.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onProjectSelect?.(project)}
                  tabIndex={index === activeIndex ? 0 : -1}
                  className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-brand-orange px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-orange-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:self-auto"
                >
                  View project <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-2">
        {slides.map((project, index) => (
          <button
            key={project.id}
            type="button"
            onClick={() => showSlide(index)}
            aria-label={`Show project ${index + 1}: ${project.title}`}
            aria-current={index === activeIndex ? 'true' : undefined}
            className={`h-2 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue motion-reduce:transition-none ${
              index === activeIndex ? 'w-8 bg-brand-orange' : 'w-2 bg-slate-300 hover:bg-brand-blue'
            }`}
          />
        ))}
      </div>
    </section>
  );
}