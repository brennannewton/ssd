import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';
import { CartBtn } from './CartBtn';

export default class Product extends Component {
    render() {
        const { id, img, title, price, inCart } = this.props.product;

        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3">
                <div className="card mb-4">
                    <ProductConsumer>
                        {(value) => (
                            <React.Fragment>
                                <div className="img-container" onClick={() => value.handleInfo(id)}>
                                    <Link to="/info">
                                        <img src={img} alt="Product" className="card-image-top"/>
                                    </Link>
                                </div>
                                <div className="card-footer text-center px-0 pb-4">
                                    <p className="product-title mb-2">{title}</p>
                                    <CartBtn
                                        className="p-2 px-3"
                                        disabled={inCart ? true : false}
                                        onClick={() => value.addToCart(id)}
                                    >{inCart ? 'In Cart' : `Add to Cart $${price}`}</CartBtn>
                                </div>
                            </React.Fragment>
                        )}
                    </ProductConsumer>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`
.card {
    border: none;
}
.img-container {
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    img {
        width: 100%;
    }
}
.img-container:hover {
    opacity: 0.85;
}
.card-footer {
    border: none;
    background: var(--onyx);
    .product-title {
        font-size: 1.25rem;
    }
}
`
