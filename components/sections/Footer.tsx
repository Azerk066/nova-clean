import Image from "next/image";
import { MessageCircle } from "lucide-react";

const whatsappHref = "https://wa.me/33600000000?text=Bonjour%20NovaClean%20Riviera%2C%20je%20souhaite%20un%20devis.";

export function Footer() {
  return (
    <>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Contacter NovaClean Riviera sur WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-slate-950 shadow-2xl transition hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

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
    </>
  );
}
