import { MapPin } from "lucide-react";

const cities = [
  "Nice",
  "Cannes",
  "Antibes",
  "Cagnes-sur-Mer",
  "Grasse",
  "Menton",
  "Saint-Laurent-du-Var",
  "Monaco & alentours",
];

export function Zones() {
  return (
    <section id="zones" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0d2d4d] to-navy p-8 text-white shadow-2xl md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d6b46d]">Secteur d’intervention</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">Alpes-Maritimes & Côte d’Azur.</h2>
            <p className="mt-5 leading-8 text-slate-200">
              Interventions à Nice, Cannes, Antibes, Cagnes-sur-Mer, Saint-Laurent-du-Var, Grasse, Menton, Monaco et alentours selon disponibilité.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {cities.map((city) => (
              <div key={city} className="rounded-2xl border border-white/20 bg-white/15 px-5 py-4 text-white backdrop-blur">
                <MapPin className="mb-2 h-4 w-4 text-[#d6b46d]" />
                <p className="font-medium">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
