import { Header } from "../components/sections/Header";
import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { Quality } from "../components/sections/Quality";
import { Zones } from "../components/sections/Zones";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f5f0] text-slate-950">
      <Header />
      <main>
        <Hero />
        <Services />
        <Quality />
        <Zones />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
