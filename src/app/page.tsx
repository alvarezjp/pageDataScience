import Link from "next/link";
import { HeroSection } from "@/components/devfolio/hero-section";
import { TechStack } from "@/components/devfolio/tech-stack";
import { ProjectsSection } from "@/components/devfolio/projects-section";
import { Github } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 max-w-screen-2xl items-center px-4 md:px-6">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <svg
              xmlns="http://wwws.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M16 18l6-6-6-6" />
              <path d="M8 6l-6 6 6 6" />
            </svg>
            <span className="font-bold sm:inline-block">Portafolio</span>
          </Link>
          <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
            <Link
              href="#projects"
              className="text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              Proyectos
            </Link>
            <Link
              href="#tech-stack"
              className="text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              Tecnologias
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <HeroSection />
        <TechStack />
        <ProjectsSection />
      </main>
      
      <footer className="bg-secondary">
        <div className="container mx-auto flex h-20 max-w-screen-2xl flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:px-6">
          <p className="text-sm text-muted-foreground">
            © 2026 Portafolio construido por Jesus Alvarez.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/alvarezjp/PortafolioDataScience" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-primary">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
