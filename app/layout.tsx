import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaClean Riviera | Nettoyage copropriétés, villas et entreprises",
  description: "Société de nettoyage premium dans les Alpes-Maritimes pour copropriétés, villas et entreprises.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
