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
        <h2 className="text-2xl font-bold whitespace-nowrap">Projects</h2>
        <div className="flex-1 h-px bg-white/15" />
      </div>

      <div className="relative space-y-8 max-w-2xl">
        <div className="absolute bottom-5 left-5 top-5 w-px bg-white/15" />

        {projects.map((project) => (
          <article key={project.name} className="relative flex gap-5">
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

              {project.highlights.length > 0 && (
                <ul className="mt-2 pl-4 space-y-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-xs text-zinc-600">
                      • {highlight}
                    </li>
                  ))}
                </ul>
              )}

              {project.languages.length > 0 && (
                <div className="mt-3 flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-zinc-700 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${project.languages[0].percentage}%`,
                        backgroundColor: project.languages[0].color,
                      }}
                    />
                  </div>

                  <span
                    className="text-xs font-semibold whitespace-nowrap"
                    style={{
                      color: project.languages[0].color,
                    }}
                  >
                    {project.languages[0].name}{" "}
                    {project.languages[0].percentage}%
                  </span>
                </div>
              )}

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