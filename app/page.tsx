/**
 * Landing Page - Ekko 2 Care
 * 
 * Página de inicio que redirige a login o home según PRD
 */

import Link from "next/link";
import { ROUTES } from "@/lib/constants";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background-mint">
      <main className="flex min-h-screen w-full max-w-md flex-col items-center justify-center gap-8 px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-bold text-primary">
            Ekko 2 Care
          </h1>
          <p className="text-lg text-text-secondary font-regular">
            Intercambio sostenible de productos
          </p>
        </div>
        
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <Link
            href={ROUTES.LOGIN}
            className="flex h-12 items-center justify-center rounded-full bg-primary px-6 text-white font-bold transition-colors hover:bg-primary-dark"
          >
            Iniciar Sesión
          </Link>
          <Link
            href={ROUTES.REGISTER}
            className="flex h-12 items-center justify-center rounded-full border-2 border-primary px-6 text-primary font-bold transition-colors hover:bg-primary hover:bg-opacity-10"
          >
            Registrarse
          </Link>
        </div>

        <div className="mt-8 text-center text-sm text-text-secondary font-regular">
          <p>MVP - Fase 4 completada ✓</p>
          <p className="mt-2">Todas las páginas implementadas</p>
        </div>
      </main>
    </div>
  );
}
