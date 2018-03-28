import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import ProductMenu from './ProductMenu.js'
import ProductContainer from './ProductContainer.js'
import './App.css'

import { fetchWebServerVersion } from './modules/versions'
import { fetchProducts, onProductAdd } from './modules/products'

class App extends Component {

  constructor(props) {
    super(props)
    this.props.fetchProducts()

    this.props.fetchWebServerVersion()

    this.handleAddProduct = this.handleAddProduct.bind(this)
  }

  handleAddProduct(event) {
    event.preventDefault();

    const newProduct = {
      name: event.target.name.value,
      description: event.target.description.value
    };

    this.props.onProductAdd(newProduct);
  }

  render() {
    return <div className='App'>
      <div className='App-header'>
        <h2>Kata 6 - Redux</h2>
        <pre>v{this.props.version}</pre>
      </div>
      <div className='products-add-product'>
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
        <ProductMenu />
        <Route exact path='/products/:productName' component={
          props => <ProductContainer {...props} products={this.props.products} />
        } />
      </div>
    </div>
  }
}

const mapStateToProps = state => ({
  version: state.versions.version,
  products: state.products.products
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchWebServerVersion,
  fetchProducts,
  onProductAdd,
}, dispatch)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
