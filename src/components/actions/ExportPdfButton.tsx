// src/components/actions/ExportPdfButton.tsx

export default function ExportPdfButton() {
    return (
        <a
            href="/robson-cv.pdf"
            download
            className="
        inline-flex items-center justify-center
        px-4 py-2
        rounded-md
        bg-slate-900
        text-white text-sm font-medium
        hover:bg-slate-800
        transition
        print:hidden
      "
        >
            Exportar PDF
        </a>
    )
}
