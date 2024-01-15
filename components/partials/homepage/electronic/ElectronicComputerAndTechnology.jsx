import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Slider from 'react-slick';
import { getColletionBySlug } from '../../../../utilities/product-helper';
import { carouselStandard } from '../../../../utilities/carousel-helpers';
import Product from '../../../elements/products/Product';
class ElectronicComputerAndTechnology extends Component {
    render() {
        const { collections, collectionSlug } = this.props;
        const products = getColletionBySlug(collections, collectionSlug);
        return (
            <div className="ps-product-list ps-product-list--2">
                <div className="container">
                    <div className="ps-section__header">
                        <h3>Computers & Technology</h3>
                        <ul className="ps-section__links">
                            <li>
                                <Link href="/shop">
                                    Laptop
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    Desktop PC
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    Smartphone
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    Mainboards
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    PC Gaming
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop">
                                    Accessories
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


export default connect(state => state.collection)(
    ElectronicComputerAndTechnology
);
