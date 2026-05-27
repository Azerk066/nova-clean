import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Contact</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          Besoin d’un nettoyage fiable et classe ?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
          Demandez votre devis gratuit. Nous vous répondons rapidement pour organiser une visite ou proposer une prestation adaptée.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <a href="tel:+33000000000" className="rounded-3xl bg-cream p-6 transition hover:bg-[#0d2d4d] hover:text-white">
            <Phone className="mx-auto mb-3 h-6 w-6 text-gold" />
            <p className="font-semibold">Téléphone</p>
            <p className="mt-1 text-sm opacity-75">06 00 00 00 00</p>
          </a>

          <a href="mailto:contact@novacleanriviera.fr" className="rounded-3xl bg-cream p-6 transition hover:bg-[#0d2d4d] hover:text-white">
            <Mail className="mx-auto mb-3 h-6 w-6 text-gold" />
            <p className="font-semibold">Email</p>
            <p className="mt-1 text-sm opacity-75">contact@novacleanriviera.fr</p>
          </a>

          <div className="rounded-3xl bg-cream p-6 transition hover:bg-[#0d2d4d] hover:text-white">
            <MapPin className="mx-auto mb-3 h-6 w-6 text-gold" />
            <p className="font-semibold">Zone</p>
            <p className="mt-1 text-sm opacity-75">Alpes-Maritimes</p>
          </div>
        </div>

        <Button size="lg" className="mt-10 bg-slate-950 px-8 text-white hover:bg-gold hover:text-slate-950">
          Obtenir mon devis gratuit
        </Button>
      </div>
    </section>
  );
}
