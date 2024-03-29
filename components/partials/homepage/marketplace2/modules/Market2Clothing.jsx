import React, { Component } from 'react';
import Link from 'next/link';

import Slider from 'react-slick';
import Product from '../../../../elements/products/Product';
import { carouselStandard } from '../../../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../../../utilities/product-helper';
import { connect } from 'react-redux';

class Market2Clothing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { categories, collectionSlug } = this.props;
        const products = getColletionBySlug(categories, collectionSlug);
        return (
            <section className="ps-product-list">
                <div className="container">
                    <div className="ps-section__header">
                        <h3>Apparels & Clothings</h3>
                        <ul className="ps-section__links">
                            <li>
                                <Link href="/shop">
                                    New Arrivals
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    Best seller
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    Must Popular
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
                        <Slider {...carouselStandard} className="ps-carousel">
                            {products.map(product => (
                                <div className="item" key={product.id}>
                                    <Product product={product} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect(state=>state.collection)(Market2Clothing);
