import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import BreadCrumb from '~/components/elements/BreadCrumb';
import { getProductsByCategory } from '~/store/product/action';
import { WPGetProducts } from '~/store/wp/action';
import ShopBanner from '~/components/partials/shop/ShopBanner';
import ShopCategories from '~/components/partials/shop/ShopCategories';
import ShopBrands from '~/components/partials/shop/ShopBrands';
import WPWidgetCategories from '~/wp-components/shop/WPWidgetCategories';
import WPWidgetAttr from '~/wp-components/shop/WPWidgetAttr';
import WPWidgetFilterByPrices from '~/wp-components/shop/WPWidgetFilterByPrices';
import WPShopProducts from '~/wp-components/shop/WPShopProducts';
import WPProductRepository from '~/repositories/WP/WPProductRepository';
import WPLayoutFullwidth from '~/wp-components/layouts/WPLayoutFullwidth';
import WPShopCategories from '~/wp-components/shop/WPShopCategories';

const WPShopPage = (props, { query }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [categoryName, setCategoryName] = useState(null);
    const wp_all_prod = useSelector(state => state.wp.WPProducts)

    async function getCategory(id) {
        const category = await WPProductRepository.getCategoryByID(id);
        if (category) {
            setCategoryName(category.name);
            return category;
        } else {
            return null;
        }
    }

    async function getProductOnChangeURL(url) {
        const nextPid = url.split('category=').pop();
        if (nextPid !== '' && isNaN(parseInt(nextPid)) === false) {
            const queries = {
                page: 1,
                per_page: 18,
                category: nextPid,
            };
            dispatch(WPGetProducts(queries));
            getCategory(nextPid);
        } else {
            const queries = {
                page: 1,
                per_page: 18,
            };
            dispatch(WPGetProducts(queries));
        }
    }

    useEffect(() => {
        if (query) {
            const queries = {
                page: 1,
                per_page: 18,
            };
            dispatch(WPGetProducts(queries));

            if (query.category) {
                dispatch(getProductsByCategory(query.category));
                getCategory(query.category);
            } else {
            }
        }

        
        //router.events.on('routeChangeStart', getProductOnChangeURL);
        const url = window.location.href;
        getProductOnChangeURL(url)
        
        return () => {
            router.events.off('routeChangeStart', getProductOnChangeURL);
        };
    }, [dispatch, router]);

    const breadCrumb = [
        {
            text: 'Home',
            url: '/',
        },
        {
            text: categoryName ? (
                <span
                    dangerouslySetInnerHTML={{
                        __html: `${categoryName}`,
                    }}
                />
            ) : (
                'Shop'
            ),
        },
    ];

    return (
        <WPLayoutFullwidth title="Shop">
            <div className="ps-page--shop">
                <BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
                <div className="ps-container">
                    <ShopBanner />
                    <ShopBrands />
                    <WPShopCategories />
                    <div className="ps-layout--shop">
                        <div className="ps-layout__left">
                            <WPWidgetCategories
                                activeID={query && query.category}
                            />
                            <WPWidgetAttr attrID={10} attrName="pa_merk" name="Brands"/>
                            <WPWidgetAttr attrID={16} attrName="pa_materiaal" name="Materials"/>
                            <WPWidgetAttr attrID={13} attrName="pa_breedte" name="Sizes"/>
                            <WPWidgetAttr attrID={11} attrName="pa_geslacht" name="Genders"/>
                            <WPWidgetFilterByPrices />
                        </div>
                        <div className="ps-layout__right">
                            <WPShopProducts WPProducts={wp_all_prod}/>
                        </div>
                    </div>
                </div>
            </div>
        </WPLayoutFullwidth>
    );
};

WPShopPage.getInitialProps = async ({ query }) => {
    return { query: query };
};

export default connect()(WPShopPage);
