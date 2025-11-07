/**
 * Auth Layout - Ekko 2 Care
 * 
 * Layout para páginas de autenticación (Login, Register)
 * No incluye NavBar según PRD
 * Redirige a /home si ya está autenticado
 */

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { ROUTES } from '@/lib/constants';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push(ROUTES.HOME);
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

  // No mostrar contenido si ya está autenticado (se redirigirá)
  if (isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background-mint flex items-center justify-center">
      <div className="w-full max-w-md px-6 py-8">
        {children}
      </div>
    </div>
  );
}

