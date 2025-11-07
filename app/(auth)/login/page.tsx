/**
 * Login Page - Ekko 2 Care
 * 
 * Página de inicio de sesión según PRD
 * 
 * @see PRD.md Section 6: Product Features
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Input } from '@/components/ui';
import { useAuth } from '@/contexts/AuthContext';
import { ROUTES } from '@/lib/constants';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const validateForm = (): boolean => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = 'El correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'El correo electrónico no es válido';
    }

    if (!password) {
      newErrors.password = 'La contraseña es requerida';
    } else if (password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      const success = await login(email, password);
      if (success) {
        router.push(ROUTES.HOME);
      } else {
        setLoginError('Credenciales inválidas. Por favor, intenta de nuevo.');
      }
    } catch (error) {
      setLoginError('Error al iniciar sesión. Por favor, intenta de nuevo.');
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-text-primary mb-2">
          Ekko 2 Care
        </h1>
        <p className="text-text-secondary font-regular">
          Inicia sesión para continuar
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {loginError && (
          <div className="p-3 bg-error/10 border border-error rounded-lg text-error text-sm font-regular">
            {loginError}
          </div>
        )}
        <Input
          label="Correo electrónico"
          type="email"
          placeholder="ejemplo@correo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          required
          disabled={isLoading}
        />

        <Input
          label="Contraseña"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          required
          disabled={isLoading}
        />

        <Button
          type="submit"
          variant="primary"
          size="large"
          className="w-full"
          loading={isLoading}
          disabled={isLoading}
        >
          Iniciar Sesión
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-text-secondary font-regular text-sm">
          ¿No tienes una cuenta?{' '}
          <Link
            href={ROUTES.REGISTER}
            className="text-primary font-bold hover:underline"
          >
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
}

