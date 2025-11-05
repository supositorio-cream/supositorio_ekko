/**
 * Label Component - Ekko 2 Care
 * 
 * Componente de etiqueta para formularios según PRD
 * 
 * @see PRD.md Section 8.2: Typography
 */

'use client';

import React from 'react';

export interface LabelProps {
  /**
   * ID del elemento asociado
   */
  htmlFor?: string;
  
  /**
   * Indica si el campo es requerido
   * @default false
   */
  required?: boolean;
  
  /**
   * Contenido de la etiqueta
   */
  children: React.ReactNode;
  
  /**
   * Clases CSS adicionales
   */
  className?: string;
}

/**
 * Componente Label para formularios
 * 
 * @example
 * ```tsx
 * <Label htmlFor="email" required>
 *   Correo electrónico
 * </Label>
 * ```
 */
export const Label: React.FC<LabelProps> = ({
  htmlFor,
  required = false,
  children,
  className = '',
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`
        block text-sm font-regular text-text-primary mb-1
        ${required ? 'after:content-["*"] after:text-error after:ml-1' : ''}
        ${className}
      `}
    >
      {children}
    </label>
  );
};

export default Label;

