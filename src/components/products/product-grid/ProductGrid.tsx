import { IProduct } from '@/interfaces';
import React from 'react';

interface Props {
  products: IProduct[];
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      {products.map((product) => (
        <div key={product.slug}>{product.title}</div>
      ))}
    </div>
  );
};
