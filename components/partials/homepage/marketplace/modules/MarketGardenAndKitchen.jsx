import React, { Component } from 'react';
import Link from 'next/link';

import Slider from 'react-slick';
import ProductSimple from '../../../../elements/products/ProductSimple';
import { connect } from 'react-redux';
import { getColletionBySlug } from '../../../../../utilities/product-helper';
import { carouselSingle } from '../../../../../utilities/carousel-helpers';

class MarketGardenAndKitchen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { categories, collectionSlug } = this.props;
        const products = getColletionBySlug(categories, collectionSlug);
        return (
            <div className="ps-block--products-of-category">
                <div className="ps-block__categories">
                    <h3>
                        Home <br /> Garden  & Kitchen
                    </h3>
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
                            <Link href="/shop" as="/shop/furniture">
                                Furniture
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/home-decor">
                                Home Decor
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/cookware">
                                Cookware
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/utensils-and-gadget">
                                Utensils & Gadget
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/garden-tools">
                                Garden Tools
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop" as="/shop/acessesories">
                                Acessesories
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
                                src="/static/img/slider/home-3/kitchen-1.jpg"
                                alt="martfury"
                            />
                        </a>
                        <a>
                            <img
                                src="/static/img/slider/home-3/kitchen-2.jpg"
                                alt="martfury"
                            />
                        </a>
                        <a>
                            <img
                                src="/static/img/slider/home-3/kitchen-3.jpg"
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
export default connect(state => state.collection)(MarketGardenAndKitchen);
