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

  render() {    
    const p = this.state.products.find(p => p.name === this.props.match.params.productName);
    return <div className='product-container'>
      <Product product={p} />
    </div>
  }
}

export default ProductContainer