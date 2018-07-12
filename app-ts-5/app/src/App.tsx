import * as React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';

import * as Api from './api';
import ProductMenu from './ProductMenu';
import ProductContainer from './ProductContainer';
import { Product } from './Models/Product';
import './App.css';

interface Props { }

interface State {
  products: Product[];
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // Access the REST API instead of grabbing products from data.ts
    this.state = { products: [] };
    this.setProducts = this.setProducts.bind(this);

    Api.getProducts(this.setProducts);
  }

  setProducts(products: Product[]) {
    this.setState({ products: products });
  }

  render(): JSX.Element {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Kata 5 TypeScript - Interaction with backend server through REST API calls</h2>
        </div>
        <div className='products-container'>
          <ProductMenu products={this.state.products} />
          <Route
            exact={true}
            path='/products/:productName'
            render={(props) => <ProductContainer {...props} products={this.state.products} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
