"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { motion } from "framer-motion";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

import { contactFormSchema } from "../../../lib/validation-schemas";

const formSchema = contactFormSchema;

export function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast.success("¡Tu mensaje fue enviado con éxito!");
    } catch (error) {
      console.error("Error submitting contact form", error);
      toast.error("Error al enviar el mensaje. Intenta de nuevo.");
    }
  }

  return (
    <section className="py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 ">
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
            Hablemos de tu
            <span className="block text-primary">Gimnasio</span>
          </h2>
          <p className="font-manrope text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Listo para transformar tu negocio? Contáctanos y te ayudamos a
            comenzar.
          </p>
        </motion.div>

        {/* Grid: Formulario + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-montserrat font-bold text-xl md:text-2xl">
                  Envíanos un mensaje
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5 md:space-y-6"
                  >
                    {/* Nombre */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Tu nombre"
                              autoComplete="name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="tucorreo@mail.com"
                              autoComplete="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Mensaje */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Cuéntanos sobre tu gimnasio y cómo podemos ayudarte..."
                              className="min-h-28 md:min-h-32"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full font-montserrat font-bold text-sm md:text-base"
                    >
                      Enviar Mensaje
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            {[
              { icon: Mail, title: "Email", info: "hola@gymmple.com" },
              { icon: Phone, title: "Teléfono", info: "+1 (555) 123-4567" },
              {
                icon: MapPin,
                title: "Oficina",
                info: "123 Fitness Street\nCiudad, País 12345",
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                <Card className="border-border">
                  <CardContent className="p-5 md:p-6">
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                      >
                        <contact.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="font-montserrat font-bold text-base md:text-lg">
                          {contact.title}
                        </h3>
                        <p className="font-manrope text-muted-foreground whitespace-pre-line text-sm md:text-base">
                          {contact.info}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
