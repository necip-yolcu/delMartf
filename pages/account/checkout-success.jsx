import React, { useEffect, useState } from 'react';
import BreadCrumb from '~/components/elements/BreadCrumb';
import { getCart } from '~/store/cart/action';
import { connect, useDispatch } from 'react-redux';
import WPLayout from '~/wp-components/layouts/WPLayout';
import WPFormCheckout from '~/wp-components/shared/forms/WPFormCheckout';
import MyControlComp from '~/wp-components/shared/forms/MyControlComp';
import createPaymentIntent from '~/wp-components/shared/forms/api/create-payment-intent';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51LQB8FDfNLy6k24iYsNl3ter7es5Lg356R2xF6KxDLDUcNUuRLfMe6Kia7TUbebutFfMkZvDT2U8naKloGo9yDFw009n1YHeNR');

const CheckoutSuccessPage = () => {
    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: 'Shopping Cart',
            url: '/account/shopping-cart',
        },
        {
            text: 'Order Success',
        },
    ];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    return (
        <WPLayout title="Checkout">
            <div className="ps-page--simple">
                  <BreadCrumb breacrumb={breadCrumb} />
                <div className="ps-checkout ps-section--shopping">
                    <div className="container">
                        <div className="ps-section__header">
                            <h1>Checkout Success</h1>
                            <p>Thank you. Your order has been received</p>
                            <Elements stripe={stripePromise}>,
                                <MyControlComp />
                            </Elements>

                        </div>
                    </div>
                </div>
            </div>
        </WPLayout>
    );
};

export default connect()(CheckoutSuccessPage);
