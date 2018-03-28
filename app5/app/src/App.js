import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import ProductMenu from './ProductMenu.js'
import ProductContainer from './ProductContainer.js'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.getProducts();

    this.remove = this.remove.bind(this);
    this.handleAddProduct = this.handleAddProduct.bind(this);
  };

  remove(productName) {
    fetch(`/api/products/delete/${productName}`, {
      method: "DELETE"
    }).then(response => {
      response.json().then( responseData => {
        this.setState( { products: responseData } );
      });
    }, error => {
      console.log(error.message);
    });
  }

  getProducts( callback ) {
    fetch('/api/products/get', {
      method: "GET"
    }).then(response => {
      response.json().then( responseData => {
        this.setState( { products: responseData } );
      });
    }, error => {
      console.log(error.message);
    });
  };

  handleAddProduct(event){
    event.preventDefault()

    fetch('/api/products/add/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify({
        "name": event.target.name.value,
        "description": event.target.description.value
      })
    }).then(response => {
      response.json().then( responseData => {
        this.setState( { products: responseData } );
      });
    }, error => {
      console.log(error.message);
    });
  }

  render() {
    return <div className="App">
      <div className="App-header">
        <h2>Kata 5 - Interaction with backend server through REST API calls</h2>
      </div>
      <div className='products-container'>
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
        <ProductMenu products={this.state.products} remove={this.remove}/>
        <Route exact path='/products/:productName' component={
          props => <ProductContainer {...props} products={this.state.products} />
        } />
      </div>
    </div>
  };
}

export default App
