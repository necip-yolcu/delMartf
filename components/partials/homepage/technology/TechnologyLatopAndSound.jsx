import React, { Component } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import Product from '../../../elements/products/Product';
import { carouselStandard } from '../../../../utilities/carousel-helpers';
import { connect } from 'react-redux';
import { getColletionBySlug } from '../../../../utilities/product-helper';

class TechnologyLaptopAndSound extends Component {
    render() {
        const { categories, collectionSlug } = this.props;
        const products = getColletionBySlug(categories, collectionSlug);
        return (
            <div className="ps-product-list">
                <div className="container">
                    <div className="ps-section__header">
                        <h3>Best Seller Laptops & Sounds</h3>
                        <ul className="ps-section__links">
                            <li>
                                <Link href="/shop">
                                    Apple
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    Laptop
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    Asus
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    Marshall
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    Speaker
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    JBL
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    Speaker
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    View All
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="ps-section__content">
                        <Slider
                            {...carouselStandard}
                            className="ps-carousel outside">
                            {products.map(product => (
                                <Product
                                    product={product}
                                    key={product.id}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(state => state.collection)(TechnologyLaptopAndSound);
