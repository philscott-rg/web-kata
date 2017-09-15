import React, { Component } from 'react'
import './App.css'
import products from './data.js'

var prods = products.products;

class App extends Component {
  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Welcome Introduction to <code>web-kata#1</code></h2>
      </div>
      <div className='products'>
        <Products data={prods}/>
      </div>
    </div>
  }
}

class Products extends Component {
  render() {
    const prodList = prods.map((product) =>
      <Product key={product.name} name={product.name} description={product.description} free={product.free} new={product.new} />
    );

    return <div className="products">
      {prodList}
    </div> 
  }
}

class Product extends Component {
  render() {
    return <div className="product" data-free={this.props.free} data-new={this.props.new}>
      <h1>{this.props.name}</h1>
      <p>{this.props.description}</p>
    </div>
  }
}

export default App;
