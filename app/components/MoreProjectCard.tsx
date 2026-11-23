"use client";

import { useId, useState, type ReactNode } from "react";
import { ArrowUpRight } from "./Icons";

interface MoreProjectCardProps {
  project: {
    period: string;
    name: string;
    description: string;
    website: string | null;
    github: string | null;
  };
  children: ReactNode;
}

export function MoreProjectCard({ project, children }: MoreProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = useId();

  return (
    <article className="flex min-h-[210px] w-[82vw] max-w-[400px] shrink-0 snap-start flex-col rounded-xl border border-white/10 bg-surface sm:w-[360px] lg:w-[390px]">
      <div className="px-6 pt-6">
        <span className="block font-mono text-[13px] text-silver">{project.period}</span>
        <h3 className="mt-5 text-lg font-medium text-white">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-silver">{project.description}</p>
      </div>

      {(project.website || project.github) && (
        <div className="flex gap-5 px-6 pt-5">
          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-green transition-colors duration-150 hover:text-green-active"
            >
              Visit <ArrowUpRight size={14} weight="regular" />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-green transition-colors duration-150 hover:text-green-active"
            >
              GitHub <ArrowUpRight size={14} weight="regular" />
            </a>
          )}
        </div>
      )}

      <button
        type="button"
        className="mt-auto cursor-pointer px-6 pb-6 pt-5 text-left text-sm text-silver transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-green"
        aria-expanded={isExpanded}
        aria-controls={detailsId}
        onClick={() => setIsExpanded((expanded) => !expanded)}
      >
        {isExpanded ? "접기" : "자세히 보기"}
      </button>

      {isExpanded && (
        <div id={detailsId} className="border-t border-white/10 px-6 pb-6 pt-5">
          {children}
        </div>
      )}
    </article>
  );
}
