// src/components/experience/ExperienceSection.tsx

export default function ExperienceSection() {
    return (
        <section className="experience-section flex flex-col gap-8">
            <header>
                <h2 className="text-lg font-semibold uppercase tracking-wide text-slate-100">
                    Experiência Profissional
                </h2>
                <div className="h-px bg-slate-700 mt-2" />
            </header>

            {/* Projetos Pessoais */}
            <article className="flex flex-col gap-3">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-medium text-slate-100">
                            Desenvolvedor Front-End
                        </h3>
                        <p className="text-sm text-slate-300">
                            Projetos Pessoais e Plataformas Autorais
                        </p>
                    </div>

                    <span className="text-sm text-slate-400">
                        2025 — Atual
                    </span>
                </div>

                <ul className="list-disc list-inside text-sm text-slate-200 space-y-2 leading-relaxed">
                    <li>
                        Desenvolvimento da plataforma <strong>Aprender Violão Online</strong>, uma aplicação educacional interativa construída com Next.js 14 (App Router) para o ensino de violão e teoria musical, com animações em Framer Motion e integração com Google AdSense e Hotmart.
                    </li>
                    <li>
                        Criação do <strong>Cantos JSM</strong>, plataforma digital voltada a ministérios de música, focada na organização de cantos litúrgicos por momento da missa e categorias espirituais, com informações como tom musical, trechos permitidos e cifras opcionais, integrada ao Google AdSense para monetização de conteúdo.
                    </li>
                    <li>
                        Desenvolvimento do <strong>Windly</strong>, plataforma educacional com foco em Tailwind CSS, Next.js, SEO, HTML semântico, acessibilidade e performance, incluindo blog dinâmico sobre tecnologia (em análise pelo Google AdSense).
                    </li>
                    <li>
                        Criação do <strong>Arte Viva Q</strong>, espaço digital dedicado à arte expressiva da Sra. Albuquerque, reunindo desenhos animados, religiosos e conteúdos autorais.
                    </li>
                    <li>
                        Desenvolvimento do <strong>English Study Hub</strong>, plataforma educacional voltada ao apoio no estudo da língua inglesa.
                    </li>
                </ul>
            </article>

            {/* Projeto de Conclusão de Curso */}
            <article className="flex flex-col gap-3">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-medium text-slate-100">
                            Projeto de Conclusão de Curso (TCC)
                        </h3>
                        <p className="text-sm text-slate-300">
                            Urgência Segura — Sistema Web e Aplicativo Mobile
                        </p>
                    </div>

                    <span className="text-sm text-slate-400">
                        2025
                    </span>
                </div>

                <ul className="list-disc list-inside text-sm text-slate-200 space-y-2 leading-relaxed">
                    <li>
                        Desenvolvimento do <strong>Urgência Segura Web</strong>, sistema web construído com Next.js para visualização e gerenciamento em tempo real de ocorrências enviadas por aplicativo móvel.
                    </li>
                    <li>
                        Plataforma voltada a profissionais da saúde e da Defesa Civil, permitindo acompanhamento ágil e organizado de solicitações emergenciais.
                    </li>
                    <li>
                        Criação do <strong>Urgência Segura App (Mobile)</strong>, aplicativo para solicitação de atendimentos emergenciais, com foco na redução de trotes e otimização do tempo de resposta de serviços como o SAMU.
                    </li>
                    <li>
                        Integração com <strong>Firebase Realtime Database</strong> para sincronização de dados em tempo real entre aplicação web e mobile.
                    </li>
                    <li>
                        Projeto desenvolvido como parte do Trabalho de Conclusão de Curso em Análise e Desenvolvimento de Sistemas.
                    </li>
                </ul>
            </article>

            {/* Experiência Anterior */}
            <article className="flex flex-col gap-3">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-medium text-slate-100">
                            Assistente de Loja
                        </h3>
                        <p className="text-sm text-slate-300">
                            Magazine Luiza S/A
                        </p>
                    </div>

                    <span className="text-sm text-slate-400">
                        2020 — 2021
                    </span>
                </div>

                <ul className="list-disc list-inside text-sm text-slate-200 space-y-2 leading-relaxed">
                    <li>
                        Atendimento direto ao cliente, organização da loja e suporte em processos de troca e devolução.
                    </li>
                    <li>
                        Reposição de estoque, conferência de mercadorias e apoio no alcance de metas de vendas.
                    </li>
                    <li>
                        Desenvolvimento de habilidades em comunicação, trabalho em equipe e resolução de problemas.
                    </li>
                </ul>
            </article>

            {/* Docência */}
            <article className="flex flex-col gap-3">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-medium text-slate-100">
                            Professor de Informática Básica
                        </h3>
                        <p className="text-sm text-slate-300">
                            Real Cursos
                        </p>
                    </div>

                    <span className="text-sm text-slate-400">
                        Experiência Temporária
                    </span>
                </div>

                <ul className="list-disc list-inside text-sm text-slate-200 space-y-2 leading-relaxed">
                    <li>
                        Atuação como professor de informática básica para crianças de 10 a 14 anos.
                    </li>
                    <li>
                        Criação da plataforma <strong>Learning Basic Computing</strong> para apoio didático às aulas.
                    </li>
                    <li>
                        Ensino de conceitos fundamentais de computação de forma acessível e prática.
                    </li>
                </ul>
            </article>
        </section>
    )
}
