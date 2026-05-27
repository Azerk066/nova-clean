import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Qualite } from "@/components/sections/Qualite";
import { Services } from "@/components/sections/Services";
import { Zones } from "@/components/sections/Zones";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream text-slate-950">
      <Header />
      <main>
        <Hero />
        <Services />
        <Qualite />
        <Zones />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
