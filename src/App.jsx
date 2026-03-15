import profile from "./assets/profile.jpg.jfif";
export default function InternshipPortfolioSite() {
  const projects = [
    {
      title: "Embedded Systems Exercises",
      subtitle: "C, PlatformIO, unit testing",
      description:
        "Course exercises focused on low-level programming, modular C code, and hardware-oriented problem solving.",
    },
    {
      title: "DevOps / Docker / Kubernetes",
      subtitle: "Containers, deployments, workflows",
      description:
        "Hands-on work with containerized applications, local Kubernetes environments, and practical deployment steps.",
    },
    {
      title: "Data & Machine Learning Exercises",
      subtitle: "Python, notebooks, model experiments",
      description:
        "Exploration of data preprocessing, regression models, and practical notebook-based analysis for coursework.",
    },
  ];

  const skills = [
    "C",
    "Python",
    "Git & GitHub",
    "HTML/CSS",
    "JavaScript",
    "Docker",
    "Kubernetes",
    "PlatformIO",
    "Problem Solving",
    "Teamwork",
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="border-b border-white/10 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/60">Portfolio</p>
            <h1 className="text-xl font-semibold">Ildo Mota</h1>
          </div>
          <nav className="hidden gap-6 text-sm text-white/75 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:py-28">
          <div className="space-y-6">
            <p className="inline-block rounded-full border border-white/15 px-4 py-2 text-sm text-white/75">
              Software / Embedded / DevOps Student
            </p>
            <div className="space-y-4">
              <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
                Building practical software projects and looking for an internship opportunity.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-white/70">
                I am a student interested in software development, embedded systems, and modern development workflows. This portfolio highlights selected coursework, technical skills, and projects that reflect how I learn and build.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:scale-[1.02]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/5"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30">
            <div className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
            <img
            src={profile}
            alt="Ildo Mota"
            ClassName="w-32 h-32 rounded-full mx-auto mb-6 object-cover border border-white/20"
            />
            
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">Ildo Mota</p>
              <div className="mt-6 space-y-5 text-sm">
                <div>
                  <p className="text-white/45">Focus</p>
                  <p className="mt-1 text-base text-white">Internship in software, embedded, or technical development roles</p>
                </div>
                <div>
                  <p className="text-white/45">Strengths</p>
                  <p className="mt-1 text-base text-white">Hands-on learning, persistence, practical debugging, and steady technical growth</p>
                </div>
                <div>
                  <p className="text-white/45">Current Work</p>
                  <p className="mt-1 text-base text-white">University exercises, portfolio building, and project-based learning</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">About Me</p>
              <h3 className="mt-4 text-2xl font-semibold">A practical learner with interest in real systems</h3>
              <p className="mt-4 leading-8 text-white/70">
                I enjoy working through technical problems step by step and improving through hands-on practice. My studies have included programming, software design, embedded systems, version control, and development tools that are relevant for real engineering work.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-white/50">What I’m Looking For</p>
              <h3 className="mt-4 text-2xl font-semibold">An internship where I can contribute and grow</h3>
              <p className="mt-4 leading-8 text-white/70">
                I’m looking for an internship where I can keep developing technical skills, contribute to real projects, and gain experience in a professional team environment.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-12">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">Projects</p>
            <h3 className="mt-3 text-3xl font-semibold">Selected work</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <p className="text-sm text-white/50">{project.subtitle}</p>
                <h4 className="mt-3 text-xl font-semibold">{project.title}</h4>
                <p className="mt-4 leading-7 text-white/70">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">Skills</p>
            <h3 className="mt-3 text-3xl font-semibold">Tools and strengths</h3>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-12 pb-24">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">Contact</p>
            <h3 className="mt-3 text-3xl font-semibold">Let’s connect</h3>
            <p className="mt-4 max-w-2xl leading-8 text-white/70">
              You can add your email, LinkedIn, GitHub, and CV link here so companies can quickly reach you and view your work.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://github.com/ildomota"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-black">GitHub</a>
              <a href="https://www.linkedin.com/in/ildo-mota-32a39b21b/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/20 px-6 py-3 font-medium text-white">LinkedIn</a>
              <a href="#" className="rounded-2xl border border-white/20 px-6 py-3 font-medium text-white">Download CV</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
