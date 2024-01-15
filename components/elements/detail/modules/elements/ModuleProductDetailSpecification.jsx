import React from 'react';
import Link from 'next/link';

const ModuleProductDetailSpecification = ({product}) => (
    <div className="ps-product__specification">
        <Link href="/page/blank" className="report">
            Report Abuse
        </Link>
        <p>
            <strong>SKU:</strong> {product.sku}
        </p>
        <p className="categories">
            <strong> Categories:</strong>
            {product.categories.map(cat =>  <Link href={`/shop?category=${cat.id}`}>{cat.name}</Link>)}
        </p>
        <p className="tags">
            <strong> Tags</strong>
            {product.tags.map(tag => <Link href={`/#`}>{tag?.name}</Link>)}
        </p>
    </div>
);

export default ModuleProductDetailSpecification;
