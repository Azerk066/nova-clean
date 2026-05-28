import { BriefcaseBusiness, Building2, Home } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const services = [
  {
    icon: Building2,
    title: "Copropriétés",
    text: "Entretien régulier des halls, escaliers, ascenseurs, parkings, vitres et locaux communs."
  },
  {
    icon: Home,
    title: "Villas & résidences",
    text: "Ménage soigné pour villas, locations saisonnières, résidences secondaires et propriétés haut de gamme."
  },
  {
    icon: BriefcaseBusiness,
    title: "Entreprises",
    text: "Nettoyage de bureaux, commerces, cabinets, agences et espaces professionnels dans les Alpes-Maritimes."
  }
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#b88a3b]">Nos prestations</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">Des services pensés pour les espaces exigeants.</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="group overflow-hidden border-0 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <CardContent className="p-8">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0d2d4d] text-[#d6b46d]">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{service.text}</p>
              <div className="mt-8 h-px bg-gradient-to-r from-[#b88a3b] to-transparent" />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
