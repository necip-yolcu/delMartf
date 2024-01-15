import React, { Component } from 'react';
import Link from 'next/link';

import Slider from 'react-slick';
import ProductSimple from '../../../../elements/products/ProductSimple';
import { carouselSingle } from '../../../../../utilities/carousel-helpers';
import { connect } from 'react-redux';
import { getColletionBySlug } from '../../../../../utilities/product-helper';

class MarketConsumerElectronics extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { categories, collectionSlug } = this.props;
        const products = getColletionBySlug(categories, collectionSlug);
        return (
            <div className="ps-block--products-of-category">
                <div className="ps-block__categories">
                    <h3>Consumer Electronics</h3>
                    <ul>
                        <li>
                            <Link href="/shop" as="/shop/best-seller">
                                Best Seller
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/new-arrivals">
                                New Arrivals
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/tv-television">
                                TV Television
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/air-conditions">
                                Air Condition
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/washing-machine">
                                Washing Machine
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/microware">
                                Microwave
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/refrigerator">
                                Refrigerator
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/office-electronic">
                                Office Electronic
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/car-electronic">
                                Car Electronic
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/sale-and-deal">
                                Sales & Deals
                            </Link>
                        </li>
                    </ul>
                    <Link href="/shop" className="ps-block__more-link">
                        View All
                    </Link>
                </div>
                <div className="ps-block__slider">
                    <Slider {...carouselSingle} className="ps-carousel">
                        <a>
                            <img
                                src="/static/img/slider/home-3/electronic-1.jpg"
                                alt="martfury"
                            />
                        </a>
                        <a>
                            <img
                                src="/static/img/slider/home-3/electronic-2.jpg"
                                alt="martfury"
                            />
                        </a>
                        <a>
                            <img
                                src="/static/img/slider/home-3/electronic-3.jpg"
                                alt="martfury"
                            />
                        </a>
                    </Slider>
                </div>
                <div className="ps-block__product-box">
                    {products.map((product, index) => {
                        if (index < 6) {
                            return (
                                <ProductSimple
                                    product={product}
                                    key={product.id}
                                />
                            );
                        }
                    })}
                </div>
            </div>
        );
    }
}
export default connect(state => state.collection)(MarketConsumerElectronics);
