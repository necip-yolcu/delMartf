import React, { Component } from 'react';

import Rating from '../../../Rating';
import Link from 'next/link';

class InformationFullContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { product } = this.props;
        return (
            <div className="ps-product__info">
                <h1>{product.title}</h1>
                <div className="ps-product__meta">
                    <p>
                        Brand:
                        <Link href="/shop" className="ml-2 text-capitalize">

                            {product.vendor}

                        </Link>
                    </p>
                    <div className="ps-product__rating">
                        <Rating />
                        <span>(1 review)</span>
                    </div>
                </div>
                <div className="ps-product__desc">
                    <p>
                        Sold By:
                        <Link href="/shop">

                            <strong> {product.vendor}</strong>

                        </Link>
                    </p>
                    <ul className="ps-list--dot">
                        <li>
                            {' '}
                            Unrestrained and portable active stereo speaker
                        </li>
                        <li> Free from the confines of wires and chords</li>
                        <li> 20 hours of portable capabilities</li>
                        <li>
                            {' '}
                            Double-ended Coil Cord with 3.5mm Stereo Plugs
                            Included
                        </li>
                        <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                    </ul>
                </div>
                <div className="ps-product__specification">
                    <Link href="/page/blank" className="report">
                        Report Abuse
                    </Link>
                    <p>
                        <strong>SKU:</strong> SF1133569600-1
                    </p>
                    <p className="categories">
                        <strong> Categories:</strong>
                        <Link href="/shop">
                            Consumer Electronics
                        </Link>
                        <Link href="/shop">
                            Refrigerator
                        </Link>
                        <Link href="/shop">
                            Babies & Moms
                        </Link>
                    </p>
                    <p className="tags">
                        <strong> Tags</strong>
                        <Link href="/shop">
                            sofa
                        </Link>
                        <Link href="/shop">
                            technologies
                        </Link>
                        <Link href="/shop">
                            wireless
                        </Link>
                    </p>
                </div>
                <div className="ps-product__sharing">
                    <a className="facebook" href="#">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a className="twitter" href="#">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a className="google" href="#">
                        <i className="fa fa-google-plus"></i>
                    </a>
                    <a className="linkedin" href="#">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a className="instagram" href="#">
                        <i className="fa fa-instagram"></i>
                    </a>
                </div>
            </div>
        );
    }
}

export default InformationFullContent;
