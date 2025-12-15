// src/app/page.tsx

import MainLayout from "@/components/layout/MainLayout"
import ProfileSidebar from "@/components/profile/ProfileSidebar"
import ExperienceSection from "@/components/experience/ExperienceSection"
import ProjectsCallout from "@/components/actions/ProjectsCallout"
import SkillsSection from "@/components/skills/SkillsSection"
import ExportPdfButton from "@/components/actions/ExportPdfButton"

export default function Home() {
  return (
    <MainLayout
      left={<ProfileSidebar />}
      right={
        <>
          <div className="flex justify-end">
            <ExportPdfButton />
          </div>

          <ExperienceSection />
          <ProjectsCallout />
          <SkillsSection />
        </>
      }
    />
  )
}
