import { Navigation } from "@/components/ui/navigation"
import { Hero } from "@/components/ui/hero"
import { ProjectGrid } from "@/components/ui/project-grid"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <main className="container mx-auto max-w-5xl px-4 py-8">
        <ProjectGrid />
      </main>
    </div>
  )
}

