import React, { Component } from 'react'
import { ProductConsumer } from '../context';
import { CartBtn } from './CartBtn';

export default class ProductInfo extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, img, title, description, price, inCart } = value.productInfo;
                    return (
                        <div className="container">
                            <div className="row">
                                <div className="col-9 mx-auto col-md-6">
                                    <img src={img} alt="Product" className="w-100"/>
                                </div>
                                <div className="col-9 mx-auto col-md-6">
                                    <h2 className="text-title">{title}</h2>
                                    <p>{description}</p>
                                    <p>{price}</p>
                                    <CartBtn
                                        className="p-2 px-3"
                                        disabled={inCart ? true : false}
                                        onClick={() => value.addToCart(id)}
                                    >{inCart ? 'In Cart' : `Add to Cart $${price}`}</CartBtn>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
