import ProjectGallery from "./project-gallery";

export default function Home() {
  const Project  = [
    {
      date: "Jul 2026 - Present",
      name: "HelloWorld - Portfolio Website",
      description: "",
      highlights: [],
      languages: [],
      images: [],
    },
    {
      date: "May 2026 - Aug 2026",
      name: "Hotel Booking Website",
      description: "WIP",
      highlights: [],
      languages: [],
      images: [],
    },
    {
      date: "Jan 2026 - Apr 2026",
      name: "Everflow - Expense Tracker App",
      description: "Expense tracking made simple",
      highlights: [
        "Developed using Android Studio",
        "Implemented Light and Dark themes using Material Theme Builder",
        "Integrated ExchangeRate-API for multi-currency conversion",
        "Developed the Expense & Income Categories feature.",
        "Built the Budget feature."
      ],
      languages: [
        { name: "Java", percentage: 100, color: "#903c0e" },
      ],
      images: [
        "/everflow/category1.jpg",
        "/everflow/budget1.jpg",
        "/everflow/currency1.jpg",
        "/everflow/theme1.jpg",
      ],
    }
  ];

  const Journey  = [
    {
      date: "Sep 2024 - Apr 2028",
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

        {/* Project Section */}
        <section className="w-full">
          <div className="flex items-center gap-6 mb-12">
            <div className="flex-1 h-px bg-white/15" />
            <h2 className="text-2xl font-bold whitespace-nowrap">Project</h2>
            <div className="flex-1 h-px bg-white/15" />
          </div>

          <div className="relative space-y-8 max-w-2xl">           
            <div className="absolute bottom-5 left-5 top-5 w-px bg-white/15" />
            {Project.map((project) => (
              <article key={project.name} className="relative flex gap-5">       
                <div className="z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#0d0d0d] text-sm font-semibold text-white">
                  
                </div>
                <div className="min-w-0 pb-2">
                  <time className="text-xs text-zinc-500">{project.date}</time>                 
                  <p className="mt-1 text-sm font-semibold text-zinc-300">{project.name}</p>         
                  <p className="mt-1 text-xs text-zinc-600">{project.description}</p>  

                  {project.highlights  && project.highlights .length > 0 && (
                    <ul className="mt-2 pl-4 space-y-1">
                      {project.highlights .map((highlights , idx) => (
                        <li key={idx} className="text-xs text-zinc-600">• {highlights }</li>
                      ))}
                    </ul>
                  )}

                  {/* Programming Language Used */}
                  {project.languages && project.languages.length > 0 && (
                    <div className="mt-3 flex items-center gap-2">
                      {/* Progress Bar */}
                      <div className="flex-1 h-1.5 bg-zinc-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full" 
                          style={{
                            width: `${project.languages[0].percentage}%`,
                            backgroundColor: project.languages[0].color
                          }}
                        />
                      </div>
                
                      {/* Language Label */}
                      <span 
                        className="text-xs font-semibold whitespace-nowrap"
                        style={{ color: project.languages[0].color }}
                      >
                        {project.languages[0].name} {project.languages[0].percentage}%
                      </span>
                    </div>
                  )}

                  {/* Project Images */}
                  <ProjectGallery images={project.images} projectName={project.name} />

                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Journey Section */}
        <section className="w-full mt-16">
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
                  <p className="mt-1 text-sm font-semibold text-zinc-300">{journey.name}</p>            
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
