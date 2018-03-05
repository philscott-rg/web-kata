import React, { Component } from 'react'
import Product from './Product.js'

class Products extends Component {
  render() {
    return <div>
      {this.props.data.map( product => {
         return <Product product={product} />
      })}
    </div>
  }
}

export default Products