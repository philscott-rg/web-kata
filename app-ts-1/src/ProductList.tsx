import * as React from 'react';
import { Product } from './Models/Product';
import { ProductItem } from './ProductItem';

interface ProductListProps {
  products: Product[];
}

class ProductList extends React.Component<ProductListProps, {}> {
  render(): JSX.Element {
    const {products} = this.props;
    return  (
      <div>
        {products.map( (product, index) => <ProductItem key={index} product={product} /> )};
      </div>
    );
  }
}

export { ProductList };