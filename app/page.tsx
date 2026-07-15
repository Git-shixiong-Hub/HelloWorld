import Image from "next/image";

export default function Home() {
  const Journey  = [
    {
      date: "Sep 2024 - Present",
      name: "Singapore University of Technology and Design",
      degree: "Bachelor of Engineering (Computer Science and Design)",
    },
    {
      date: "Sep 2022 - Jul 2024",
      name: "Singapore Armed Forces",
      degree: "Corporal First Class",
    },
    {
      date: "Apr 2019 - May 2022",
      name: "Ngee Ann Polytechnic",
      degree: "Diploma in Aerospace Electronics",
    },
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <section className="w-full">
          <div className="flex items-center gap-6 mb-12">
            <div className="flex-1 h-px bg-white/15" />
            <h2 className="text-2xl font-bold whitespace-nowrap">Journey</h2>
            <div className="flex-1 h-px bg-white/15" />
          </div>

          <div className="relative space-y-8 max-w-2xl">           
            <div className="absolute bottom-5 left-5 top-5 w-px bg-white/15" />
            
            {Journey.map((journey) => (
              <article key={journey.name} className="relative flex gap-5">       
                <div className="z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#0d0d0d] text-sm font-semibold text-white">
                  
                </div>
                <div className="min-w-0 pb-2">
                  <time className="text-xs text-zinc-500">{journey.date}</time>                 
                  <p className="mt-1 text-sm font-semibold text-zinc-300">
                    {journey.name}
                  </p>            
                  <p className="mt-1 text-xs text-zinc-600">{journey.degree}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}