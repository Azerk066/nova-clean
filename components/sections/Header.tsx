import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "../ui/button";

const phoneDisplay = "06 00 00 00 00";
const phoneHref = "tel:+33600000000";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/20 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <a href="#accueil" className="flex items-center gap-3" aria-label="Accueil NovaClean Riviera">
          <Image src="/logo.png" alt="NovaClean Riviera" width={48} height={48} className="rounded-full object-cover" priority />
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-950">NovaClean</p>
            <p className="-mt-1 text-xs font-medium uppercase tracking-[0.35em] text-[#b88a3b]">Riviera</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <a href="#services" className="hover:text-[#b88a3b]">Services</a>
          <a href="#qualite" className="hover:text-[#b88a3b]">Qualité</a>
          <a href="#zones" className="hover:text-[#b88a3b]">Secteur</a>
          <a href="#contact" className="hover:text-[#b88a3b]">Contact</a>
        </nav>

        <Button asChild className="hidden bg-slate-950 text-white hover:bg-[#b88a3b] sm:inline-flex">
          <a href={phoneHref}><Phone className="mr-2 h-4 w-4" /> {phoneDisplay}</a>
        </Button>
      </div>
    </header>
  );
}
