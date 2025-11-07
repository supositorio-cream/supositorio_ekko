/**
 * Auth Context - Ekko 2 Care
 * 
 * Contexto de autenticación mock para gestión de estado de usuario
 * 
 * @remarks
 * Este es un contexto mock para desarrollo sin backend real.
 * El estado de autenticación se persiste en localStorage para desarrollo.
 */

'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, currentUser } from '@/lib/mockData';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = 'ekko2care_auth';

interface AuthProviderProps {
  children: ReactNode;
}

/**
 * Proveedor de contexto de autenticación
 * 
 * @example
 * ```tsx
 * <AuthProvider>
 *   <App />
 * </AuthProvider>
 * ```
 */
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Cargar estado de autenticación desde localStorage al montar
  useEffect(() => {
    const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY);
    if (storedAuth === 'true') {
      // Simular usuario autenticado con datos mock
      setUser(currentUser);
    }
    setIsLoading(false);
  }, []);

  /**
   * Función de login mock
   * 
   * @param email - Email del usuario
   * @param password - Contraseña del usuario
   * @returns Promise<boolean> - true si el login es exitoso
   */
  const login = async (email: string, password: string): Promise<boolean> => {
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 500));

    // Validación mock básica (cualquier email y password válido)
    if (email && password && password.length >= 6) {
      // Usar datos mock del usuario actual
      setUser(currentUser);
      localStorage.setItem(AUTH_STORAGE_KEY, 'true');
      return true;
    }

    return false;
  };

  /**
   * Función de logout
   */
  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    isLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * Hook personalizado para acceder al contexto de autenticación
 * 
 * @returns AuthContextType - Contexto de autenticación
 * @throws Error si se usa fuera del AuthProvider
 * 
 * @example
 * ```tsx
 * const { user, isAuthenticated, login, logout } = useAuth();
 * ```
 */
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}


