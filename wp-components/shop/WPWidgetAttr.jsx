import React, { useEffect, useState } from 'react';
import WPProductRepository from '~/repositories/WP/WPProductRepository';
import SkeletonWidgetAttrs from '~/components/elements/skeletons/SkeletonWidgetAttrs';
import { Checkbox } from 'antd';
import { connect, useDispatch } from 'react-redux';
import { WPGetProducts } from '~/store/wp/action';
import Link from 'next/link';

const WPWidgetAttr = ({attrID, attrName, name}) => {
    console.log("nameememem",attrID, attrName, name)
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [attrItems, setAttrItems] = useState(null);
    const [selectedAttr, setSelectedAttr] = useState(null);

    async function getAttrs() {
        const queries = {
            pages: 1,
            per_page: 99,
        };

        const attrs = await WPProductRepository.getAttributeItems(attrID, queries);
        if (attrs) {
            setTimeout(function () {
                setLoading(false);
            }, 250);
            setAttrItems(attrs);
        }
        return attrs;
    }

    const handleFilterByAttr = (e, id) => {
        const existingParams = new URLSearchParams(window.location.search);
    
        if (selectedAttr === id) {
            setSelectedAttr(null);
            const params = {
                page: 1,
                per_page: 18,
                ...Object.fromEntries(existingParams),
            };
            dispatch(WPGetProducts(params));
        } else {
            setSelectedAttr(id);
            const params = {
                page: 1,
                per_page: 18,
                attribute: attrName,
                attribute_term: id,
                ...Object.fromEntries(existingParams),
            };
            dispatch(WPGetProducts(params));
        }
      
        /* existingParams.get("page") === null && existingParams.append("page",1)
        existingParams.get("per_page") === null && existingParams.append("per_page",18)
        
        
        console.log("URL__ 111 ", existingParams)
        if (selectedAttr === id) {
            console.log("URL__ 222 ", attrName, selectedAttr)
            setSelectedAttr(null);
            existingParams.delete("attribute", attrName)
            existingParams.delete("attribute_term", id)
        } else {
            console.log("URL__ 333 ",attrName, existingParams)
            setSelectedAttr(id);

            // Check if the attribute is already in the parameters
            if (!existingParams.has("attribute", attrName)) {
                console.log("URL__ 444 ", attrName)
                // If it's a different attribute, add it as a new filter
                existingParams.append("attribute", attrName)
                existingParams.append("attribute_term", id)
            } else {
                console.log("URL__ 555 ", attrName)
                // If it's the same attribute, overwrite itx
                existingParams.set("attribute_term", id)
            }
        }
        console.log("URL__ 666 ", attrName, existingParams)
        console.log("URL__ 777 ", existingParams.toString())

        window.history.pushState({ path: existingParams.toString() }, '', `?${existingParams.toString()}`);

        dispatch(WPGetProducts(existingParams.toString())); */

    };

    useEffect(() => {
        getAttrs();
    }, []);

    // Views
    let attrItemsView;

    if (!loading) {
        attrItemsView = <SkeletonWidgetAttrs />;
        if (Array.isArray(attrItems)) {
            attrItemsView = attrItems?.filter((item) => item.count > 0).map((item) => (
                <Checkbox
                    checked={
                        selectedAttr && selectedAttr === item.id
                            ? true
                            : false
                    }
                    key={item.id}
                    onChange={(e) => handleFilterByAttr(e, item.id)}>
                    {item.name} ({item.count})
                </Checkbox>
            ));
        } else {
            attrItemsView = <p>No {name} Found.</p>;
        }
    } else {
        attrItemsView = <SkeletonWidgetAttrs />;
    }

    return (
        <aside className="widget widget_shop">
            <h4 className="widget-title">By {name}</h4>
            <div className="widget__content">{attrItemsView}</div>
        </aside>
    );
};

export default connect()(WPWidgetAttr);
