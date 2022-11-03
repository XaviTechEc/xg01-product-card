import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/Product';

//* === IMPORTS ===
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

//* === EXPORTS ===
export { ProductTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';
export { ProductButtons } from './ProductButtons';
// export * from './ProductCard';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
