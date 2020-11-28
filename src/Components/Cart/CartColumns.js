import React, { Component } from 'react'

export default class CartColumns extends Component {
    render() {
        return (
            <div className="container-fluid text-center d-none d-lg-block">
                <div className="row">
                    <div className="col-10 mx-auto col-lg-3">
                        <p className="text-uppercase">product</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-3">
                        <p className="text-uppercase">title</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-3">
                        <p className="text-uppercase">price</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-3">
                        <p className="text-uppercase">remove</p>
                    </div>
                </div>
            </div>
        )
    }
}