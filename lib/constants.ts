// Constantes de la aplicación

export const APP_NAME = "Ekko 2 Care";
export const APP_DESCRIPTION = "Plataforma para intercambio sostenible de productos";

// Rutas de la aplicación
export const ROUTES = {
  HOME: "/home",
  SEARCH: "/search",
  LOGIN: "/login",
  REGISTER: "/register",
  PRODUCT: "/product",
  PRODUCT_NEW: "/product/new",
  CHAT: "/chat",
  PROFILE: "/profile",
  HELP: "/help",
  SETTINGS: "/settings",
} as const;

// Rutas completas para páginas protegidas
export const PROTECTED_ROUTES = {
  HOME: "/home",
  SEARCH: "/search",
  PRODUCT: "/product",
  CHAT: "/chat",
  PROFILE: "/profile",
} as const;

