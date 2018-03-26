import React, { Component } from 'react'
import _ from 'underscore'
import data from './data.js'
import './ProductContainer.css'
import Product from './Product.js'

class ProductContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: data.products
    }
  }

  getProductDescription(name){
    const filteredProducts = _.filter(this.state.products, p => p.name === name);
    if (filteredProducts.length > 0) {
      return filteredProducts[0].description;
    } else {
      return 'something went wrong';
    }
  }

  render() {    
    return <div className='product-container'>
      <h1>{this.props.match.params.name}</h1>
      <p>{this.getProductDescription(this.props.match.params.name)}</p>
    </div>
  }
}

export default ProductContainer