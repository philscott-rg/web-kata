import React, { Component } from 'react'
import './ProductItem.css'
import { Link } from 'react-router-dom'

class ProductItem extends Component {
  render() {
    const name = this.props.product.name
    return <Link to={`/product/${name}`} >
        <div className='product-item'>
            <div className='name'>
                {name}
            </div>
        </div>
    </Link>
  }
}

export default ProductItem