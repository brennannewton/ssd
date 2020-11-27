import React, { Component } from 'react'
import Product from './Product';
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h2 className="mx-auto text-center text-title pb-4">Pendants</h2>
                    <div className="row">
                        <ProductConsumer>
                            {value => {
                                return value.products.map(
                                    product => {
                                        return <Product key={product.id} product={product}/>
                                    }
                                )
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
