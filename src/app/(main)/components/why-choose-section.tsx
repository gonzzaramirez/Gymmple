"use client";

import { useRef } from "react";
import { Users, BarChart3, CreditCard, Smartphone } from "lucide-react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    number: "01",
    icon: Users,
    title: "Gestión de Miembros",
    description:
      "Administra fácilmente la información de tus miembros, planes y pagos en un solo lugar.",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Análisis Avanzados",
    description:
      "Obtén insights detallados sobre el rendimiento de tu gimnasio con reportes y métricas clave.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Pagos Automatizados",
    description:
      "Procesa cobros automáticamente, envía recordatorios y lleva el control total de tus finanzas.",
  },
  {
    number: "04",
    icon: Smartphone,
    title: "App Móvil",
    description:
      "Accede a toda la información desde cualquier lugar con nuestra aplicación móvil intuitiva.",
  },
];

export function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 relative bg-muted/5"
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
            ¿Por qué elegir
            <span className="block text-primary">Gymmple?</span>
          </h2>
          <p className="font-manrope text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Descubre las razones por las que más de nuestros clientes confían en
            nosotros para impulsar su crecimiento.
          </p>
        </motion.div>

        {/* Razones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(8px)" }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
                  : { opacity: 0, y: 60, scale: 0.95, filter: "blur(8px)" }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{
                boxShadow: "0 20px 30px -10px rgba(0,0,0,0.15)",
              }}
              className="group relative p-6 md:p-8 lg:p-10 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 overflow-hidden"
            >
              {/* Número como marca de agua */}
              <div className="absolute top-4 right-6 text-7xl font-black text-primary/10 group-hover:text-primary/20 transition-colors pointer-events-none">
                {reason.number}
              </div>

              {/* Contenido */}
              <div className="flex items-start gap-4 md:gap-6 relative z-10">
                <motion.div
                  whileHover={{ rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                >
                  <reason.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="font-montserrat font-bold text-xl md:text-2xl mb-2 md:mb-3 group-hover:text-primary transition-colors">
                    {reason.title}
                  </h3>
                  <p className="font-manrope text-muted-foreground leading-relaxed text-sm md:text-base">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
