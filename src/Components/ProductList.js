import React, { Component } from 'react'
import Product from './Product';

export default class ProductList extends Component {
    state = {
        products: []
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h2 className="mx-auto text-center text-title">Pendants</h2>
                    <div className="row">
                        <Product/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
