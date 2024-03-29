import React, { Component } from 'react';

import Link from 'next/link';

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { categories, recentPosts } = this.props;
        return (
            <div className="sidebar">
                <aside className="widget widget--blog widget--search">
                    <form className="ps-form--widget-search" action="do_action" method="get">
                        <input className="form-control" type="text" placeholder="Search..." />
                        <button>
                            <i className="icon-magnifier"></i>
                        </button>
                    </form>
                </aside>
                <aside className="widget widget--blog widget--categories">
                    <h3 className="widget__title">Categories</h3>
                    <div className="widget__content">
                        <ul>
                            {categories &&
                                categories.map(category => (
                                    <li key={category.id}>
                                        <Link href="/blog">
                                            {category.text}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </aside>
                <aside className="widget widget--blog widget--recent-post">
                    <h3 className="widget__title">Recent Posts</h3>
                    <div className="widget__content">
                        {recentPosts !== []
                            ? recentPosts.map(post => (
                                  <Link href="/post/1" key={post.id}>
                                      {post.title}
                                  </Link>
                              ))
                            : ''}
                    </div>
                </aside>
                <aside className="widget widget--blog widget--recent-comments">
                    <h3 className="widget__title">Recent Comments</h3>
                    <div className="widget__content">
                        <p>
                            <Link href="/blog" className="author">
                                drfurion
                            </Link>
                            on
                            <Link href="/blog">
                                 Dashboard
                            </Link>
                        </p>
                        <p>
                            <Link href="/blog" className="author">
                                logan
                            </Link>
                            on
                            <Link href="/blog">
                                 Rayban Rounded Sunglass Brown Color
                            </Link>
                        </p>
                        <p>
                            <Link href="/blog" className="author">
                                logan
                            </Link>
                            on
                            <Link href="/blog">
                                 Sound Intone I65 Earphone White Version
                            </Link>
                        </p>
                        <p>
                            <Link href="/blog" className="author">
                                logan
                            </Link>
                            on
                            <Link href="/blog">
                                 Sleeve Linen Blend Caro Pane Shirt
                            </Link>
                        </p>
                    </div>
                </aside>

                <aside className="widget widget--blog widget--tags">
                    <h3 className="widget__title">Popular Tags</h3>
                    <div className="widget__content">
                        {categories &&
                            categories.map(category => (
                                <Link href="/blog" key={category.id}>
                                    {category.text}
                                </Link>
                            ))}
                    </div>
                </aside>
            </div>
        );
    }
}

export default Sidebar;
