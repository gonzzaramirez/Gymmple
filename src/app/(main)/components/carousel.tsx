"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Monitor, Smartphone, BarChart3, Users } from "lucide-react";

const systemFeatures = [
  {
    id: 1,
    title: "Dashboard Principal",
    description:
      "Vista general de métricas clave y estadísticas en tiempo real",
    icon: Monitor,
    image: "", // Aquí agregarás la imagen
  },
  {
    id: 2,
    title: "Gestión de Miembros",
    description:
      "Administra fácilmente la información de tus clientes y sus planes",
    icon: Users,
    image: "", // Aquí agregarás la imagen
  },
  {
    id: 3,
    title: "Análisis y Reportes",
    description: "Insights detallados sobre el rendimiento de tu gimnasio",
    icon: BarChart3,
    image: "", // Aquí agregarás la imagen
  },
  {
    id: 4,
    title: "App Móvil",
    description: "Accede a toda la información desde cualquier lugar",
    icon: Smartphone,
    image: "", // Aquí agregarás la imagen
  },
  {
    id: 5,
    title: "Sistema de Pagos",
    description:
      "Procesa cobros automáticamente y lleva el control de finanzas",
    icon: Monitor,
    image: "", // Aquí agregarás la imagen
  },
];

export function SystemCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-background/95 to-background"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(6px)" }}
          animate={
            isInView
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 50, filter: "blur(6px)" }
          }
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16 lg:mb-20 px-2"
        >
          <h2 className="font-montserrat font-black text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6 text-balance">
            Descubre nuestro
            <span className="block text-primary">sistema</span>
          </h2>
          <p className="font-manrope text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Explora las características principales de Gymmple y cómo puede
            transformar la gestión de tu gimnasio.
          </p>
        </motion.div>

        {/* Carrusel */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 60, scale: 0.95 }
          }
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <Carousel
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-0">
              {systemFeatures.map((feature, index) => (
                <CarouselItem key={feature.id} className="pl-0 basis-full">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative h-[420px] sm:h-[500px] md:h-[560px] lg:h-[600px] rounded-3xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden"
                  >
                    {/* Área de imagen grande */}
                    <div className="relative h-full bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                      {feature.image ? (
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center">
                          <feature.icon className="w-32 h-32 text-primary/40 mx-auto mb-6" />
                          <p className="text-lg text-muted-foreground">
                            Imagen del sistema
                          </p>
                        </div>
                      )}

                      {/* Overlay con icono */}
                      <div className="absolute top-6 md:top-8 right-6 md:right-8 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                      </div>

                      {/* Overlay de contenido */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 md:p-8">
                        <div className="max-w-4xl mx-auto">
                          <h3 className="font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-4 text-white group-hover:text-primary transition-colors">
                            {feature.title}
                          </h3>
                          <p className="font-manrope text-white/90 leading-relaxed text-base md:text-lg lg:text-xl max-w-2xl">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Botones de navegación */}
            <CarouselPrevious className="hidden md:flex -left-6 lg:-left-20 w-10 h-10 lg:w-12 lg:h-12 bg-white/90 hover:bg-white text-primary border-0 shadow-lg" />
            <CarouselNext className="hidden md:flex -right-6 lg:-right-20 w-10 h-10 lg:w-12 lg:h-12 bg-white/90 hover:bg-white text-primary border-0 shadow-lg" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
