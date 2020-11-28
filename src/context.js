/* eslint react/prop-types: 0 */

import React, { Component } from 'react'
import { storeProducts } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        productInfo: {},
        cart: [],
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0,
        payment: {}
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

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return { products: tempProducts, cart: [...this.state.cart, product] };
        }, () => {
            this.addTotals();
        })
    }

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        
        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;
        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            }
        }, () => {
            this.addTotals();
        });
    }

    clearCart = () => {
        this.setState(() => {
            return { cart: [] }
        }, () => {
            this.setProducts();
            this.addTotals();
        });
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.07;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubtotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        });
    }

    handleConfirmation = (paymentInfo) => {
        this.setState(() => {
            return { payment: paymentInfo }
        });
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleInfo: this.handleInfo,
                addToCart: this.addToCart,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                handleConfirmation: this.handleConfirmation
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
