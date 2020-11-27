import React, { Component } from 'react'
import { ProductConsumer } from '../context';
// import { Link } from 'react-router-dom';

export default class ProductInfo extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { img, title, description, price, inCart } = value.productInfo;
                    return (
                        <div className="container">
                            <div className="row">
                                <div className="col-9 mx-auto col-md-6">
                                    <img src={img} alt="Product" className="w-100"/>
                                </div>
                                <div className="col-9 mx-auto col-md-6">
                                    <h1>{title}</h1>
                                    <p>{description}</p>
                                    <p>{price}</p>
                                    <button
                                        className="product-price p-2 px-3"
                                        disabled={inCart ? true : false}
                                        onClick={() => value.addToCart()}
                                    >Add to Cart ${price}</button>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
