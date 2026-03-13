const portfolioData = {
  name: "Yichen Zhu",
  headline: "Electrical & Electronic Engineering · Data & Optimisation",
  summary:
    "MSc Control and Optimisation graduate with a background in electrical and electronic engineering, combining technical analysis, engineering modelling, and clear cross-cultural communication.",
  focusAreas: [
    "Engineering analysis",
    "Optimisation",
    "Technical support",
    "Data-driven problem solving",
  ],
  education: [
    {
      school: "Imperial College London",
      degree: "MSc Control and Optimisation",
    },
    {
      school: "University of Sheffield",
      degree: "BEng Electrical and Electronic Engineering (First Class Honours)",
    },
  ],
  languages: ["Mandarin Chinese", "English", "French", "Romanian", "Latin"],
  projects: [
    {
      title: "Extreme Weather Planning for Power Distribution Grids",
      subtitle: "MSc Project · Imperial College London",
      description:
        "Explored planning approaches for extreme weather events on the power system distribution grid, combining optimisation and engineering decision-making.",
      tags: ["Optimisation", "Power Systems", "Resilience"],
    },
    {
      title: "Temperature Monitoring System for Diode Area Melting",
      subtitle: "BEng Final-Year Project · University of Sheffield",
      description:
        "Developed a temperature monitoring system based on a two-colour photodiode and LabVIEW, demonstrating a lower-data alternative to high-resolution infrared sensing.",
      tags: ["LabVIEW", "Java", "Instrumentation", "Electronics"],
    },
    {
      title: "Product Benchmarking Tool",
      subtitle: "Field Application Engineer Internship · Suzhou Lvson Electronics",
      description:
        "Built a comparison tool to benchmark competing products on specifications and pricing, helping communicate technical advantages in commercial discussions.",
      tags: ["Excel", "Product Analysis", "Technical Communication"],
    },
  ],
  experience: [
    {
      role: "Freelance Data Analyst",
      org: "Self-employed",
      period: "Nov 2025 – Present",
      bullets: [
        "Developed a Python-based workflow to extract and validate employment-history data from unstructured PDF documents.",
        "Designed confidence scoring and audit-ready outputs for structured analysis.",
      ],
    },
    {
      role: "International Engineering Ambassador",
      org: "University of Sheffield",
      period: "Apr 2022 – Jun 2023",
      bullets: [
        "Led campus tours and Open Day sessions for prospective students and families.",
        "Supported outreach events and lab demonstrations, strengthening public-facing communication.",
      ],
    },
    {
      role: "Field Application Engineer Intern",
      org: "Suzhou Lvson Electronics Technology Co., Ltd",
      period: "Jun 2021 – Sept 2021",
      bullets: [
        "Delivered technical presentations translating product specifications for sales teams.",
        "Supported meetings by interpreting between Mandarin- and English-speaking stakeholders.",
      ],
    },
  ],
  skills: [
    "Python",
    "SQL",
    "Excel",
    "Julia",
    "MATLAB",
    "C/C++",
    "LabVIEW",
    "LTSpice",
    "Optimisation",
    "Power Systems",
    "Data Analysis",
    "Technical Communication",
  ],
  contact: {
    email: "joanna.yc.zhu@gmail.com",
    location: "Cambridge, UK",
    intro:
      "I am interested in graduate and early-career opportunities across engineering, consulting, technical support, and data-focused roles.",
  },
};

function validatePortfolioData(data) {
  if (!data || typeof data !== "object") return false;
  if (!data.name || !data.summary) return false;
  if (!Array.isArray(data.projects) || !Array.isArray(data.experience)) return false;
  if (!Array.isArray(data.skills) || !Array.isArray(data.languages)) return false;
  return true;
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl font-semibold text-slate-900">{title}</h2>
    </div>
  );
}

function Pill({ children, dark }) {
  return (
    <span
      className={
        dark
          ? "rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-100"
          : "rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
      }
    >
      {children}
    </span>
  );
}

function InfoCard({ label, value, muted }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5">
      <p className="text-sm text-slate-500">{label}</p>
      <p className={muted ? "mt-1 text-sm text-slate-600" : "mt-1 font-medium text-slate-900"}>
        {value}
      </p>
    </div>
  );
}

export default function PortfolioWebsite() {
  const data = portfolioData;

  if (!validatePortfolioData(data)) {
    return (
      <div className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h1 className="text-2xl font-semibold">Portfolio data unavailable</h1>
          <p className="mt-3 text-slate-600">
            The page could not be rendered because the portfolio content is incomplete.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              {data.headline}
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {data.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {data.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/CV_Yichen_Zhu.pdf"
                download
                className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5"
              >
                Download CV
              </a>
              <a
                href="#projects"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-sm transition hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-sm transition hover:-translate-y-0.5"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <div className="space-y-4">
              <InfoCard
                label="Focus Areas"
                value={data.focusAreas.join(", ")}
              />
              <div>
                <p className="text-sm text-slate-500">Education</p>
                <div className="mt-2 space-y-2">
                  {data.education.map((item) => (
                    <div key={item.school + item.degree}>
                      <p className="font-medium text-slate-900">{item.school}</p>
                      <p className="text-sm text-slate-600">{item.degree}</p>
                    </div>
                  ))}
                </div>
              </div>
              <InfoCard label="Languages" value={data.languages.join(", ")} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <h2 className="text-2xl font-semibold text-slate-900">About</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            I am interested in roles that sit at the intersection of engineering, modelling, and practical decision-making. My work has ranged from power-system resilience and instrumentation projects to product benchmarking, technical communication, and data analysis. I enjoy turning complex technical information into clear, useful insight.
          </p>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <SectionTitle eyebrow="Selected Work" title="Projects" />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.projects.map((project) => (
            <article
              key={project.title}
              className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm text-slate-500">{project.subtitle}</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Pill key={project.title + tag}>{tag}</Pill>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <SectionTitle eyebrow="Experience" title="Professional Highlights" />
            <div className="mt-8 space-y-8">
              {data.experience.map((item) => (
                <div key={item.role + item.org}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">{item.role}</h3>
                    <p className="text-sm text-slate-500">{item.period}</p>
                  </div>
                  <p className="mt-1 text-sm font-medium text-slate-700">{item.org}</p>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
                    {item.bullets.map((bullet, index) => (
                      <li key={item.role + index}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-sm">
            <SectionTitle eyebrow="Toolkit" title="Skills" />
            <div className="mt-8 flex flex-wrap gap-3">
              {data.skills.map((skill) => (
                <Pill key={skill} dark>
                  {skill}
                </Pill>
              ))}
            </div>

            {/* Component checks (hidden for production)
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-slate-300">Component checks</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-100">
                <li>Data object loaded: {validatePortfolioData(data) ? "pass" : "fail"}</li>
                <li>Projects available: {data.projects.length}</li>
                <li>Experience entries available: {data.experience.length}</li>
                <li>Skills available: {data.skills.length}</li>
              </ul>
            </div>
            */}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-12 lg:px-8">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <SectionTitle eyebrow="Contact" title="Let us connect" />
          <p className="mt-4 max-w-2xl leading-8 text-slate-600">
            {data.contact.intro}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <InfoCard label="Email" value={data.contact.email} />
            <InfoCard label="Location" value={data.contact.location} />
          </div>
        </div>
      </section>
    </div>
  );
}
