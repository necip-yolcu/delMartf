import React, { Component } from 'react';

import Link from 'next/link';
import SearchHeader from './modules/SearchHeader';
import menuData from '../../../public/static/data/menu';
import Menu from '../../elements/menu/Menu';
import CurrencyDropdown from './modules/CurrencyDropdown';
import LanguageSwicher from './modules/LanguageSwicher';
import ElectronicHeaderActions from './modules/ElectronicHeaderActions';
import { stickyHeader } from '../../../utilities/common-helpers';

class HeaderMarketPlace4 extends Component {
    constructor({ props }) {
        super(props);
    }

    componentDidMount() {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }

    render() {
        return (
            <header
                className="header header--standard header--market-place-4"
                id="headerSticky">
                <div className="header__top">
                    <div className="container">
                        <div className="header__left">
                            <p>Welcome to Martfury Online Shopping Store !</p>
                        </div>
                        <div className="header__right">
                            <ul className="header__top-links">
                                <li>
                                    <Link href="/vendor/store-list">
                                        Store Location
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page/blank">
                                        Track Your Order
                                    </Link>
                                </li>
                                <li>
                                    <CurrencyDropdown />
                                </li>
                                <li>
                                    <LanguageSwicher />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header__content">
                    <div className="container">
                        <div className="header__content-left">
                            <Link href="/home/market-place-4" className="ps-logo">

                                <img
                                    src="/static/img/logo_light.png"
                                    alt="martfury"
                                />

                            </Link>
                            <div className="menu--product-categories">
                                <div className="menu__toggle">
                                    <i className="icon-menu"></i>
                                    <span> Shop by Department</span>
                                </div>
                                <div className="menu__content">
                                    <Menu
                                        data={menuData.product_categories}
                                        className="menu--dropdown"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="header__content-center">
                            <SearchHeader />
                            <p>
                                <Link href="/shop">
                                    iphone x
                                </Link>
                                <Link href="/shop">
                                    virtual
                                </Link>
                                <Link href="/shop">
                                    apple
                                </Link>
                                <Link href="/shop">
                                    wireless
                                </Link>
                                <Link href="/shop">
                                    simple chair
                                </Link>
                                <Link href="/shop">
                                    classic watch
                                </Link>
                                <Link href="/shop">
                                    macbook
                                </Link>
                            </p>
                        </div>
                        <div className="header__content-right">
                            <ElectronicHeaderActions />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderMarketPlace4;
