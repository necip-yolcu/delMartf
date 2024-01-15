import React from 'react';
import Link from 'next/link';
import { WPProductThumbnailView } from '~/utilities/WPHelpers';
const WPProductCart = ({ product }) => {
    // Views
    const thumbnailImage = WPProductThumbnailView(product);
    return (
        <div className="ps-product--cart">
            <div className="ps-product__thumbnail">
                <Link href="/product/[pid]" as={`/product/${product.id}`}>
                    {thumbnailImage}
                </Link>
            </div>
            <div className="ps-product__content">
                <Link
                    href="/product/[pid]"
                    as={`/product/${product.id}`}
                    className="ps-product__title">
                    {product.name}
                </Link>
            </div>
        </div>
    );
};

export default WPProductCart;
