/**
 * Product Details Page - Ekko 2 Care
 * 
 * Página de detalles de producto según PRD
 * 
 * @see PRD.md Section 6: Product Features
 */

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Avatar, Badge, ProductCard, Icon, Textarea } from '@/components/ui';
import { getProductById, mockProducts, getUserById } from '@/lib/mockData';
import { getIcon } from '@/lib/icons';
import { ROUTES } from '@/lib/constants';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const router = useRouter();
  const { id } = use(params);
  const product = getProductById(id);
  const [message, setMessage] = useState('');
  
  // Inicializar mensaje cuando el producto esté disponible
  useEffect(() => {
    if (product) {
      setMessage(`Hola! Me interesa el producto "${product.title}". ¿Aún está disponible?`);
    }
  }, [product]);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-6 text-center">
        <p className="font-regular text-lg text-text-secondary">
          Producto no encontrado
        </p>
        <Link href={ROUTES.HOME}>
          <Button variant="primary" className="mt-4">
            Volver al inicio
          </Button>
        </Link>
      </div>
    );
  }

  // Obtener productos similares (excluyendo el actual)
  // Primero intentar productos de la misma categoría, si no hay suficientes, agregar otros productos
  const sameCategoryProducts = mockProducts
    .filter(p => p.id !== product.id && p.category === product.category);
  
  const otherProducts = mockProducts
    .filter(p => p.id !== product.id && p.category !== product.category);
  
  // Combinar: primero productos de la misma categoría, luego otros productos
  const similarProducts = [...sameCategoryProducts, ...otherProducts].slice(0, 4);

  const statusBadgeVariant = product.status === 'disponible' 
    ? 'primary' 
    : product.status === 'reservado' 
    ? 'accent' 
    : 'default';

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Simular envío de mensaje y navegar al chat
    // En una implementación real, aquí se enviaría el mensaje al backend
    router.push(`${ROUTES.CHAT}/1`);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Imagen principal del producto */}
      <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
        {product.status && (
          <div className="absolute top-4 right-4">
            <Badge variant={statusBadgeVariant}>
              {product.status === 'disponible' ? 'Disponible' : product.status === 'reservado' ? 'Reservado' : 'Vendido'}
            </Badge>
          </div>
        )}
      </div>

      {/* Información del producto */}
      <div className="mb-6">
        <h1 className="font-bold text-2xl text-text-primary mb-4">
          {product.title}
        </h1>
        <p className="font-regular text-base text-text-primary mb-4">
          {product.description}
        </p>
        
        {/* Ubicación */}
        <div className="flex items-center gap-2 mb-4">
          <Icon
            icon={getIcon('location')}
            size={20}
            color="dark-green"
          />
          <span className="font-regular text-sm text-text-secondary">
            {product.location}
          </span>
        </div>
      </div>

      {/* Información del vendedor */}
      <section className="bg-white rounded-lg p-4 mb-6" aria-label="Información del vendedor">
        <h3 className="font-bold text-base text-text-primary mb-3">
          Vendedor
        </h3>
        <Link href={ROUTES.PROFILE} className="flex items-center gap-3" aria-label={`Ver perfil de ${product.seller.name}`}>
          <Avatar
            src={product.seller.avatar}
            name={product.seller.name}
            size="medium"
          />
          <div>
            <p className="font-bold text-sm text-text-primary">
              {product.seller.name}
            </p>
            <p className="font-regular text-xs text-text-secondary">
              {product.seller.email}
            </p>
          </div>
        </Link>
      </section>

      {/* Sección de intercambio */}
      <section className="bg-white rounded-lg p-4 mb-6" aria-label="Intercambio deseado">
        <h3 className="font-bold text-base text-text-primary mb-3">
          Me interesa cambiar por...
        </h3>
        <p className="font-regular text-base text-text-primary bg-surface rounded-lg p-3 border-l-4 border-primary">
          {(() => {
            // Lista de objetos aleatorios para trueque
            const tradeItems = [
              'Libros de jardinería',
              'Herramientas de carpintería',
              'Plantas de exterior',
              'Muebles de madera reciclada',
              'Bicicleta de montaña',
              'Instrumentos musicales',
              'Ropa vintage',
              'Macetas de terracota',
              'Mesa de centro',
              'Lámparas de diseño',
              'Alfombras ecológicas',
              'Juguetes educativos',
              'Equipo de camping',
              'Cámaras vintage',
              'Vinilos y discos',
              'Arte decorativo',
              'Vasos y tazas de cerámica',
              'Cestas de mimbre',
              'Espejos antiguos',
              'Cojines artesanales',
            ];
            
            // Usar el ID del producto para generar un índice determinístico
            // Esto asegura que el mismo producto siempre muestre el mismo objeto
            const productIdNum = parseInt(product.id) || 1;
            const randomIndex = (productIdNum - 1) % tradeItems.length;
            return tradeItems[randomIndex];
          })()}
        </p>
      </section>

      {/* Formulario de mensaje */}
      <section className="bg-white rounded-lg p-4 mb-8" aria-label="Enviar mensaje al vendedor">
        <h3 className="font-bold text-base text-text-primary mb-3">
          Enviar mensaje al vendedor
        </h3>
        <form onSubmit={handleSendMessage} className="space-y-4">
          <Textarea
            label="Mensaje"
            placeholder="Escribe tu mensaje aquí..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            required
            aria-label="Mensaje para el vendedor"
          />
          <Button
            type="submit"
            variant="primary"
            size="large"
            className="w-full"
            aria-label="Enviar mensaje al vendedor"
          >
            Enviar Mensaje
          </Button>
        </form>
      </section>

      {/* Productos Similares */}
      {similarProducts.length > 0 && (
        <section className="mt-8 mb-8" aria-label="Productos similares">
          <h3 className="font-bold text-lg text-text-primary mb-4">
            Productos Similares
          </h3>
          <div
            className="flex overflow-x-auto gap-4 pb-2 snap-x snap-mandatory scrollbar-hide"
            role="list"
            aria-label="Lista de productos similares"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {similarProducts.map((similarProduct) => (
              <Link
                key={similarProduct.id}
                href={`${ROUTES.PRODUCT}/${similarProduct.id}`}
                role="listitem"
                aria-label={`Ver producto: ${similarProduct.title}`}
                className="flex-shrink-0 w-[calc(50%-0.5rem)] sm:w-64 snap-start"
              >
                <ProductCard
                  image={similarProduct.image}
                  title={similarProduct.title}
                  location={similarProduct.location}
                  status={similarProduct.status === 'disponible' ? 'Disponible' : similarProduct.status === 'reservado' ? 'Reservado' : 'Vendido'}
                  onClick={() => {}}
                />
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

