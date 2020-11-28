/* eslint react/prop-types: 0 */

import React from 'react';
import PayPalBtn from './PayPalBtn';

export default function CartTotals({value, history}) {
    const { cartSubtotal, cartTax, cartTotal, clearCart, handleConfirmation } = value;
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
                            <span className="info-title">subtotal: </span>
                            <strong>${ cartSubtotal.toFixed(2) }</strong>
                        </h5>
                        <h5>
                            <span className="info-title">tax (7%): </span>
                            <strong>${ cartTax.toFixed(2) }</strong>
                        </h5>
                        <h5>
                            <span className="info-title">total: </span>
                            <strong>${ cartTotal.toFixed(2) }</strong>
                        </h5>
                        <PayPalBtn total={cartTotal} clearCart={clearCart} handleConfirmation={handleConfirmation} history={history}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
