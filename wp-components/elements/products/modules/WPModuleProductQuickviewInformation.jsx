import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Link from 'next/link';
import { formatCurrency } from '~/utilities/product-helper';
import Rating from '~/components/elements/Rating';
import { addItem } from '~/store/cart/action';
import ModuleProductDetailSharing from '~/components/elements/detail/modules/elements/ModuleProductDetailSharing';
import ModuleProductDetailSpecification
    from '~/components/elements/detail/modules/elements/ModuleProductDetailSpecification';
import { useRouter } from 'next/navigation';

const WPModuleProductQuickviewInformation = ({ product }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    let productPriceView;

    const handleAddItemToCart = (e) => {
        e.preventDefault();
        let tempProduct = product;
        tempProduct.quantity = quantity;
        dispatch(addItem(product));
    };

    const router = useRouter();
    const handleBuyNow = (e) => {
        e.preventDefault();
        let tempProduct = product;
        tempProduct.quantity = quantity;
        dispatch(addItem(product));
        router.push('/account/shopping-cart');
    };

    const handleIncreaseItemQty = (e) => {
        e.preventDefault();
        setQuantity(quantity + 1);
    };

    const handleDecreaseItemQty = (e) => {
        e.preventDefault();
        if (this.state.quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    // Views
    let productVendorView;
    if (product) {
        if (product.on_sale === true) {
            productPriceView = (
                <p className="ps-product__price sale">
                    <span>€</span>
                    {formatCurrency(product.sale_price)}
                    <del className="ml-2">
                        <span>€</span>
                        {formatCurrency(product.regular_price)}
                    </del>
                </p>
            );
        } else {
            productPriceView = (
                <p className="ps-product__price">
                    <span>€</span>
                    {formatCurrency(product.regular_price)}
                </p>
            );
        }
        if (product.store) {
            productVendorView = (
                <p>
                    Sold By:
                    <Link href="/store/[pid]" as={`/store/${product.store.id}`} className="ml-2">

                        <strong> {product.store.name}</strong>

                    </Link>
                </p>
            );
        }
    }

    return (
        <div className="ps-product__info">
            <h1>{product.name}</h1>
            <div className="ps-product__meta">
                <p>
                    Brand:
                        <Link href={`/brand/${product.attributes[0].options[0]}`}>
                            {product.attributes[0].options[0]}
                        </Link>
                </p>
                <div className="ps-product__rating">
                    <Rating />
                    <span>(1 review)</span>
                </div>
            </div>
            {productPriceView}
            <div className="ps-product__desc">
                {productVendorView}
                {product.short_description && (
                    <div
                        className="ps-document"
                        dangerouslySetInnerHTML={{
                            __html: `${product.short_description}`,
                        }}
                    />
                )}
            </div>
            <div className="ps-product__shopping">
                <figure>
                    <figcaption>Quantity</figcaption>
                    <div className="form-group--number">
                        <button className="up" onClick={handleIncreaseItemQty}>
                            <i className="fa fa-plus"></i>
                        </button>
                        <button
                            className="down"
                            onClick={handleDecreaseItemQty}>
                            <i className="fa fa-minus"></i>
                        </button>
                        <input
                            className="form-control"
                            type="text"
                            placeholder={quantity}
                            disabled
                        />
                    </div>
                </figure>
                <a
                    className="ps-btn ps-btn--black"
                    href="#"
                    onClick={handleAddItemToCart}>
                    Add to cart
                </a>
                <a className="ps-btn" href="#"
                   onClick={handleBuyNow}>
                    Buy Now
                </a>
            </div>
            <ModuleProductDetailSpecification product={product} />
            <ModuleProductDetailSharing />
        </div>
    );
};


export default connect((state) => state.cart)(
    WPModuleProductQuickviewInformation
);
