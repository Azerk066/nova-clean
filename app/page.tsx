import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const phoneDisplay = "06 12 34 56 78";
const phoneHref = "+33612345678";
const whatsappUrl = "https://wa.me/33612345678?text=Bonjour%20NovaClean%20Riviera%2C%20je%20souhaite%20un%20devis.";

const services = [
  {
    icon: Building2,
    title: "Copropriétés",
    text: "Entretien des halls, escaliers, ascenseurs, parkings, vitres et parties communes.",
  },
  {
    icon: Home,
    title: "Villas & résidences",
    text: "Ménage soigné pour villas, résidences secondaires et locations saisonnières premium.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Entreprises",
    text: "Nettoyage de bureaux, commerces, cabinets, agences et espaces professionnels.",
  },
];

const strengths = [
  "Devis gratuit et rapide",
  "Interventions régulières ou ponctuelles",
  "Prestations discrètes et soignées",
  "Équipe fiable et professionnelle",
  "Produits adaptés aux surfaces",
  "Suivi qualité après intervention",
];

const cities = ["Nice", "Cannes", "Antibes", "Cagnes-sur-Mer", "Grasse", "Menton", "Saint-Laurent-du-Var", "Monaco & alentours"];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-ivory text-navy">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#06182d]/95 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#accueil" className="flex items-center gap-3" aria-label="Accueil NovaClean Riviera">
            <Image src="/logo.png" alt="NovaClean Riviera" width={48} height={48} className="rounded-full bg-white object-cover" priority />
            <div>
              <p className="text-lg font-semibold leading-none">NovaClean</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.35em] text-champagne">Riviera</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-white/85 md:flex">
            <a href="#services" className="hover:text-champagne">Services</a>
            <a href="#qualite" className="hover:text-champagne">Qualité</a>
            <a href="#zones" className="hover:text-champagne">Secteur</a>
            <a href="#contact" className="hover:text-champagne">Contact</a>
          </nav>

          <a href={`tel:${phoneHref}`} className="hidden rounded-full bg-gold px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-white sm:inline-flex">
            <Phone className="mr-2 h-4 w-4" /> {phoneDisplay}
          </a>
        </div>
      </header>

      <section id="accueil" className="relative overflow-hidden bg-navy pt-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,180,109,0.16),transparent_35%),linear-gradient(135deg,#071b32_0%,#0b2440_55%,#102f52_100%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-black/20 p-7 shadow-2xl backdrop-blur-md md:p-9">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-champagne" />
              Nettoyage premium dans les Alpes-Maritimes
            </div>

            <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">La propreté, notre engagement.</h1>

            <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-100">
              NovaClean Riviera accompagne les copropriétés, villas et entreprises avec des prestations de nettoyage fiables, élégantes et parfaitement adaptées à vos espaces.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 font-bold text-slate-950 transition hover:bg-white">
                Demander un devis <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-[#25D366]/60 bg-[#25D366] px-7 py-4 font-bold text-slate-950 transition hover:bg-white">
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-slate-950/40 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-slate-950">
                Voir nos services
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-5 text-sm text-slate-200">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-champagne" /> Sérieux</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-champagne" /> Réactivité</span>
              <span className="flex items-center gap-2"><Star className="h-4 w-4 text-champagne" /> Finition premium</span>
            </div>

            <div className="mt-10 rounded-3xl bg-slate-950/95 p-6 text-white shadow-2xl backdrop-blur">
              <p className="text-sm uppercase tracking-[0.25em] text-champagne">Copropriétés • Villas • Entreprises</p>
              <p className="mt-2 text-lg font-semibold">Un service propre, net et rassurant.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Nos prestations</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Des services pensés pour les espaces exigeants.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-[1.75rem] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-champagne">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{service.text}</p>
              <div className="mt-8 h-px bg-gradient-to-r from-gold to-transparent" />
            </article>
          ))}
        </div>
      </section>

      <section id="qualite" className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[2rem] bg-navy p-10 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-champagne">Méthode NovaClean</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">Une propreté visible, une organisation invisible.</h2>
            <p className="mt-6 leading-8 text-slate-200">
              Nous mettons en place des passages adaptés à votre besoin, avec une attention particulière aux détails : zones de contact, circulation, parties communes, sanitaires, vitrerie et finitions.
            </p>
            <a href="#contact" className="mt-8 inline-flex rounded-full bg-gold px-6 py-3 font-bold text-slate-950 transition hover:bg-white">Planifier une visite</a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-3xl bg-ivory p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <p className="font-medium text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="zones" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0d2d4d] to-navy p-8 text-white shadow-2xl md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-champagne">Secteur d’intervention</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight">Alpes-Maritimes & Côte d’Azur.</h2>
              <p className="mt-5 leading-8 text-slate-200">Interventions à Nice, Cannes, Antibes, Cagnes-sur-Mer, Saint-Laurent-du-Var, Grasse, Menton, Monaco et alentours selon disponibilité.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {cities.map((city) => (
                <div key={city} className="rounded-2xl border border-white/20 bg-white/15 px-5 py-4 text-white backdrop-blur">
                  <MapPin className="mb-2 h-4 w-4 text-champagne" />
                  <p className="font-medium">{city}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Contact</p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Besoin d’un nettoyage fiable et classe ?</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">Demandez votre devis gratuit. Nous vous répondons rapidement pour organiser une visite ou proposer une prestation adaptée.</p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <a href={`tel:${phoneHref}`} className="rounded-3xl bg-ivory p-6 transition hover:bg-navy hover:text-white">
              <Phone className="mx-auto mb-3 h-6 w-6 text-gold" />
              <p className="font-semibold">Téléphone</p>
              <p className="mt-1 text-sm opacity-75">{phoneDisplay}</p>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-3xl bg-[#e9fbef] p-6 transition hover:bg-[#25D366] hover:text-slate-950">
              <MessageCircle className="mx-auto mb-3 h-6 w-6 text-[#128C7E]" />
              <p className="font-semibold">WhatsApp</p>
              <p className="mt-1 text-sm opacity-75">Réponse rapide</p>
            </a>
            <a href="mailto:contact@novacleanriviera.fr" className="rounded-3xl bg-ivory p-6 transition hover:bg-navy hover:text-white">
              <Mail className="mx-auto mb-3 h-6 w-6 text-gold" />
              <p className="font-semibold">Email</p>
              <p className="mt-1 text-sm opacity-75">contact@novacleanriviera.fr</p>
            </a>
          </div>
        </div>
      </section>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Contacter NovaClean Riviera sur WhatsApp" className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-slate-950 shadow-2xl transition hover:scale-105">
        <MessageCircle className="h-7 w-7" />
      </a>

      <footer className="bg-slate-950 px-5 py-10 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="NovaClean Riviera" width={40} height={40} className="rounded-full bg-white object-cover" />
            <div>
              <p className="font-semibold">NovaClean Riviera</p>
              <p className="text-xs uppercase tracking-[0.25em] text-champagne">Propreté premium</p>
            </div>
          </div>
          <p className="text-sm text-slate-300">© 2026 NovaClean Riviera. Tous droits réservés.</p>
        </div>
      </footer>
    </main>
  );
}
