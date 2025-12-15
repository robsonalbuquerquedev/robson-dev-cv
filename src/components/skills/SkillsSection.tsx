// src/components/skills/SkillsSection.tsx

export default function SkillsSection() {
    return (
        <section className="skills-section flex flex-col gap-8">
            <header>
                <h2 className="text-lg font-semibold uppercase tracking-wide text-slate-100">
                    Habilidades Técnicas
                </h2>
                <div className="h-px bg-slate-300 mt-2" />
            </header>

            {/* Front-End */}
            <div>
                <h3 className="font-medium text-slate-100 mb-3">
                    Front-End
                </h3>

                <ul className="skills-list flex flex-wrap gap-2 text-sm">
                    {[
                        "HTML5",
                        "CSS3",
                        "JavaScript",
                        "TypeScript",
                        "React",
                        "Next.js",
                        "Vue.js",
                        "Tailwind CSS",
                        "Sass",
                    ].map((skill) => (
                        <li
                            key={skill}
                            className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Back-End & APIs */}
            <div>
                <h3 className="font-medium text-slate-100 mb-3">
                    Back-End & APIs
                </h3>

                <ul className="skills-list flex flex-wrap gap-2 text-sm">
                    {[
                        "Java",
                        "Python",
                        "REST APIs",
                        "JSON",
                        "Firebase",
                    ].map((skill) => (
                        <li
                            key={skill}
                            className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Banco de Dados */}
            <div>
                <h3 className="font-medium text-slate-100 mb-3">
                    Banco de Dados
                </h3>

                <ul className="skills-list flex flex-wrap gap-2 text-sm">
                    {[
                        "MySQL",
                        "Firebase Realtime Database",
                    ].map((skill) => (
                        <li
                            key={skill}
                            className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile */}
            <div>
                <h3 className="font-medium text-slate-100 mb-3">
                    Mobile
                </h3>

                <ul className="skills-list flex flex-wrap gap-2 text-sm">
                    {[
                        "Android Studio",
                    ].map((skill) => (
                        <li
                            key={skill}
                            className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Ferramentas & Workflow */}
            <div>
                <h3 className="font-medium text-slate-100 mb-3">
                    Ferramentas & Workflow
                </h3>

                <ul className="skills-list flex flex-wrap gap-2 text-sm">
                    {[
                        "Git",
                        "GitHub",
                        "Vercel",
                        "Figma",
                        "VS Code",
                    ].map((skill) => (
                        <li
                            key={skill}
                            className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
