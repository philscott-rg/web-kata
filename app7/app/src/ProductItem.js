import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import { removeProduct, vote } from './modules/products'

class ProductItem extends Component {
  render() {
    const { name } = this.props.product
    return <div className='product-item'>
      <div className='name'>
        <Link to={'/products/' + name}>{name}</Link>
      </div>
      <div
        className='product-item-remove'
        onClick={() => this.props.removeProduct(name)}>
        x
      </div>
      <div 
        className="product-item-vote"
        onClick={() => this.props.vote(name)}>
        Vote
        <div className="vote-count">
          {this.props.voteCount}
        </div>
      </div>
    </div>
  }
}

const mapStateToProps = (state, ownProps) => ({
  voteCount: state.products.votes && state.products.votes[ownProps.product.name]
})

const mapDispatchToProps = dispatch => bindActionCreators({
  removeProduct,
  vote
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem)