import React from 'react';
import renderer from 'react-test-renderer';

import { product2 } from '../data/products';
import { ProductImage, ProductCard } from '../../src/components';

describe('ProductImage', () => {
  test('Must show external img src', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://source.unsplash.com/random" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Must show img with the img of a product', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {() => {
          return <ProductImage />;
        }}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
