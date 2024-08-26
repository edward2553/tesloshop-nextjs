'use client'
import { IProduct } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface Props {
  product: IProduct;
}

export const ProductGridItem = ({ product }: Props) => {
    const [displayImage, setDisplayImage] = useState(`/products/${product.images[0]}`);
  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link href={`/product/${product.slug}`}>
        <Image
          onMouseEnter={() => setDisplayImage(`/products/${product.images[1]}`)}
          onMouseLeave={() => setDisplayImage(`/products/${product.images[0]}`)}
          src={displayImage}
          alt={product.title}
          className="w-full object-cover rounded"
          width={500}
          height={500}
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link className="hover:text-blue-700" href={`/product/${product.slug}`}>
          {product.title}
        </Link>
        <span className="font-bold">{product.price}</span>
      </div>
    </div>
  );
};
