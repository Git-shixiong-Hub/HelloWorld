import { projects } from "./data/project";
import { award } from "./data/award"
import { journey } from "./data/journey";
import ProjectSection from "./section/project";
import AwardSection from "./section/award";
import JourneySection from "./section/journey";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
            Chen ShiXiong
          </h1>
        </div>

        <ProjectSection projects={projects} />

        <AwardSection awards={award} />

        <JourneySection journey={journey} />

      </main>
    </div>
  );
}