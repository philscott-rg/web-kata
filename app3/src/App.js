import _ from 'underscore'
import React, { Component } from 'react'
import './App.css'
import data from './data.js'
import Products from './Products.js'

class App extends Component {

  constructor(props){
    super(props)
    this.state= {products: data.products}

    this.handleAddProduct = this.handleAddProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.setProductFilter = this.setProductFilter.bind(this);
    this.getFilteredProducts = this.getFilteredProducts.bind(this);
  }

  handleAddProduct(event){
    event.preventDefault()
    const products = [...this.state.products]

    products.push({
      name: event.target.name.value,
      description: event.target.description.value
    })

    this.setState({products: products})
  }

  removeProduct(product){
    const newProducts = _.filter(this.state.products, p => p.name !== product.name)
    this.setState({products: newProducts})
  }

  setProductFilter(event){
    this.setState({productFilterValue: event.target.value});
  }

  getFilteredProducts(){
    console.log(this.state.productFilterValue);
    if (this.state.productFilterValue && this.state.productFilterValue !== '') {
      let regex = new RegExp(this.state.productFilterValue, 'i');
      return _.filter(this.state.products, p => p.name.match(regex));
    } else {
      return this.state.products;
    }
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 3- Filter, show and hide objects</h2>
      </div>
      <div className='filter-products'>
        <form onSubmit={(event) => event.preventDefault() }>
          <label htmlFor="filter-products">Filter products</label>
          <input type="text" id="filter-products" onChange={this.setProductFilter}/>
        </form>
      </div>
      <div className='add-product'>
        <form onSubmit={this.handleAddProduct}>
          <label>product name:
            <input type='text' name='name' />
          </label>
          <label>description:
            <input type='text' name='description'/>
          </label>
          <input type='submit' value='add product' />
        </form>
      </div>
      <div className='products-container'>
        <Products products={this.getFilteredProducts()} removeProduct={this.removeProduct} />
      </div>
    </div>
  }
}

export default App
