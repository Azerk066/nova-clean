"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, ShieldCheck, Sparkles, Star, MessageCircle } from "lucide-react";
import { Button } from "../ui/button";

const phoneHref = "tel:+33600000000";
const whatsappHref = "https://wa.me/33600000000?text=Bonjour%20NovaClean%20Riviera%2C%20je%20souhaite%20un%20devis.";

const heroHighlights = [
  { icon: ShieldCheck, label: "Sérieux" },
  { icon: Clock, label: "Réactivité" },
  { icon: Star, label: "Finition premium" }
];

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-[#071b32] pt-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,180,109,0.16),transparent_35%),linear-gradient(135deg,#071b32_0%,#0b2440_55%,#102f52_100%)]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl rounded-[2rem] border border-white/10 bg-black/20 p-7 shadow-2xl backdrop-blur-md md:p-9"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
            <Sparkles className="h-4 w-4 text-[#d6b46d]" />
            Nettoyage premium dans les Alpes-Maritimes
          </div>

          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl">
            La propreté, notre engagement.
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-100">
            NovaClean Riviera accompagne les copropriétés, villas et entreprises avec des prestations de nettoyage fiables, élégantes et parfaitement adaptées à vos espaces.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-[#c59a4a] text-slate-950 hover:bg-white">
              <a href={phoneHref}>Demander un devis <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-slate-950/40 text-white hover:bg-white hover:text-slate-950">
              <a href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle className="mr-2 h-4 w-4" /> WhatsApp</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-5 text-sm text-slate-200">
            {heroHighlights.map((item) => (
              <span key={item.label} className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-[#d6b46d]" />
                {item.label}
              </span>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-slate-950/95 p-6 text-white shadow-2xl backdrop-blur">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d6b46d]">Copropriétés • Villas • Entreprises</p>
            <p className="mt-2 text-lg font-semibold">Un service propre, net et rassurant.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
