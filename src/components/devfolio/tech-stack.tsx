'use client'; // Required for TooltipProvider

import { technologies } from '@/lib/data';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function TechStack() {
  return (
    <section id="tech-stack" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Tecnologías para Análisis de Datos</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
            Herramientas que utilizo para el análisis, visualización y modelado de datos en proyectos de ciencia de datos.
          </p>
        </div>
        <TooltipProvider delayDuration={0}>
          <div className="mx-auto grid max-w-4xl grid-cols-3 justify-items-center gap-x-4 gap-y-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
            {technologies.map((tech) => (
              <Tooltip key={tech.name}>
                <TooltipTrigger asChild>
                  <div className="flex cursor-default flex-col items-center justify-center gap-2">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-card p-4 ring-1 ring-border transition-all duration-300 hover:scale-110 hover:bg-primary/10 hover:ring-primary">
                      <tech.icon className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}
