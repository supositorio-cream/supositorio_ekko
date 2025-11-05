/**
 * Icon Component - Ekko 2 Care
 * 
 * Componente base para iconos outline según PRD
 * 
 * @see PRD.md Section 8.3: Iconography & Components
 * 
 * @remarks
 * PRD Section 8.3:
 * - Icon Source: Flaticon
 * - Style: Outline icons, monochromatic (dark green or white)
 */

'use client';

import React from 'react';
import { IconType } from 'react-icons';

/**
 * Colores de icono según PRD
 * - dark green: Color secundario (#2E8B57)
 * - white: Color blanco para usar sobre fondos oscuros
 */
export type IconColor = 'dark-green' | 'white';

export interface IconProps {
  /**
   * Componente de icono de react-icons
   */
  icon: IconType;
  
  /**
   * Tamaño del icono en píxeles
   * @default 24
   */
  size?: number;
  
  /**
   * Color del icono según PRD
   * @default 'dark-green'
   */
  color?: IconColor;
  
  /**
   * Clases CSS adicionales
   */
  className?: string;
  
  /**
   * Handler de click (opcional)
   */
  onClick?: () => void;
  
  /**
   * Aria label para accesibilidad
   */
  'aria-label'?: string;
}

/**
 * Componente Icon que renderiza iconos outline según especificación del PRD
 * 
 * @example
 * ```tsx
 * import { FiHome } from 'react-icons/fi';
 * 
 * <Icon icon={FiHome} size={24} color="dark-green" />
 * ```
 */
export const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 24,
  color = 'dark-green',
  className = '',
  onClick,
  'aria-label': ariaLabel,
}) => {
  /**
   * Mapeo de colores según PRD
   * - dark-green: #2E8B57 (Secondary - Dark Green)
   * - white: #FFFFFF
   */
  const colorMap: Record<IconColor, string> = {
    'dark-green': '#2E8B57',
    'white': '#FFFFFF',
  };

  const iconColor = colorMap[color];
  
  const baseClasses = 'inline-flex items-center justify-center';
  const combinedClassName = className 
    ? `${baseClasses} ${className}` 
    : baseClasses;

  return (
    <IconComponent
      size={size}
      color={iconColor}
      className={combinedClassName}
      onClick={onClick}
      aria-label={ariaLabel}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    />
  );
};

export default Icon;

