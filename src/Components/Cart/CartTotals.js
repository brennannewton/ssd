/* eslint react/prop-types: 0 */

import React from 'react';

export default function CartTotals({value}) {
    const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-9 text-capitalize text-right">
                        <button
                            className="btn btn-outline-danger text-uppercase mb-3 px-5"
                            type="button"
                            onClick={() => clearCart()}
                        >
                            clear cart
                        </button>
                        <h5>
                            <span className="text-title">subtotal: </span>
                            <strong>${ cartSubtotal.toFixed(2) }</strong>
                        </h5>
                        <h5>
                            <span className="text-title">tax (7%): </span>
                            <strong>${ cartTax.toFixed(2) }</strong>
                        </h5>
                        <h5>
                            <span className="text-title">total: </span>
                            <strong>${ cartTotal.toFixed(2) }</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
