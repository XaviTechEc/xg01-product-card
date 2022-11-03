# xg01-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### XTECH

## Example
```ts
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from 'xg01-product-card'
```


```ts
<ProductCard
  product={product}
  initialValues={{
  count: 6
  // maxCount: 15
  }}
>
  {({ reset, increaseBy, count, isMaxCountReached }) => (
  <>
    <ProductImage />
    <ProductTitle />
    <ProductButtons />
  </>
  )}
</ProductCard>
```