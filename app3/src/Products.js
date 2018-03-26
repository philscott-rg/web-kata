import React, { Component } from 'react'
import './Products.css'

class Product extends Component{

    constructor(props){
        super(props);
        this.state = {showDescription: false};
    }

    render(){
        return <div className='product'>
            <div className='details'>
                <div className='name'>{this.props.product.name}</div>
                { this.state.showDescription && <div className='desc'>{this.props.product.description}</div> }
            </div>
            <div className='actions'>
                { this.state.showDescription ? <span title="collapse" onClick={() => this.setState({showDescription: !this.state.showDescription}) }> - </span>
                                             : <span title="expand" onClick={() => this.setState({showDescription: !this.state.showDescription}) }> + </span> }
                <span className='remove' title='remove' onClick={() => this.props.removeProduct(this.props.product)}>x</span>
            </div>
        </div>
    }
}

class Products extends Component{
    render(){
        return <div className='products'>
            {this.props.products.map(
                (p, i) => 
                <Product
                    product={p}
                    key={'product-' + i }
                    removeProduct={this.props.removeProduct}
                />
            )}
        </div>
    }
}

export default Products