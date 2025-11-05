/**
 * Protected Layout - Ekko 2 Care
 * 
 * Layout para páginas protegidas (Home, Search, Chat, Profile, Product)
 * Incluye NavBar fija en la parte inferior según PRD
 */

import { NavBar } from "@/components/layout";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background-mint pb-16">
      {children}
      <NavBar />
    </div>
  );
}

