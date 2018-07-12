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
  newProductName: string;
  newProductDescription: string;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // Access the REST API instead of grabbing products from data.ts
    this.state = { 
      products: [],
      newProductName: '',
      newProductDescription: ''
    };
    this.setProducts = this.setProducts.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.handleProductNameChange = this.handleProductNameChange.bind(this);
    this.handleProductDescriptionChange = this.handleProductDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    Api.getProducts(this.setProducts);
  }

  setProducts(products: Product[]) {
    this.setState({ products: products });
  }

  onDelete(product: Product) {
    Api.deleteProduct(product.name, this.setProducts);
  }

  addProduct(product: Product) {
    Api.addProduct(product, this.setProducts);
  }

  handleProductNameChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({
      newProductName: event.currentTarget.value
    });
  }

  handleProductDescriptionChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({
      newProductDescription: event.currentTarget.value
    });
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.addProduct({ name: this.state.newProductName, description: this.state.newProductDescription });
  }

  render(): JSX.Element {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Kata 5 TypeScript - Interaction with backend server through REST API calls</h2>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            Name:
            <input
              type='text'
              value={this.state.newProductName}
              onChange={this.handleProductNameChange}
            />
            Description:
            <input
              type='text'
              value={this.state.newProductDescription}
              onChange={this.handleProductDescriptionChange}
            />
            <input type='submit' value='Add' />
          </form>
        </div>
        <div className='products-container'>
          <ProductMenu products={this.state.products} onDelete={this.onDelete} />
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
