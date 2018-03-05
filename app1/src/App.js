import React, { Component } from 'react'
import './App.css'
import Products from './Products.js'
import productList from './data.js'

class App extends Component {
  render() {
    return <div className="App">
      <Products data={productList.products} />
    </div>
  }
}

export default App;
