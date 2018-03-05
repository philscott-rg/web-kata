import React, { Component } from 'react'

class Product extends Component {
  render () {
    return <div className={ `new--${this.props.product.free} free--${this.props.product.new}` }>
      <h3>{this.props.product.name}</h3>
      <p>{this.props.product.description}</p>
    </div>
  }
}

export default Product