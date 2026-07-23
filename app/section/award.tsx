import ProjectGallery from "../gallery";

type Award = {
  date: string;
  name: string;
  description: string;
  images: string[];
};

type AwardSectionProps = {
  awards: Award[];
};

export default function AwardSection({
  awards,
}: AwardSectionProps) {
  return (
    <section className="w-full mt-16">
      <div className="flex items-center gap-6 mb-12">
        <div className="flex-1 h-px bg-white/15" />

        <h2 className="text-2xl font-bold whitespace-nowrap">
          Awards
        </h2>

        <div className="flex-1 h-px bg-white/15" />
      </div>

      <div className="relative space-y-8 max-w-2xl">
        <div className="absolute bottom-5 left-5 top-5 w-px bg-white/15" />

        {awards.map((award) => (
          <article
            key={award.name}
            className="relative flex gap-5"
          >
            <div className="z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#0d0d0d] text-sm font-semibold text-white">
            </div>

            <div className="min-w-0 pb-2">
              <time className="text-xs text-zinc-500">
                {award.date}
              </time>

              <p className="mt-1 text-sm font-semibold text-zinc-300">
                {award.name}
              </p>

              <p className="mt-1 text-xs text-zinc-600">
                {award.description}
              </p>
              
              <ProjectGallery
                images={award.images}
                projectName={award.name}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}