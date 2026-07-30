import ProjectGallery from "../gallery";

type Project = {
  date: string;
  name: string;
  description: string;
  highlights: string[];
  languages: {
    name: string;
    percentage: number;
    color: string;
  }[];
  images: string[];
};

type ProjectSectionProps = {
  projects: Project[];
};

export default function ProjectSection({ projects }: ProjectSectionProps) {
  return (
    <section className="w-full">
      <div className="flex items-center gap-6 mb-12">
        <div className="flex-1 h-px bg-white/15" />

        <h2 className="text-2xl font-bold whitespace-nowrap">
          Project
        </h2>

        <div className="flex-1 h-px bg-white/15" />
      </div>

      <div className="relative space-y-8 max-w-2xl">
        <div className="absolute bottom-5 left-5 top-5 w-px bg-white/15" />

        {projects.map((project) => (
          <article
            key={project.name}
            className="relative flex gap-5"
          >
            {/* Timeline circle */}
            <div className="z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#0d0d0d] text-sm font-semibold text-white">
            </div>

            <div className="min-w-0 pb-2">
              <time className="text-xs text-zinc-500">
                {project.date}
              </time>

              <p className="mt-1 text-sm font-semibold text-zinc-300">
                {project.name}
              </p>

              <p className="mt-1 text-xs text-zinc-600">
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights.length > 0 && (
                <ul className="mt-2 pl-4 space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-zinc-600"
                    >
                      • {highlight}
                    </li>
                  ))}
                </ul>
              )}

              {/* GitHub-style language bar */}
              {project.languages.length > 0 && (
                <div className="mt-3">
                  {/* Stacked bar */}
                  <div className="flex h-2 w-[300px] overflow-hidden rounded-full bg-zinc-700">
                    {project.languages.map((language) => (
                      <div
                        key={language.name}
                        className="h-full"
                        style={{
                          width: `${language.percentage}%`,
                          backgroundColor: language.color,
                        }}
                      />
                    ))}
                  </div>

                  {/* Language legend */}
                  <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                    {project.languages.map((language) => (
                      <div
                        key={language.name}
                        className="flex items-center gap-1 text-xs text-zinc-500"
                      >
                        <span
                          className="size-2 rounded-full"
                          style={{
                            backgroundColor: language.color,
                          }}
                        />

                        <span>
                          {language.name} {language.percentage}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Images */}
              <ProjectGallery
                images={project.images}
                projectName={project.name}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}