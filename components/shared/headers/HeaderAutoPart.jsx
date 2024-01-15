import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { notification } from 'antd';

import SearchHeader from './modules/SearchHeader';
import MiniCart from './modules/MiniCart';
import AccountQuickLinks from './modules/AccountQuickLinks';
import CurrencyDropdown from './modules/CurrencyDropdown';
import { stickyHeader } from '../../../utilities/common-helpers';

class HeaderAutoPart extends Component {
    constructor({ props }) {
        super(props);
    }

    componentDidMount() {
        if (process.browser) {
            window.addEventListener('scroll', stickyHeader);
        }
    }

    handleFeatureWillUpdate(e) {
        e.preventDefault();
        notification.open({
            message: 'Opp! Something went wrong.',
            description: 'This feature has been updated later!',
            duration: 500,
        });
    }

    render() {
        const menuAutopart = [
            {
                text: 'Interior',
                url: '/shop',
            },
            {
                text: 'Exterior',
                url: '/shop',
            },
            {
                text: 'Body parts',
                url: '/shop',
            },
            {
                text: 'Wheels & Tires',
                url: '/shop',
            },
            {
                text: 'Lighting',
                url: '/shop',
            },
            {
                text: 'Performance',
                url: '/shop',
            },
            {
                text: 'Repare part',
                url: '/shop',
            },
            {
                text: 'Tools & Garage',
                url: '/shop',
            },
        ];

        const { auth } = this.props;
        return (
            <header
                className="header header--standard header--autopart"
                id="headerSticky">
                <div className="header__top">
                    <div className="container">
                        <div className="header__left">
                            <p>
                                <strong>FREE SHIPPING</strong> for all orders
                                over $100
                            </p>
                        </div>
                        <div className="header__right">
                            <ul className="header__top-links">
                                <li>
                                    <Link href="/vendor/store-list">
                                        Store Location
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/account/order-tracking">
                                        Tract your order
                                    </Link>
                                </li>
                                <li>
                                    <CurrencyDropdown />
                                </li>
                                <li>
                                    {auth.isLoggedIn &&
                                    Boolean(auth.isLoggedIn) === true ? (
                                        <AccountQuickLinks isLoggedIn={true} />
                                    ) : (
                                        <AccountQuickLinks isLoggedIn={false} />
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header__content">
                    <div className="container">
                        <div className="header__content-left">
                            <Link href="/home/auto-part" className="ps-logo">

                                <img
                                    src="/static/img/logo-autopart.png"
                                    alt="martfury"
                                />

                            </Link>
                            <div className="menu--product-categories">
                                <div className="menu__toggle">
                                    <i className="icon-menu"></i>
                                    <span>Shop by Department</span>
                                </div>
                                <div className="menu__content">
                                    <ul className="menu--dropdown">
                                        <li>
                                            <Link href="/shop">
                                                Interior
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop">
                                                Wheels & Tires
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop">
                                                Exterior
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop">
                                                Performance
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop">
                                                Body parts
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop">
                                                Lighting
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop">
                                                Accessories
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="header__content-center">
                            <SearchHeader />
                        </div>
                        <div className="header__content-right">
                            <div className="header__actions">
                                <div className="ps-block--header-hotline">
                                    <div className="ps-block__left">
                                        <i className="icon-telephone"></i>
                                    </div>
                                    <div className="ps-block__right">
                                        <p>
                                            Hotline
                                            <strong>1-800-234-5678</strong>
                                        </p>
                                    </div>
                                </div>
                                <MiniCart />
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navigation">
                    <div className="container">
                        <ul className="menu menu--technology">
                            {menuAutopart.map((menuItem) => (
                                <li key={menuItem.text}>
                                    <Link href={menuItem.url}>
                                        {menuItem.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(HeaderAutoPart);
