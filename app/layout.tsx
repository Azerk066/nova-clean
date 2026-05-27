import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaClean Riviera | Nettoyage Alpes-Maritimes",
  description: "Nettoyage de copropriétés, villas et entreprises dans les Alpes-Maritimes.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
