import React from 'react';
import Rating from '~/components/elements/Rating';

const WPStoreInformation = ({ store }) => {
    // views
    let storeBannerView;
    if (store.gravatar) {
        storeBannerView = <img src={store.gravatar} alt={store.store_name} />;
    } else {
        storeBannerView = (
            <img src="/static/img/vendor/vendor-store.jpg" alt="martfury" />
        );
    }

    return (
        <div className="ps-block--vendor">
            <div className="ps-block__thumbnail">{storeBannerView}</div>
            <div className="ps-block__container">
                <div className="ps-block__header">
                    <h4>{store.store_name}</h4>
                    <Rating />
                    <p>
                        <strong>{store.rating.rating}</strong>
                    </p>
                </div>
                <div className="ps-block__divider"></div>
                <div className="ps-block__content">
                    <p>
                        <strong>Address:</strong> {store.address.street_1},{' '}
                        {store.address.city}, {store.address.state},{' '}
                        {store.address.country},{store.address.zip}
                    </p>
                    <figure>
                        <figcaption>Follow us on social</figcaption>
                        <ul className="ps-list--social-color">
                            <li>
                                <a className="facebook" href={store.social.fb}>
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a className="twitter" href={store.social.twitter}>
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a className="linkedin" href={store.social.linkedin}>
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </li>
                            <li>
                                <a className="instagram" href={store.social.instagram}>
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                          
                        </ul>
                    </figure>
                </div>
                <div className="ps-block__footer">
                    <p>
                        Call us directly
                        <strong>{store.phone}</strong>
                    </p>
                    <p>or Or if you have any question</p>
                    <a className="ps-btn ps-btn--fullwidth" href={`tel:` + store.phone}>
                        Contact Seller
                    </a>
                </div>
            </div>
        </div>
    );
};

export default WPStoreInformation;
