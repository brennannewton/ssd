/* eslint react/prop-types: 0 */

import React, { Component } from 'react'
import { storeProducts } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        productInfo: {}
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return {
                products: tempProducts,
                productInfo: tempProducts[0]
            }
        })
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleInfo = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {productInfo: product};
        })
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
