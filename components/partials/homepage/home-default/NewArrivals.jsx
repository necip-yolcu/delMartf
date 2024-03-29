import React, { Component } from 'react';
import ProductHorizontal from '../../../elements/products/ProductHorizontal';
import { connect } from 'react-redux';
import Link from 'next/link';
import { getColletionBySlug } from '../../../../utilities/product-helper';

class NewArrivals extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { collections, collectionSlug } = this.props;
        const products = getColletionBySlug(collections, collectionSlug);
        return (
            <div className="ps-product-list ps-new-arrivals">
                <div className="ps-container">
                    <div className="ps-section__header">
                        <h3>Hot New Arrivals</h3>
                        <ul className="ps-section__links">
                            <li>
                                <Link href="/shop?category=computers-and-technologies">
                                    Technologies
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop?category=consumer-electrics">
                                    Electronic
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop?category=furniture">
                                    Furnitures
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop?category=clothing-and-parel">
                                    Clothing & Apparel
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop?category=health-and-beauty">
                                    Health & Beauty
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
                        <div className="row">
                            {products.map(product => (
                                <div
                                    className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 "
                                    key={product.title}>
                                    <ProductHorizontal product={product} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => state.collection)(NewArrivals);
