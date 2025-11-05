/**
 * Auth Layout - Ekko 2 Care
 * 
 * Layout para páginas de autenticación (Login, Register)
 * No incluye NavBar según PRD
 */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autenticación - Ekko 2 Care",
  description: "Inicia sesión o regístrate en Ekko 2 Care",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background-mint flex items-center justify-center">
      <div className="w-full max-w-md px-6 py-8">
        {children}
      </div>
    </div>
  );
}

