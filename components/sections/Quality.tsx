import { CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";

const strengths = [
  "Devis gratuit et rapide",
  "Interventions régulières ou ponctuelles",
  "Prestations discrètes et soignées",
  "Équipe fiable et professionnelle",
  "Produits adaptés aux surfaces",
  "Suivi qualité après intervention"
];

export function Quality() {
  return (
    <section id="qualite" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div className="rounded-[2rem] bg-[#071b32] p-10 text-white shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d6b46d]">Méthode NovaClean</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight">Une propreté visible, une organisation invisible.</h2>
          <p className="mt-6 leading-8 text-slate-200">
            Nous mettons en place des passages adaptés à votre besoin, avec une attention particulière aux détails : zones de contact, circulation, parties communes, sanitaires, vitrerie et finitions.
          </p>
          <Button asChild className="mt-8 bg-[#c59a4a] text-slate-950 hover:bg-white">
            <a href="#contact">Planifier une visite</a>
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-3xl bg-[#f7f5f0] p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#b88a3b]" />
              <p className="font-medium text-slate-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
