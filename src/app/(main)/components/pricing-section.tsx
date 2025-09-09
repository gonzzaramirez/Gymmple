"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Básico",
    price: "$29",
    period: "/mes",
    description: "Perfecto para gimnasios pequeños",
    features: [
      "Hasta 100 miembros",
      "Gestión básica de pagos",
      "Reportes mensuales",
      "Soporte por email",
      "App móvil básica",
    ],
    popular: false,
  },
  {
    name: "Profesional",
    price: "$59",
    period: "/mes",
    description: "Ideal para gimnasios en crecimiento",
    features: [
      "Hasta 500 miembros",
      "Pagos automatizados",
      "Reportes avanzados",
      "Soporte prioritario",
      "App móvil completa",
      "Integración con wearables",
      "Marketing automatizado",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/mes",
    description: "Para cadenas de gimnasios",
    features: [
      "Miembros ilimitados",
      "Multi-ubicación",
      "API personalizada",
      "Soporte 24/7",
      "Onboarding personalizado",
      "Análisis predictivo",
      "Integración completa",
      "Manager dedicado",
    ],
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 lg:mb-20 px-2"
        >
          <h2 className="font-montserrat font-black text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6">
            Precios
            <span className="block text-primary">Transparentes</span>
          </h2>
          <p className="font-manrope text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Elige el plan perfecto para tu gimnasio. Sin costos ocultos, sin
            sorpresas.
          </p>
        </motion.div>

        {/* Planes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`relative transition-shadow duration-300 hover:shadow-xl ${
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/20"
                    : "border-border"
                }`}
              >
                {/* Etiqueta de destacado */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-3 md:px-4 py-1.5 md:py-2 rounded-full font-montserrat font-bold text-xs md:text-sm flex items-center gap-1 shadow-md">
                      <Star className="w-4 h-4 fill-current" />
                      Más Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-6 md:pb-8">
                  <CardTitle className="font-montserrat font-bold text-xl md:text-2xl mb-1.5 md:mb-2">
                    {plan.name}
                  </CardTitle>

                  <div className="mb-4">
                    <span className="font-montserrat font-black text-4xl md:text-5xl text-primary">
                      {plan.price}
                    </span>
                    <span className="font-manrope text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>

                  <p className="font-manrope text-muted-foreground text-sm md:text-base">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-5 md:space-y-6">
                  {/* Lista de beneficios */}
                  <ul className="space-y-2.5 md:space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: featureIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2.5 md:gap-3"
                      >
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                        <span className="font-manrope text-sm md:text-base">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Botón CTA */}
                  <Button
                    className={`w-full font-montserrat font-bold transition-colors text-sm md:text-base ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90"
                        : "bg-secondary hover:bg-secondary/90"
                    }`}
                    size="lg"
                  >
                    Comenzar Ahora
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA final */}
      </div>
    </section>
  );
}
