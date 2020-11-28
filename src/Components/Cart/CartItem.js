/* eslint react/prop-types: 0 */

import React from 'react'

export default function CartItem({item, value}) {
    const { id, img, title, price } = item;
    const { removeItem } = value;

    return (
        <div className="row tex-capitalize text-center">
            <div className="col-10 mx-auto col-lg-3 my-auto py-2">
                <img
                    src={img}
                    style={{
                        width: "5rem",
                        height: "5rem"
                    }}
                    className="img-fluid"
                    alt="Product"
                />
            </div>
            <div className="col-10 mx-auto col-lg-3 my-auto">
                <p className="my-atuo">{title}</p>
            </div>
            <div className="col-10 mx-auto col-lg-3 my-auto">
                <p className="my-atuo">${price}</p>
            </div>
            <div className="col-10 mx-auto col-lg-3 my-auto">
                <div className="cart-icon">
                    <i className="fas fa-trash" onClick={() => removeItem(id)}/>
                </div>
            </div>
        </div>
    )
}
