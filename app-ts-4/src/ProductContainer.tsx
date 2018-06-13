import * as React from 'react';
import { Component } from 'react';
import './ProductContainer.css';
import { RouteComponentProps } from 'react-router-dom';
import { GetData } from './data';
import ProductComponent from './ProductComponent';

interface Props extends RouteComponentProps<{ productName: string }> {
}

interface State { }

class ProductContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render(): JSX.Element {
    const products = GetData();
    const product = products.find(prod => prod.name === this.props.match.params.productName);
    return (
      <div className='product-container'>
        {product && <ProductComponent product={product} />}
      </div>
    );
  }
}

export default ProductContainer;