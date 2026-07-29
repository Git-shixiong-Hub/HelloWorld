import { projects } from "./data/project";
import { award } from "./data/award"
import { journey } from "./data/journey";
import InternshipSection from "./section/internship";
import ProjectSection from "./section/project";
import AwardSection from "./section/award";
import JourneySection from "./section/journey";
import { internship } from "./data/internship";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center gap-16 py-32 px-16 bg-white dark:bg-black sm:items-start">

        <div>
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">
            Chen ShiXiong
          </h1>
        </div>

        <InternshipSection internship={internship} />

        <ProjectSection projects={projects} />

        <AwardSection awards={award} />

        <JourneySection journey={journey} />

      </main>
    </div>
  );
}
