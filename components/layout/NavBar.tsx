/**
 * NavBar Component - Ekko 2 Care
 * 
 * Barra de navegación fija en la parte inferior según PRD
 * 
 * @see PRD.md Section 8.3: Iconography & Components
 * 
 * @remarks
 * PRD Section 8.3:
 * - Fixed bottom navigation bar with icons
 * - Outline icons, monochromatic (dark green or white)
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/ui/Icon';
import { getIcon, navigationIcons, type IconName } from '@/lib/icons';
import { ROUTES } from '@/lib/constants';

/**
 * Mapeo de iconos de navegación a rutas
 */
const navItems: { icon: IconName; route: string; label: string }[] = [
  { icon: 'home', route: '/home', label: 'Inicio' },
  { icon: 'search', route: '/search', label: 'Buscar' },
  { icon: 'chat', route: '/chat', label: 'Chat' },
  { icon: 'profile', route: '/profile', label: 'Perfil' },
];

/**
 * Componente NavBar fija en la parte inferior
 * 
 * @example
 * ```tsx
 * <NavBar />
 * ```
 */
export const NavBar: React.FC = () => {
  const pathname = usePathname();
  
  return (
    <nav
      className="
        fixed bottom-0 left-0 right-0 z-50
        bg-secondary
        border-t border-primary-dark
        shadow-lg
      "
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="container mx-auto px-0">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const isActive = pathname === item.route || pathname.startsWith(item.route + '/');
            
            return (
              <Link
                key={item.route}
                href={item.route}
                className={`
                  flex flex-col items-center justify-center
                  flex-1 h-full min-h-[44px]
                  transition-colors duration-200
                  touch-target
                  ${isActive 
                    ? 'text-primary' 
                    : 'text-white hover:text-primary'
                  }
                `}
                aria-label={item.label}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon
                  icon={getIcon(item.icon)}
                  size={24}
                  color={isActive ? 'dark-green' : 'white'}
                  aria-label={`${item.label} icono`}
                />
                <span className="text-xs font-regular mt-1">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

