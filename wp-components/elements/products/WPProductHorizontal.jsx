import React from 'react';
import Link from 'next/link';
import { formatCurrency } from '~/utilities/product-helper';
import LazyLoad from 'react-lazyload';
import Rating from '~/components/elements/Rating';
import {
    WPProductPriceView,
    WPProductThumbnailView,
} from '~/utilities/WPHelpers';

const WPProductHorizontal = ({ product }) => {
    const thumbnailImage = WPProductThumbnailView(product);
    const priceView = WPProductPriceView(product);
    return (
        <div className="ps-product--horizontal">
            <div className="ps-product__thumbnail">
                <Link href="/shop">

                    <LazyLoad>{thumbnailImage}</LazyLoad>

                </Link>
            </div>
            <div className="ps-product__content">
                <Link
                    href="/product/[pid]"
                    as={`/product/${product.id}`}
                    className="ps-product__title">
                    {product.name}
                </Link>
                <div className="ps-product__rating">
                    <Rating />
                </div>
                {priceView}
            </div>
        </div>
    );
};

export default WPProductHorizontal;
