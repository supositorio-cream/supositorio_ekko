/**
 * Loading Component - Ekko 2 Care
 * 
 * Componente de spinner de carga según PRD
 * 
 * @see PRD.md Section 8: UX/UI Guidelines
 */

'use client';

import React from 'react';

/**
 * Tamaños del spinner de carga
 */
export type LoadingSize = 'small' | 'medium' | 'large';

export interface LoadingProps {
  /**
   * Tamaño del spinner
   * @default 'medium'
   */
  size?: LoadingSize;
  
  /**
   * Clases CSS adicionales
   */
  className?: string;
  
  /**
   * Color del spinner (opcional, usa primary por defecto)
   */
  color?: 'primary' | 'secondary' | 'white';
}

/**
 * Mapeo de tamaños a dimensiones
 */
const sizeDimensions: Record<LoadingSize, string> = {
  small: 'w-4 h-4 border-2',
  medium: 'w-8 h-8 border-2',
  large: 'w-12 h-12 border-2',
};

/**
 * Mapeo de colores a clases CSS
 */
const colorClasses: Record<'primary' | 'secondary' | 'white', string> = {
  primary: 'border-primary border-t-transparent',
  secondary: 'border-secondary border-t-transparent',
  white: 'border-white border-t-transparent',
};

/**
 * Componente Loading para indicadores de carga
 * 
 * @example
 * ```tsx
 * <Loading size="medium" />
 * <Loading size="large" color="white" />
 * ```
 */
export const Loading: React.FC<LoadingProps> = ({
  size = 'medium',
  color = 'primary',
  className = '',
}) => {
  const baseClasses = `
    inline-block rounded-full
    animate-spin
    ${sizeDimensions[size]}
    ${colorClasses[color]}
    ${className}
  `;
  
  return (
    <div
      className={baseClasses}
      role="status"
      aria-label="Cargando..."
    >
      <span className="sr-only">Cargando...</span>
    </div>
  );
};

export default Loading;

