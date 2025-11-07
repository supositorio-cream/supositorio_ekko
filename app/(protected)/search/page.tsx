/**
 * Search Page - Ekko 2 Care
 * 
 * Página de búsqueda según PRD
 * 
 * @see PRD.md Section 6: Product Features
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button, Input, ProductCard } from '@/components/ui';
import { mockProducts } from '@/lib/mockData';
import { ROUTES } from '@/lib/constants';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setFilteredProducts(mockProducts);
      return;
    }

    const filtered = mockProducts.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.location.toLowerCase().includes(query.toLowerCase())
    );
    
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Barra de búsqueda */}
      <div className="mb-6" role="search" aria-label="Buscar productos">
        <div className="flex gap-2">
          <Input
            type="search"
            placeholder="Buscar productos..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="flex-1"
            aria-label="Campo de búsqueda de productos"
          />
          <Button
            variant="primary"
            onClick={() => handleSearch(searchQuery)}
            className="px-6"
            aria-label="Buscar productos"
          >
            Buscar
          </Button>
        </div>
      </div>

      {/* Resultados de búsqueda */}
      {filteredProducts.length > 0 ? (
        <section aria-label="Resultados de búsqueda">
          <h2 className="font-bold text-lg text-text-primary mb-4">
            Resultados de búsqueda ({filteredProducts.length})
          </h2>
          <div 
            className="flex overflow-x-auto gap-4 pb-2 snap-x snap-mandatory scrollbar-hide"
            role="list" 
            aria-label={`${filteredProducts.length} productos encontrados`}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredProducts.map((product) => (
              <Link 
                key={product.id} 
                href={`${ROUTES.PRODUCT}/${product.id}`}
                role="listitem"
                aria-label={`Ver producto: ${product.title}`}
                className="flex-shrink-0 w-[calc(50%-0.5rem)] sm:w-64 snap-start"
              >
                <ProductCard
                  image={product.image}
                  title={product.title}
                  location={product.location}
                  price={product.price}
                  status={product.status === 'disponible' ? 'Disponible' : product.status === 'reservado' ? 'Reservado' : 'Vendido'}
                  onClick={() => {}}
                  alt={product.title}
                />
              </Link>
            ))}
          </div>
        </section>
      ) : (
        <div className="text-center py-12" role="status" aria-live="polite">
          <p className="font-regular text-lg text-text-secondary mb-2">
            No se encontraron resultados
          </p>
          <p className="font-regular text-sm text-text-secondary">
            Intenta con otros términos de búsqueda
          </p>
        </div>
      )}
    </div>
  );
}

