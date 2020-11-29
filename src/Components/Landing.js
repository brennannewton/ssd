import React, { Component } from 'react'
import landingImg from '../img/Necklace_TP_Opacity.png';
export default class Landing extends Component {
    render() {
        return (
            <div className="container m-auto p-0">
                <div className="row">
                    <div className="col-10 mx-auto col-lg-6">
                        <h1 className="info-title text-center my-3 my-lg-1">Second Sight Design</h1>
                        <img src={landingImg} className="w-100"/>
                    </div>
                </div>
            </div>
        )
    }
}
