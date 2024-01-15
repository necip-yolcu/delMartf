import React, { Component } from 'react';
import Link from 'next/link';

import Slider from 'react-slick';
import ProductSimple from '../../../../elements/products/ProductSimple';
import { carouselSingle } from '../../../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../../../utilities/product-helper';
import { connect } from 'react-redux';

class MarketComputerAndTechnology extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { categories, collectionSlug } = this.props;
        const products = getColletionBySlug(categories, collectionSlug);

        return (
            <div className="ps-block--products-of-category">
                <div className="ps-block__categories">
                    <h3>Computer & Techologies</h3>
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
                            <Link href="/shop" as="/shop/women">
                                Desktop PC
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/men">
                                Laptop
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/smartphone">
                                Smartphones
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/tablets">
                                Tablets
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/storage-and-memory">
                                Storage & Memory
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/pc-component">
                                PC Component
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/game-accessories">
                                Game Accessories
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
                                src="/static/img/slider/home-3/technology-1.jpg"
                                alt="martfury"
                            />
                        </a>
                        <a>
                            <img
                                src="/static/img/slider/home-3/technology-2.jpg"
                                alt="martfury"
                            />
                        </a>
                        <a>
                            <img
                                src="/static/img/slider/home-3/technology-3.jpg"
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
export default connect(state => state.collection)(MarketComputerAndTechnology);
