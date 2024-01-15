import React from 'react';
import Link from 'next/link';
import CurrencyDropdown from '~/components/shared/headers/modules/CurrencyDropdown';
import LanguageSwicher from '~/components/shared/headers/modules/LanguageSwicher';
import MobileHeaderActions from '~/components/shared/headers/modules/MobileHeaderActions';
import WPMobileHeaderActions from '~/wp-components/shared/mobile/WPMobileHeaderActions';

const WPHeaderMobile = () => {
    return (
        <header className="header header--mobile">
            <div className="header__top">
                <div className="header__left">
                    <p>Welcome to Martfury Online Shopping Store !</p>
                </div>
                <div className="header__right">
                    <ul className="navigation__extra">
                        <li>
                            <Link href="/vendor/become-a-vendor">
                                Sell on Martfury
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
                            <LanguageSwicher />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navigation--mobile">
                <div className="navigation__left">
                    <Link href="/" className="ps-logo">

                        <img
                            src="/static/img/logo_light.png"
                            alt="martfury"
                        />

                    </Link>
                </div>
                <WPMobileHeaderActions />
            </div>
        </header>
    );
};

export default WPHeaderMobile;
