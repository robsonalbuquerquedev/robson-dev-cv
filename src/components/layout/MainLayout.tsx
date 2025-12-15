// src/components/layout/MainLayout.tsx

import { ReactNode } from "react"

interface MainLayoutProps {
    left: ReactNode
    right: ReactNode
}

export default function MainLayout({ left, right }: MainLayoutProps) {
    return (
        <main className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-6">
            {/* Container */}
            <section
                className="
          cv-page
          w-full max-w-[210mm]
          min-h-[297mm]
          bg-slate-950 text-slate-100
          rounded-xl shadow-2xl
          overflow-hidden
          grid grid-cols-1 md:grid-cols-[35%_65%]
        "
            >
                {/* Left / Top */}
                <aside className="p-6 md:p-8 flex flex-col gap-6 bg-slate-900">
                    {left}
                </aside>

                {/* Right / Bottom */}
                <section className="p-6 md:p-10 flex flex-col gap-8">
                    {right}
                </section>
            </section>
        </main>
    )
}
