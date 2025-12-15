// src/components/profile/ProfileSidebar.tsx

import Image from "next/image"
import { Mail, Phone, Globe, MapPin } from "lucide-react"

export default function ProfileSidebar() {
    return (
        <div className="profile-sidebar flex flex-col gap-8">
            {/* Profile */}
            <section className="flex flex-col items-center text-center gap-4">
                <Image
                    src="/robson.png"
                    alt="Robson Monteiro de Albuquerque"
                    width={140}
                    height={140}
                    priority
                    className="rounded-full border-4 border-slate-700"
                />

                <h1 className="text-xl font-bold text-slate-100">
                    Robson Monteiro de Albuquerque
                </h1>

                <h2 className="text-sm font-medium text-slate-300 uppercase tracking-wide">
                    Analista e Desenvolvedor de Sistemas
                </h2>

                <p className="text-sm text-slate-400 mt-2 leading-relaxed max-w-md">
                    Profissional focado em desenvolvimento front-end moderno,
                    performance, acessibilidade e experiências digitais elegantes.
                </p>
            </section>

            {/* Education */}
            <section>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
                    Educação
                </h2>

                <ul className="text-sm text-slate-300 space-y-4">
                    <li>
                        <strong className="text-slate-100 font-medium">
                            Análise e Desenvolvimento de Sistemas
                        </strong>
                        <br />
                        <span className="text-slate-400">
                            Curso Superior · IFPE — Concluído em 2025
                        </span>
                    </li>

                    <li>
                        <strong className="text-slate-100 font-medium">
                            Redes de Computadores
                        </strong>
                        <br />
                        <span className="text-slate-400">
                            Curso Técnico · IFPE — Concluído em 2019
                        </span>
                    </li>

                    <li>
                        <strong className="text-slate-100 font-medium">
                            Informática para Internet
                        </strong>
                        <br />
                        <span className="text-slate-400">
                            Curso Técnico · IFPE — Concluído em 2022
                        </span>
                    </li>
                </ul>
            </section>

            {/* Languages */}
            <section>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
                    Idiomas
                </h2>

                <ul className="text-sm text-slate-300 space-y-1">
                    <li>Português — Nativo</li>
                    <li>Inglês — Intermediário</li>
                </ul>
            </section>

            {/* Contacts */}
            <section>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
                    Contato
                </h2>

                <ul className="text-sm text-slate-300 space-y-3">
                    <li className="flex items-center gap-2">
                        <Mail size={16} className="text-slate-400" />
                        robalbuquerque98@gmail.com
                    </li>

                    <li className="flex items-center gap-2">
                        <Phone size={16} className="text-slate-400" />
                        +55 81 97116-8633
                    </li>

                    <li className="flex items-center gap-2">
                        <Globe size={16} className="text-slate-400" />

                        <a
                            href="https://robson-next-portfolio.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-300 hover:text-slate-100 transition-colors underline underline-offset-2"
                        >
                            {/* Visible on screen */}
                            <span className="print:hidden">
                                Robson.dev
                            </span>

                            {/* Visible on print */}
                            <span className="hidden print:inline">
                                https://robson-next-portfolio.vercel.app/
                            </span>
                        </a>
                    </li>

                    <li className="flex items-center gap-2">
                        <MapPin size={16} className="text-slate-400" />
                        <span className="text-slate-300">
                            Garanhuns – PE, Brasil
                        </span>
                    </li>
                </ul>
            </section>
        </div>
    )
}
