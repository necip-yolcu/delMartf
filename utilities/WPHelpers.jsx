/*
 * WPReact
 * Developed by: diaryforlife
 * */

import React from 'react';
import { formatCurrency } from '~/utilities/product-helper';
import Rating from '~/components/elements/Rating';
import Link from 'next/link';
import { getProductsByCategory } from '~/store/product/action';
import { useDispatch } from 'react-redux';

export function convertToURLEncoded(element, key, list) {
    var list = list || [];
    if (typeof element == 'object') {
        for (var idx in element)
            convertToURLEncoded(
                element[idx],
                key ? key + '[' + idx + ']' : idx,
                list
            );
    } else {
        list.push(key + '=' + encodeURIComponent(element));
    }
    return list.join('&');
}

function caculateDiscount(price, salePrice) {
    return (100 - (price / salePrice) * 100).toFixed(1);
}

export function WPGetProductImage(product) {
    let image;
    if (product.images && product.images.length > 0) {
        image = <img src={product.images[0].src} alt={product.name} />;
    } else {
        image = (
            <img
                src="/static/img/undefined-product-thumbnail.jpg"
                alt={product.name}
            />
        );
    }
    return image;
}

export function WPGetProductPrice(product) {
    let price;
    if (product.on_sale === true) {
        price = (
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
        price = (
            <p className="ps-product__price">
                <span>€</span>
                {formatCurrency(product.regular_price)}
            </p>
        );
    }
    return price;
}

export function WPGetProductBadge(product) {
    let badge;
    if (product.on_sale === true) {
        badge = (
            <div className="ps-product__badge">
                {caculateDiscount(product.regular_price, product.sale_price)}%
            </div>
        );
    }
    return badge;
}

// Product
export function WPProductPriceView(product) {
    let view;
    if (product.on_sale === true) {
        view = (
            <p className="ps-product__price sale">
                <span>€</span>
                {formatCurrency(
                    product.sale_price
                        ? product.sale_price
                        : product.price
                )}
                <del className="ml-2">
                    <span>€</span>
                    {formatCurrency(product.regular_price)}
                </del>
            </p>
        );
    } else {
        view = (
            <p className="ps-product__price">
                <span>{product.regular_price?'€':''}</span>
                {
                    product.sale_price
                        ? formatCurrency(product.regular_price)
                        : 'Out Of Stock'
                }
            </p>
        );
    }
    return view;
}

export function WPProductThumbnailView(product) {
    let view;
    if (product.images && product.images.length > 0) {
        view = <img src={product.images[0].src} alt={product.name} />;
    } else {
        view = (
            <img
                src="/static/img/undefined-product-thumbnail.jpg"
                alt={product.name}
            />
        );
    }
    return view;
}

export function WPProductBadgeView(product) {
    let view;
    if (product.stock_status !== 'outofstock') {
        if (product.on_sale === true) {
            view = <div className="ps-product__badge">Sale</div>;
        } else {
            if (product.meta_data) {
                const WPCustomBadge = product.meta_data.find(
                    (item) =>
                        item.key === 'custom_badges_text' && item.value !== ''
                );
                if (WPCustomBadge) {
                    view = (
                        <div className="ps-product__badge hot">
                            {WPCustomBadge.value}
                        </div>
                    );
                }
            }
        }
    } else {
        view = <div className="ps-product__badge out-stock">Out of stock</div>;
    }

    return view;
}

//Product detail

export function WPProductDetailRatingView(product) {
    let view;
    if (product.rating_count > 0) {
        view = (
            <div className="ps-product__rating">
                <Rating />
                <span>({product.rating_count} review)</span>
            </div>
        );
    } else {
        view = (
            <div className="ps-product__rating">
                <span>0 Rating(s)</span>
            </div>
        );
    }
    return view;
}

export function WPProductDetailShortDescView(product) {
    let view;
    if (product.short_description) {
        view = (
            <div
                className="ps-document"
                dangerouslySetInnerHTML={{
                    __html: `${product.short_description}`,
                }}
            />
        );
    } else {
        view = (
            <div>
                <p>
                    <i>This product hasn't short description.</i>
                </p>
            </div>
        );
    }
    return view;
}

export function WPProductDetailBrandView(product) {
    let view;
    if (product.attributes && product.attributes.length > 0) {
        const brand = product.attributes.find((item) => item.name === 'Merk');
        const brandId = product.attributes.find((item) => item.name === 'Merk') ? brand.options[0] : undefined;
        if (brand) {
            view = (
                <p>
                    Brand:
                    <Link href="/brands/[brand]" as={`/brands/${brandId}`} passHref>

                        {' '}
                        {brand.options[0]}

                    </Link>
                </p>
            );
        } else {
            view = <p>Brand: No Brand</p>;
        }
    }
    return view;
}
export   function sortProducts(products) {
    const withStock = products.filter((product) => product.price !== '');
    const withoutStock = products.filter((product) => product.price === '');

    return withStock.concat(withoutStock);
}
export function WPProductDetailMaterialsView(product) {
    let view;
    if (product.attributes && product.attributes.length > 0) {
        const materials = product.attributes.find((item) => item.name === 'Materiaal');
        const materialsId = product.attributes.find((item) => item.name === 'Materiaal') ? materials.options[0] : undefined;
        if (materials) {
            view = (
                <p>
                    Material:
                    <Link href="/materials/[materials]" as={`/materials/${materialsId}`} passHref>

                        {' '}
                        {materials.options[0]}

                    </Link>
                </p>
            );
        } else {
            view = <p>Material: No Materials</p>;
        }
    }
    return view;
}

export function WPProductDetailSizeView(product) {
    let view;
    if (product.attributes && product.attributes.length > 0) {
        const size = product.attributes.find((item) => item.name === 'Breedte');
        const sizeId = product.attributes.find((item) => item.name === 'Breedte') ? size.options[0] : undefined;
           
        if (size) {
            view = (
                <p>
                    Brand:
                    <Link href="/size/[size]" as={`/size/${sizeId}`} passHref>

                        {' '}
                        {size.options[0]}

                    </Link>
                </p>
            );
        } else {
            view = <p>Size: No Size</p>;
        }
    }
    return view;
}

export function WPProductDetailGenderView(product) {
    let view;
    if (product.attributes && product.attributes.length > 0) {
        const gender = product.attributes.find((item) => item.name === 'Geslacht');
        const genderId = product.attributes.find((item) => item.name === 'Geslacht') ? size.options[0] : undefined;
           
        if (gender) {
            view = (
                <p>
                    Gender:
                    <Link href="/gender/[gender]" as={`/gender/${genderId}`} passHref>

                        {' '}
                        {gender.options[0]}

                    </Link>
                </p>
            );
        } else {
            view = <p>Gender: No Gender</p>;
        }
    }
    return view;
}

export function WPProductDetailCategoriesView(product) {
    let view;

    const dispatch = useDispatch();
    const handleClick = (slug) => {
        
        dispatch(getProductsByCategory(slug));
        
    }
    if (product.categories) {
        view = product.categories.map((item) => (
            
                (<Link
                href={process.env.NEXT_PUBLIC_BASE_DOMAIN + '/shop?category=' + item.id}
                key={item.id}
                onClick={() => handleClick(item.slug)}
                className="ps-document"
                dangerouslySetInnerHTML={{
                    __html: `${item.name}`,
                }}>

            </Link>)
            
    ));
    } else {
        view = <i>No Category</i>;
    }
    return view;
}

export function WPProductDetailTagsView(product) {
    let view;
    if (product.tags && product.tags.length > 0) {
        view = product.tags.map((item) => (
            (<Link
                href="/shop"
                key={item.id}
                className="ps-document"
                dangerouslySetInnerHTML={{
                    __html: `${item.name}`,
                }}>

            </Link>)
        ));
    } else {
        view = <i>No tag.</i>;
    }
    return view;
}

export function WPProductDetailStoreView(product) {
    let view;
    if (product.store) {
        view = (
            <p>
                Sold By:
                <Link href="/shop" className="ml-2">

                    <strong> {product.store.name}</strong>

                </Link>
            </p>
        );
    } else {
        view = (
            <p>
                Sold By:
                <strong>Unknown Store</strong>
            </p>
        );
    }
    return view;
}

export function convertFormData(object) {
    const formData = new FormData();
    Object.keys(object).forEach((key) => formData.append(key, object[key]));
    return formData;
}
