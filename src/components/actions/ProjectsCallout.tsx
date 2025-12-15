// src/components/actions/ProjectsCallout.tsx

export default function ProjectsCallout() {
    return (
        <div className="mt-4 mb-6 rounded-md border border-slate-700 bg-slate-900/50 p-4 text-sm text-slate-300">
            <p>
                Os projetos citados nesta seção estão disponíveis em{" "}
                <a
                    href="https://robson-next-portfolio.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-100 underline underline-offset-2 hover:text-white"
                >
                    Robson.dev
                </a>
                , com detalhes técnicos, imagens e código-fonte.
            </p>
        </div>
    )
}
