import React, { Component } from 'react';

import WPWidgetCategories from '~/wp-components/shop/WPWidgetCategories';
import WPWidgetAttr from '~/wp-components/shop/WPWidgetAttr';
import WPWidgetFilterByPrices from '~/wp-components/shop/WPWidgetFilterByPrices';

const WPShopWidget = () => {
    return (
        <div className="ps-layout__left">
            <WPWidgetCategories />
            <WPWidgetAttr attrID={10} attrName="pa_merk"  name="Brands" />
            <WPWidgetFilterByPrices />
        </div>
    );
};

export default WPShopWidget;
