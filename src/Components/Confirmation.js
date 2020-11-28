import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { RedBtn } from './RedBtn';

export default class Confirmation extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { payment } = value;
                    console.log(payment);
                    return (
                        <React.Fragment>
                            <h2 className="text-center text-title mt-5">Congratulations!</h2>
                            <h5 className="text-center">
                                <strong>{payment.address.recipient_name}</strong>
                                , your order has been processed.
                            </h5>
                            <p className="text-center">It will be shipped to {payment.address.line1}, {payment.address.city}, {payment.address.state} {payment.address.postal_code}.</p>
                            <p className="text-center mt-4 payment-id">Payment ID:
                                <span className="font-italic"> {payment.paymentID}</span>
                            </p>
                            <Link to="/" className="d-flex justify-content-center mt-4">
                                <RedBtn className="p-2 px-3">
                                    Back to Home
                                </RedBtn>
                            </Link>
                        </React.Fragment>
                    )
                }}
            </ProductConsumer>
        )
    }
}


