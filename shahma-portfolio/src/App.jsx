import { useState } from "react";
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Code2, GraduationCap, BriefcaseBusiness, Layers3, ExternalLink
} from "lucide-react";

const skills = ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Redux Toolkit", "Git & GitHub"];

const projects = [
  {
    number: "01",
    name: "Skill Gap Analysis & Learning Path Generator",
    type: "Full-stack academic project",
    description:
      "A platform designed to compare a user's existing skills with a selected career goal, identify missing skills and suggest a learning path.",
    stack: ["React.js", "Node.js", "Express.js", "MySQL"],
    link: "https://github.com/ShahmaHussainTK/skillgap-analysis",
    linkLabel: "View GitHub project",
  },
  {
    number: "02",
    name: "E-Waste Management System",
    type: "Web application",
    description:
      "A web application concept for citizen registration, e-waste collection requests and status tracking, with an admin area to manage requests.",
    stack: ["Python", "Flask", "SQLite", "HTML", "CSS"],
    link: "https://github.com/ShahmaHussainTK",
    linkLabel: "View GitHub profile",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f7f8fc]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#home" className="text-lg font-extrabold tracking-tight text-slate-950" onClick={closeMenu}>
            SH<span className="text-violet-600">.</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="text-sm font-medium text-slate-600 transition hover:text-violet-700">
                {label}
              </a>
            ))}
            <a href="#contact" className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700">
              Let's talk <ArrowUpRight className="ml-1 inline h-4 w-4" />
            </a>
          </nav>
          <button className="rounded-lg p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu} className="block py-3 text-sm font-medium text-slate-700">
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-violet-200/60 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-indigo-100/70 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-24 md:grid-cols-[1.25fr_.75fr] md:px-8 md:py-32">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> Open to junior opportunities
              </div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Hello, I'm</p>
              <h1 className="max-w-3xl text-5xl font-black leading-[1.06] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Shahma Hussain <span className="text-violet-600">TK.</span>
              </h1>
              <h2 className="mt-6 text-xl font-semibold text-slate-700 sm:text-2xl">
                Junior Frontend Developer
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                MCA graduate interested in building clean, responsive and user-friendly web experiences with React.js and modern frontend technologies.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="rounded-full bg-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700">
                  Explore my work <ArrowUpRight className="ml-2 inline h-4 w-4" />
                </a>
                <a href="#contact" className="rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-violet-300 hover:text-violet-700">
                  Contact me
                </a>
              </div>
              <div className="mt-10 flex items-center gap-5 text-slate-500">
                <a href="https://github.com/ShahmaHussainTK" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-violet-700"><Github /></a>
                <a href="https://linkedin.com/in/shahma-hussain-tk-29001a426" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-violet-700"><Linkedin /></a>
                <span className="h-5 w-px bg-slate-300" />
                <span className="text-xs font-medium">Dubai · Sharjah, UAE</span>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm">
              <div className="relative rounded-[2rem] border border-white bg-white p-3 shadow-2xl shadow-violet-100">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-800 p-8 text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-200">Developer profile</span>
                    <Code2 className="h-5 w-5 text-violet-200" />
                  </div>
                  <div className="my-12">
                    <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-3xl font-black">SH</div>
                    <p className="text-2xl font-extrabold leading-tight">Building thoughtful<br />digital experiences.</p>
                    <p className="mt-3 text-sm leading-6 text-indigo-100">Frontend development · React.js · Responsive UI</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["React", "JavaScript", "Tailwind"].map((item) => (
                      <span key={item} className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-xs text-slate-400">Curious by nature. Focused on continuous learning.</p>
            </div>
          </div>
          <a href="#about" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-semibold text-slate-400 md:flex">
            Scroll to explore <ArrowDown className="h-4 w-4" />
          </a>
        </section>

        <section id="about" className="scroll-mt-24 bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <SectionHeading eyebrow="A little about me" title="Turning ideas into useful web experiences." />
            <div className="mt-12 grid gap-10 md:grid-cols-[1.2fr_.8fr]">
              <p className="text-base leading-8 text-slate-600">
                I am an MCA graduate with a foundation in web development and practical learning experience through a MERN Stack internship and academic projects. I enjoy creating responsive interfaces, learning new technologies and solving problems through code. I am currently looking for an entry-level Frontend Developer or React Developer opportunity where I can contribute and grow as part of a development team.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoCard icon={<GraduationCap />} title="Education" value="MCA & BCA" detail="Both completed" />
                <InfoCard icon={<BriefcaseBusiness />} title="Experience" value="MERN Stack" detail="Internship experience" />
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <SectionHeading eyebrow="What I work with" title="Skills & technologies." />
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill, index) => (
                <div key={skill} className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-100/60">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-sm font-extrabold text-violet-700">0{index + 1}</span>
                  <span className="font-semibold text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <SectionHeading eyebrow="Selected work" title="Projects I've worked on." />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <article key={project.number} className="rounded-3xl border border-slate-200 bg-[#fbfbfe] p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60 md:p-9">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black tracking-[0.2em] text-violet-600">{project.number}</span>
                    <Layers3 className="h-5 w-5 text-slate-400" />
                  </div>
                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{project.type}</p>
                  <h3 className="mt-3 text-2xl font-extrabold leading-snug text-slate-950">{project.name}</h3>
                  <p className="mt-4 min-h-24 text-sm leading-7 text-slate-600">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => <span key={tech} className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700">{tech}</span>)}
                  </div>
                  <a href={project.link} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition hover:text-violet-700">
                    {project.linkLabel} <ExternalLink className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="rounded-3xl bg-slate-950 p-8 text-white md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">Education & learning</p>
              <div className="mt-7 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-2xl font-extrabold">Master of Computer Applications (MCA)</h3>
                  <p className="mt-2 text-sm text-slate-400">Completed</p>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold">Bachelor of Computer Applications (BCA)</h3>
                  <p className="mt-2 text-sm text-slate-400">2021 – 2024</p>
                </div>
              </div>
              <p className="mt-8 border-t border-white/10 pt-6 text-sm leading-7 text-slate-300">
                I believe in learning by building, improving my fundamentals and staying curious about better ways to create for the web.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-white py-20 md:py-24">
          <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
            <SectionHeading eyebrow="Get in touch" title="Have an opportunity in mind?" centered />
            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600">
              I'm interested in Junior Frontend Developer, React Developer and suitable internship opportunities in the UAE. I'd be happy to connect.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href="https://linkedin.com/in/shahma-hussain-tk-29001a426" target="_blank" rel="noreferrer" className="rounded-full bg-violet-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-violet-700"><Linkedin className="mr-2 inline h-4 w-4" /> LinkedIn</a>
              <a href="https://github.com/ShahmaHussainTK" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-violet-300 hover:text-violet-700"><Github className="mr-2 inline h-4 w-4" /> GitHub</a>
            </div>
            <p className="mt-7 text-sm text-slate-500">Email: <span className="font-semibold text-slate-700">Add your professional email here</span></p>
            <p className="mt-2 text-sm text-slate-500">Phone: +971 54 138 1832</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-[#f7f8fc] py-7">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-xs text-slate-500 sm:flex-row md:px-8">
          <span>© {new Date().getFullYear()} Shahma Hussain TK. All rights reserved.</span>
          <span>Designed & built with React.</span>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title, centered = false }) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">{eyebrow}</p>
      <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight tracking-tight text-slate-950 md:text-4xl">{title}</h2>
    </div>
  );
}

function InfoCard({ icon, title, value, detail }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-[#fbfbfe] p-5">
      <div className="mb-5 text-violet-600">{icon}</div>
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{title}</p>
      <p className="mt-1 text-lg font-extrabold text-slate-900">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{detail}</p>
    </div>
  );
}

export default App;