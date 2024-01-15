import React from 'react';
import Link from 'next/link';

const HomeDefaultTopCategories = () => (
    <div className="ps-top-categories">
        <div className="ps-container">
            <h3>Top categories of the month</h3>
            <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop?category=2015" className="ps-block__overlay">

                        </Link>
                        <img src="/static/img/categories/1.jpg" alt="martfury" />
                        <p>Auto & Motor</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop?category=111" className="ps-block__overlay">

                        </Link>
                        <img src="/static/img/categories/2.jpg" alt="martfury" />
                        <p>Beauty</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop?category=190" className="ps-block__overlay">

                        </Link>
                        <img src="/static/img/categories/3.jpg" alt="martfury" />
                        <p>Baby</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop?category=94" className="ps-block__overlay">

                        </Link>
                        <img src="/static/img/categories/4.jpg" alt="martfury" />
                        <p>Buitenspeelgoed</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop?category=608" className="ps-block__overlay">

                        </Link>
                        <img src="/static/img/categories/5.jpg" alt="martfury" />
                        <p>Haarverf</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop?category=367" className="ps-block__overlay">

                        </Link>
                        <img src="/static/img/categories/6.jpg" alt="martfury" />
                        <p>Lampen</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop?category=461" className="ps-block__overlay">

                        </Link>
                        <img src="/static/img/categories/7.jpg" alt="martfury" />
                        <p>Legpuzzels</p>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 ">
                    <div className="ps-block--category">
                        <Link href="/shop?category=162" className="ps-block__overlay">

                        </Link>
                        <img src="/static/img/categories/8.jpg" alt="martfury" />
                        <p>Huishouden</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HomeDefaultTopCategories;
