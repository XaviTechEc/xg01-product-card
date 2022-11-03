import React from 'react';
import renderer from 'react-test-renderer';
import ProductCard, { ProductTitle } from '../../src/components';

import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('Must show the component with a custom title', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom Product" className="custom-class" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('Must show title with the name of a product', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => {
          return <ProductTitle />;
        }}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
