/**
 * Landing Page - Ekko 2 Care
 * 
 * Página de inicio que redirige a login o home según estado de autenticación
 */

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { ROUTES } from '@/lib/constants';

export default function LandingPage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        router.push(ROUTES.HOME);
      } else {
        router.push(ROUTES.LOGIN);
      }
    }
  }, [isAuthenticated, isLoading, router]);

  // Mostrar loading mientras se verifica autenticación
  return (
    <div className="flex min-h-screen items-center justify-center bg-background-mint">
      <div className="text-text-secondary font-regular">Cargando...</div>
    </div>
  );
}
