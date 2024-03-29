import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import Link from 'next/link';
import { formatCurrency } from '~/utilities/product-helper';
import { addItem } from '~/store/cart/action';
import ModuleProductDetailSharing from '~/components/elements/detail/modules/elements/ModuleProductDetailSharing';

import {
    WPProductDetailBrandView,
    WPProductDetailCategoriesView,
    WPProductDetailRatingView,
    WPProductDetailShortDescView,
    WPProductDetailTagsView,
    WPProductDetailStoreView,
} from '~/utilities/WPHelpers';
import { useRouter } from 'next/router';

const WPModuleProductDetailInformation = ({ product, children, variant }) => {
    const router = useRouter()
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const handleAddItemToCart = (e) => {
        e.preventDefault();
        let tempProduct = product;
        tempProduct.quantity = quantity;
        dispatch(addItem(product));
    };

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

    const handleRenderPrice = (product) => {
        let priceView;
        if (product.on_sale === true) {
            priceView = (
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
            priceView = (
                <p className="ps-product__price">
                    <span>€</span>
                    {formatCurrency(product.regular_price)}
                </p>
            );
        }
        return priceView;
    };
    // Views
    const ratingView = WPProductDetailRatingView(product);
    const shortDescView = WPProductDetailShortDescView(product);
    const brandView = WPProductDetailBrandView(product);
    const categoriesView = WPProductDetailCategoriesView(product);
    const tagsView = WPProductDetailTagsView(product);
    let productPriceView, productVendorView;

    if (product) {
        if (variant) {
            productPriceView = handleRenderPrice(variant);
        } else {
            productPriceView = handleRenderPrice(product);
        }

        if (product.store) {
            //const vendorData = product.store.find(item => item.key === "shop_name");
            const vendorData = product.store;

            productVendorView = (
                <p>
                    Sold By:
                    <Link href="/store/[pid]" as={`/store/${vendorData.id}`} className="ml-2">
                    {/* <Link href={`/store/${vendorData.id}`} className="ml-2"> */}

                        <strong> {vendorData.name}</strong>

                    </Link>
                </p>
            );
        }
    }

    return (
        <div className="ps-product__info">
            <h1>{product.name}</h1>
            <div className="ps-product__meta">
                {brandView}
                {ratingView}
            </div>
            {productPriceView}

            <div className="ps-product__desc">
                {productVendorView}
                {shortDescView}
            </div>
            {children}
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
            <div className="ps-product__specification">
               {/*  <Link href="/page/blank" className="report">
                    Report Abuse
                </Link> */}
                <p>
                    <strong>SKU:</strong> {product.sku}
                </p>
                <p className="categories">
                    <strong> Categories:</strong>
                    {categoriesView}
                </p>
                <p className="tags">
                    <strong>Tags: </strong>
                    {tagsView}
                </p>
            </div>
            <ModuleProductDetailSharing />
        </div>
    );
};

const mapStateToProps = (state) => {
    return state.cart;
};
export default connect(mapStateToProps)(WPModuleProductDetailInformation);
