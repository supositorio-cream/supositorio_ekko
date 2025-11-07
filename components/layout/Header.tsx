/**
 * Header Component - Ekko 2 Care
 * 
 * Header fijo en la parte superior con logo, nombre y menú hamburguesa
 * 
 * @see PRD.md Section 8.3: Layout & Components
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import { getIcon, type IconName } from '@/lib/icons';
import { ROUTES, APP_NAME } from '@/lib/constants';

/**
 * Mapeo de iconos de navegación a rutas (mismo que NavBar)
 */
const navItems: { icon: IconName; route: string; label: string }[] = [
  { icon: 'home', route: '/home', label: 'Inicio' },
  { icon: 'search', route: '/search', label: 'Buscar' },
  { icon: 'chat', route: '/chat', label: 'Chat' },
  { icon: 'profile', route: '/profile', label: 'Perfil' },
];

/**
 * Componente Header fijo en la parte superior
 * 
 * @example
 * ```tsx
 * <Header />
 * ```
 */
export const Header: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = (route: string) => {
    setIsMenuOpen(false);
    router.push(route);
  };


  return (
    <>
      <header
        className="
          fixed top-0 left-0 right-0 z-50
          bg-secondary
          border-b border-primary-dark
          shadow-md
        "
        role="banner"
        aria-label="Encabezado principal"
      >
        <div className="w-full px-4 md:px-6 lg:px-8 xl:px-16 2xl:px-24">
          <div className="flex items-center justify-between h-16 w-full">
            {/* Logo y Nombre */}
            <Link
              href={ROUTES.HOME}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              aria-label="Ir a inicio"
            >
              {/* Logo */}
              <div className="relative w-10 h-10" aria-label="Logo de Ekko 2 Care">
                <Image
                  src="/ekkologo.png"
                  alt="Ekko 2 Care Logo"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Nombre de la app */}
              <h1 className="font-bold text-lg text-white">
                {APP_NAME}
              </h1>
            </Link>

            {/* Menú Hamburguesa */}
            <button
              onClick={handleMenuToggle}
              className="
                p-2
                text-white
                hover:text-primary
                transition-colors duration-200
                min-w-[44px] min-h-[44px]
                flex items-center justify-center
                touch-target
              "
              aria-label="Abrir menú de navegación"
              aria-expanded={isMenuOpen}
              aria-controls="header-menu"
            >
              <Icon
                icon={getIcon('menu')}
                size={24}
                color="white"
                aria-label="Menú"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Menú Desplegable */}
      {isMenuOpen && (
        <nav
          id="header-menu"
          className="
            fixed top-16 right-0 z-50
            w-64
            bg-white
            border-l border-border
            shadow-xl
            transition-transform duration-200
          "
          role="navigation"
          aria-label="Menú de navegación"
        >
            <div className="flex flex-col">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.route || pathname.startsWith(item.route + '/');

                return (
                  <button
                    key={item.route}
                    onClick={() => handleMenuItemClick(item.route)}
                    className={`
                      flex items-center gap-3
                      px-4 py-4
                      min-h-[44px]
                      text-left
                      transition-colors duration-200
                      touch-target
                      ${
                        isActive
                          ? 'bg-primary text-white'
                          : 'text-text-primary hover:bg-surface'
                      }
                    `}
                    aria-label={item.label}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon
                      icon={getIcon(item.icon)}
                      size={20}
                      color={isActive ? 'white' : 'dark-green'}
                      aria-label={`${item.label} icono`}
                    />
                    <span className="font-regular text-base">{item.label}</span>
                  </button>
                );
              })}
            </div>
        </nav>
      )}
    </>
  );
};

export default Header;

