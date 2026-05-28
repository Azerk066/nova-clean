import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "../ui/button";

const phoneDisplay = "06 00 00 00 00";
const phoneHref = "tel:+33600000000";
const whatsappHref = "https://wa.me/33600000000?text=Bonjour%20NovaClean%20Riviera%2C%20je%20souhaite%20un%20devis.";
const email = "contact@novacleanriviera.fr";

export function Contact() {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b88a3b]">Contact</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Besoin d’un nettoyage fiable et classe ?</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
          Demandez votre devis gratuit. Nous vous répondons rapidement pour organiser une visite ou proposer une prestation adaptée.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          <a href={phoneHref} className="rounded-3xl bg-[#f7f5f0] p-6 transition hover:bg-[#0d2d4d] hover:text-white">
            <Phone className="mx-auto mb-3 h-6 w-6 text-[#b88a3b]" />
            <p className="font-semibold">Téléphone</p>
            <p className="mt-1 text-sm opacity-75">{phoneDisplay}</p>
          </a>

          <a href={whatsappHref} target="_blank" rel="noreferrer" className="rounded-3xl bg-[#f7f5f0] p-6 transition hover:bg-[#0d2d4d] hover:text-white">
            <MessageCircle className="mx-auto mb-3 h-6 w-6 text-[#b88a3b]" />
            <p className="font-semibold">WhatsApp</p>
            <p className="mt-1 text-sm opacity-75">Message direct</p>
          </a>

          <a href={`mailto:${email}`} className="rounded-3xl bg-[#f7f5f0] p-6 transition hover:bg-[#0d2d4d] hover:text-white">
            <Mail className="mx-auto mb-3 h-6 w-6 text-[#b88a3b]" />
            <p className="font-semibold">Email</p>
            <p className="mt-1 break-all text-sm opacity-75">{email}</p>
          </a>

          <div className="rounded-3xl bg-[#f7f5f0] p-6 transition hover:bg-[#0d2d4d] hover:text-white">
            <MapPin className="mx-auto mb-3 h-6 w-6 text-[#b88a3b]" />
            <p className="font-semibold">Zone</p>
            <p className="mt-1 text-sm opacity-75">Alpes-Maritimes</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-slate-950 text-white hover:bg-[#b88a3b]">
            <a href={phoneHref}>Appeler maintenant</a>
          </Button>
          <Button asChild size="lg" className="bg-[#25D366] text-slate-950 hover:bg-[#c59a4a]">
            <a href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle className="mr-2 h-5 w-5" /> WhatsApp</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
