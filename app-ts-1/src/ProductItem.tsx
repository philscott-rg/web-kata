import * as React from 'react';
import { Product } from './Models/Product';

interface ProductItemProps {
  product: Product;
}

class ProductItem extends React.Component<ProductItemProps, {}> {
  render(): JSX.Element {
    const {product} = this.props;
    return (
      <>
        {product.name}
      </>
    );
  }
}

export { ProductItem };