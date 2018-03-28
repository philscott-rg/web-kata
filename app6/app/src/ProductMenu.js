import React, { Component } from 'react'
import './ProductMenu.css'
import { Link } from 'react-router-dom'
import { onProductRemove } from './modules/products'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ProductItem extends Component {


  render() {
    const name = this.props.product.name
    return <div className='product-item'>
      <div className='name'>
        <Link to={'/products/' + name}>{name}</Link>
        </div>
        <div
          className='product-item-remove'
          onClick={() => this.props.onProductRemove(name)}>x</div>
    </div>
  }
}

class ProductMenu extends Component {
  render() {
    return <div className='product-menu'>
      {this.props.products.map(
        (p, i) => <ProductItem
          product={p}
          key={'product-' + i}
          onProductRemove={(n) => this.props.onProductRemove(n)} />
      )}
    </div>
  }
}


const mapStateToProps = state => ({
  products: state.products.products
})

const mapDispatchToProps = dispatch => bindActionCreators({
  onProductRemove
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProductMenu)