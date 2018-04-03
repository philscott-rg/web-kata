import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { removeProduct } from './modules/products'

import './ProductContainer.css'
import Product from './Product.js'

class ProductContainer extends Component {
  render() {
    const { selectedProduct } = this.props
    return <div className='product-container'>
      <div className='product-header'>
          <div
            className='product-item-remove'
            onClick={() => this.props.removeProduct(selectedProduct.name)}>x</div>
      </div>
      <div className="voteCount">
        {this.props.voteCount}
      </div>
      {selectedProduct && <Product product={this.props.selectedProduct} />}
    </div>
  }
}

const mapStateToProps = (state, ownProps) => ({
  selectedProduct: state.products.products && state.products.products.find(p => p.name === ownProps.match.params.productName),
  voteCount: state.products.votes && state.products.votes[ownProps.match.params.productName]
})

const mapDispatchToProps = dispatch => bindActionCreators({
    removeProduct,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)