import _ from 'underscore'
import React, { Component } from 'react'
import './App.css'
import data from './data.js'
import Products from './Products.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { products : data.products }; 

    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  removeProduct(product) {
    this.setState({
      products: this.state.products.filter( p => p.name !== product.name )
    });
  }

  handleAddProduct(event) {
    event.preventDefault(); 

    var product = {
      name : event.target[0].value,
      description: event.target[1].value
    };

    this.setState({
      products: this.state.products.concat( [product] )
    });

    event.target[0].value = '';
    event.target[1].value = '';
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 2- Add and remove objects</h2>
      </div>
      <div className='add-product'>
        <form action="" onSubmit={this.handleAddProduct}>
          <label htmlFor="product-name">Product name</label>
          <input type="text" id="product-name"/>

          <label htmlFor="product-description">Product description</label>
          <input type="text" id="product-description"/>

          <input type="submit"/>
        </form>
      </div>
      <div className='products-container'>
        <Products products={this.state.products} removeProduct={this.removeProduct} />
      </div>
    </div>
  }
}

export default App
