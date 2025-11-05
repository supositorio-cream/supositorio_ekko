/**
 * Typography Configuration - Ekko 2 Care
 * 
 * Utilidades de tipografía según PRD v1.0
 * 
 * @see PRD.md Section 8.2: Typography
 */

/**
 * Variantes de tipografía Poppins según el PRD
 * 
 * @remarks
 * PRD Section 8.2:
 * - Poppins Bold (700) – Titles, CTAs
 * - Poppins Regular (400) – Body text, forms
 * - Poppins Italic (400) – Notes, explanatory text
 */
export type TypographyVariant = 'bold' | 'regular' | 'italic';

/**
 * Configuración de variantes de tipografía
 */
export const typographyVariants = {
  /**
   * Poppins Bold (700)
   * Used for: Titles, CTAs
   */
  bold: {
    fontFamily: 'var(--font-poppins)',
    fontWeight: 700,
    fontStyle: 'normal',
  },
  
  /**
   * Poppins Regular (400)
   * Used for: Body text, forms
   */
  regular: {
    fontFamily: 'var(--font-poppins)',
    fontWeight: 400,
    fontStyle: 'normal',
  },
  
  /**
   * Poppins Italic (400)
   * Used for: Notes, explanatory text
   */
  italic: {
    fontFamily: 'var(--font-poppins)',
    fontWeight: 400,
    fontStyle: 'italic',
  },
} as const;

/**
 * Tamaños de fuente comunes (opcional para futuras extensiones)
 */
export const fontSizes = {
  xs: '0.75rem',    // 12px
  sm: '0.875rem',   // 14px
  base: '1rem',     // 16px
  lg: '1.125rem',   // 18px
  xl: '1.25rem',    // 20px
  '2xl': '1.5rem',  // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem',    // 48px
} as const;

/**
 * Alturas de línea comunes
 */
export const lineHeights = {
  tight: 1.25,
  normal: 1.5,
  relaxed: 1.75,
  loose: 2,
} as const;

/**
 * Obtiene las propiedades de tipografía para una variante
 * 
 * @param variant - Variante de tipografía (bold, regular, italic)
 * @returns Objeto con propiedades de tipografía
 * 
 * @example
 * ```ts
 * const boldStyle = getTypographyVariant('bold');
 * ```
 */
export function getTypographyVariant(variant: TypographyVariant) {
  return typographyVariants[variant];
}

/**
 * Constante de tipografía para uso en componentes
 */
export const typography = {
  variants: typographyVariants,
  fontSizes,
  lineHeights,
  getTypographyVariant,
} as const;

export default typography;

