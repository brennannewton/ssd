import React, { Component } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';

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
                                    <button
                                        className="product-price p-2 px-3"
                                        disabled={inCart ? true : false}
                                        onClick={() => value.addToCart()}
                                    >Add to Cart ${price}</button>
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
    .product-price {
        color: var(--onyx);
        background: var(--mint);
        border: none;
        transition: all 0.3s ease-in-out;
    }
    .product-price:hover {
        background var(--ivory);
    }
    .product-price:focus {
        outline: none;
    }
}
`
