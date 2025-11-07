/**
 * Protected Layout - Ekko 2 Care
 * 
 * Layout para páginas protegidas (Home, Search, Chat, Profile, Product)
 * Incluye NavBar fija en la parte inferior según PRD
 * Protege rutas verificando autenticación
 */

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { NavBar, Header } from "@/components/layout";
import { useAuth } from "@/contexts/AuthContext";
import { ROUTES } from "@/lib/constants";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push(ROUTES.LOGIN);
    }
  }, [isAuthenticated, isLoading, router]);

  // Mostrar loading mientras se verifica autenticación
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background-mint flex items-center justify-center">
        <div className="text-text-secondary font-regular">Cargando...</div>
      </div>
    );
  }

  // No mostrar contenido si no está autenticado (se redirigirá)
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background-mint pb-16 pt-20">
      <Header />
      <div className="pt-4">
        {children}
      </div>
      <NavBar />
    </div>
  );
}

