import React, { Component } from 'react'

export default class EmptyCart extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 text-center text-title">
                        Your cart is currently empty.
                    </div>
                </div>
            </div>
        )
    }
}
