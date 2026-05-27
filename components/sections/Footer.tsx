import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-slate-950 px-5 py-10 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="NovaClean Riviera" width={40} height={40} className="rounded-full object-cover" />
          <div>
            <p className="font-semibold">NovaClean Riviera</p>
            <p className="text-xs uppercase tracking-[0.25em] text-[#d6b46d]">Propreté premium</p>
          </div>
        </div>
        <p className="text-sm text-slate-300">© 2026 NovaClean Riviera. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
