import React, { Component } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import Product from '../../../elements/products/Product';
import { carouselStandard } from '../../../../utilities/carousel-helpers';
import { getColletionBySlug } from '../../../../utilities/product-helper';
import { connect } from 'react-redux';

class TechnologyToys extends Component {
    render() {
        const { collections, collectionSlug } = this.props;
        const products = getColletionBySlug(collections, collectionSlug);
        return (
            <div className="ps-product-list">
                <div className="container">
                    <div className="ps-section__header">
                        <h3>Technology Toys Recommended For You</h3>
                        <ul className="ps-section__links">
                            <li>
                                <Link href="/shop">
                                    Micro
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    Drone/Flycam
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    Microphone
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    iQOS
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
                                <Product product={product} key={product.id} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(state => state.collection)(TechnologyToys);
