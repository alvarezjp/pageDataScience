import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="hero" className="flex min-h-[calc(100vh-56px)] flex-col items-center justify-center space-y-8 py-20 text-center md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tighter text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Jesus Alvarez
          </h1>
          <h2 className="text-2xl font-medium text-primary md:text-3xl">
            Data Analyst | Data Science
          </h2>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Analizo datos para encontrar patrones, generar insights y apoyar la toma de decisiones. 
            Trabajo con Python, pandas, visualización de datos y modelos de machine learning, aplicados a proyectos reales.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <Link href="#projects">Mis trabajos</Link>
          </Button>
        </div>
        <div className="mt-10 flex items-center justify-center gap-6">
          <a href="https://github.com/alvarezjp/PortafolioDataScience" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-primary">
            <Github className="h-7 w-7" />
          </a>
          <a href="https://www.linkedin.com/in/jesusalvarezpasmino/" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-primary">
            <Linkedin className="h-7 w-7" />
          </a>
        </div>
      </div>
    </section>
  );
}
