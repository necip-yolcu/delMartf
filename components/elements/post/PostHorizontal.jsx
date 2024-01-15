import React from 'react';
import Link from 'next/link';

const PostHorizontal = ({ data }) => {
    return (
        <article className="ps-post ps-post--horizontal">
            <div className="ps-post__thumbnail">
                <Link href="/post/[pid]" as={`/post/${data.id}`} className="ps-post__overlay">

                </Link>
                <img src={data.thumbnail} alt="martfury" />
                {data && data.badge ? (
                    <div className="ps-post__badge">
                        <i className={data.badge}></i>
                    </div>
                ) : (
                    ''
                )}
            </div>
            <div className="ps-post__content">
                <div className="ps-post__top">
                    <div className="ps-post__meta">
                        {data.categories.map(category => (
                            <Link
                                href="/shop"
                                key={category.id + category.text}>
                                {category.text}
                            </Link>
                        ))}
                    </div>
                    <Link href="/post/[pid]" as={`/post/${data.id}`} className="ps-post__title">
                        {data.title}
                    </Link>
                    <div className="ps-post__desc">
                        <p>
                            Lorem ipsum dolor sit amet, dolor siterim
                            consectetur adipiscing elit. Phasellus duio faucibus
                            est sed…
                        </p>
                    </div>
                </div>
                <p>
                    December 17, 2017 by
                    <Link href="/blog">
                         drfurion
                    </Link>
                </p>
            </div>
        </article>
    );
};

export default PostHorizontal;
