import React from 'react';
import Link from 'next/link';

const PostGrid = ({ data }) => {
    return (
        <article className="ps-post">
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
                <div className="ps-post__meta">
                    {data.categories.map(category => (
                        <Link href="/shop" key={category.id + category.text}>
                            {category.text}
                        </Link>
                    ))}
                </div>
                <Link href="/post/[pid]" as={`/post/${data.id}`} className="ps-post__title">
                    {data.title}
                </Link>
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

export default PostGrid;
