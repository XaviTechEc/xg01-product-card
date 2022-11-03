import React, { useContext } from 'react';
import { ProductContext } from './ProductCard';

import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export type ProductImageProps = {
  img?: string;
  className?: string;
};

export const ProductImage = ({ img = '', className }: ProductImageProps) => {
  const { product } = useContext(ProductContext);

  let imgToShow: string;
  imgToShow = img ? img : product.img ? product.img : noImage;

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt="Product Img"
    />
  );
};
