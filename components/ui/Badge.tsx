/**
 * Badge Component - Ekko 2 Care
 * 
 * Componente de badge para etiquetas y estados
 * 
 * @see PRD.md Section 8: UX/UI Guidelines
 */

'use client';

import React from 'react';

/**
 * Variantes de badge según contexto
 */
export type BadgeVariant = 'primary' | 'secondary' | 'accent' | 'error' | 'default';

export interface BadgeProps {
  /**
   * Variante del badge
   * @default 'default'
   */
  variant?: BadgeVariant;
  
  /**
   * Contenido del badge
   */
  children: React.ReactNode;
  
  /**
   * Clases CSS adicionales
   */
  className?: string;
}

/**
 * Mapeo de variantes a clases CSS
 */
const variantClasses: Record<BadgeVariant, string> = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
  accent: 'bg-accent text-text-primary',
  error: 'bg-error text-white',
  default: 'bg-surface text-text-primary',
};

/**
 * Componente Badge para etiquetas y estados
 * 
 * @example
 * ```tsx
 * <Badge variant="primary">Nuevo</Badge>
 * <Badge variant="error">Urgente</Badge>
 * <Badge variant="accent">Destacado</Badge>
 * ```
 */
export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  children,
  className = '',
}) => {
  const baseClasses = `
    inline-flex items-center justify-center
    px-2 py-1 rounded-full
    text-xs font-bold
    ${variantClasses[variant]}
    ${className}
  `;
  
  return (
    <span className={baseClasses}>
      {children}
    </span>
  );
};

export default Badge;

