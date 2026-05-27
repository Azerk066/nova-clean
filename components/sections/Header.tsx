import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/20 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="NovaClean Riviera" width={48} height={48} className="rounded-full object-cover" priority />
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-950">NovaClean</p>
            <p className="-mt-1 text-xs font-medium uppercase tracking-[0.35em] text-gold">Riviera</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          <a href="#services" className="hover:text-gold">Services</a>
          <a href="#qualite" className="hover:text-gold">Qualité</a>
          <a href="#zones" className="hover:text-gold">Secteur</a>
          <a href="#contact" className="hover:text-gold">Contact</a>
        </nav>

        <Button className="bg-slate-950 text-white hover:bg-gold hover:text-slate-950">Devis gratuit</Button>
      </div>
    </header>
  );
}
