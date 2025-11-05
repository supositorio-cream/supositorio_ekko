/**
 * Textarea Component - Ekko 2 Care
 * 
 * Componente de textarea para formularios según PRD
 * 
 * @see PRD.md Section 8.2: Typography
 */

'use client';

import React from 'react';
import { Label } from './Label';

export interface TextareaProps {
  /**
   * Etiqueta del textarea
   */
  label?: string;
  
  /**
   * ID del textarea
   */
  id?: string;
  
  /**
   * Nombre del textarea
   */
  name?: string;
  
  /**
   * Placeholder del textarea
   */
  placeholder?: string;
  
  /**
   * Valor del textarea
   */
  value?: string;
  
  /**
   * Handler de cambio
   */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  
  /**
   * Mensaje de error
   */
  error?: string;
  
  /**
   * Estado disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Campo requerido
   * @default false
   */
  required?: boolean;
  
  /**
   * Número de filas
   * @default 4
   */
  rows?: number;
  
  /**
   * Resizable configurable
   * @default 'vertical'
   */
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
  
  /**
   * Clases CSS adicionales
   */
  className?: string;
  
  /**
   * Atributos adicionales del textarea
   */
  [key: string]: any;
}

/**
 * Componente Textarea para formularios
 * 
 * @example
 * ```tsx
 * <Textarea
 *   label="Descripción"
 *   placeholder="Escribe una descripción..."
 *   required
 *   rows={5}
 *   resize="vertical"
 *   error={errors.description}
 * />
 * ```
 */
export const Textarea: React.FC<TextareaProps> = ({
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  rows = 4,
  resize = 'vertical',
  className = '',
  ...props
}) => {
  const textareaId = id || name || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  
  const baseClasses = `
    w-full px-4 py-3
    font-regular text-base text-text-primary
    bg-white border-2 rounded-lg
    placeholder:text-text-secondary
    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1
    transition-all duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
  `;
  
  const stateClasses = error
    ? 'border-error focus:border-error focus:ring-error'
    : 'border-border focus:border-primary';
  
  const resizeClasses = {
    none: 'resize-none',
    both: 'resize',
    horizontal: 'resize-x',
    vertical: 'resize-y',
  };
  
  const combinedClasses = `
    ${baseClasses}
    ${stateClasses}
    ${resizeClasses[resize]}
    ${className}
  `.trim();

  return (
    <div className="w-full">
      {label && (
        <Label htmlFor={textareaId} required={required}>
          {label}
        </Label>
      )}
      <textarea
        id={textareaId}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        rows={rows}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        className={combinedClasses}
        {...props}
      />
      {error && (
        <p
          id={`${textareaId}-error`}
          className="mt-1 text-sm text-error"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Textarea;

