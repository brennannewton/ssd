/* eslint react/prop-types: 0 */

import React, { Component } from 'react'
import { storeProducts } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: storeProducts
    }

    handleInfo = () => {
        console.log('Handle info has been called!')
    }

    addToCart = () => {
        console.log('Add to cart has been called!')
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleInfo: this.handleInfo,
                addToCart: this.addToCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
