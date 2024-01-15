import React, { useEffect, useState } from 'react';
import WPProductRepository from '~/repositories/WP/WPProductRepository';
import { serializeQuery } from '~/repositories/Repository';
import Link from 'next/link';
import Spiner from '~/components/elements/common/Spiner';
import SkeletonWidgetAttrs from '~/components/elements/skeletons/SkeletonWidgetAttrs';

const WPWidgetCategories = ({ activeID }) => {
    const [loading, setLoading] = useState(true);
    const [categoryItems, setCategoryItems] = useState(null);
    async function getCategoryItems() {
        const queries = {
            pages: 1,
            per_page: 99,
        };
        const categories = await WPProductRepository.getProductCategories(
            queries
        );
        if (categories) {
            setTimeout(function () {
                setLoading(false);
            }, 500);
            setCategoryItems(categories.items);
        }
        return categories;
    }

    useEffect(() => {
        getCategoryItems();
    }, []);

    let categoryItemsView;
    if (categoryItems && categoryItems.length > 0 && !loading) {
        const items = categoryItems.filter((item) => item.count > 0).map((item) => (
            <li key={item.id}>
                <Link
                    href={`/shop?category=${item.id}`}
                    className={
                         activeID === item.id.toString()
                            ? 'active'
                            : ''
                    }
                    dangerouslySetInnerHTML={{
                        __html: `${item.name} (${item.count})`,
                    }}>

                </Link>
            </li>
        ));
        categoryItemsView = (
            <ul className="ps-list--categories">
                <li>
                    <Link href="/shop" className={activeID === undefined ? 'active' : ''}>
                        
                            All
                        
                    </Link>
                </li>
                {items}
            </ul>
        );
    } else {
        categoryItemsView = <SkeletonWidgetAttrs />;
    }

    return (
        <aside className="widget widget_shop">
            <h4 className="widget-title">By Categories</h4>
            <div className="widget__content">{categoryItemsView}</div>
        </aside>
    );
};

export default WPWidgetCategories;
