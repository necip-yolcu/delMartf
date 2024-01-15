import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../../../store/post/action';
import PostHorizontal from '../../elements/post/PostHorizontal';
import Link from 'next/link';

class BlogList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.dispatch(getPosts());
    }

    render() {
        const { posts } = this.props.post;
        return (
            <div className="ps-blog">
                <div className="ps-blog__header">
                    <ul className="ps-list--blog-links">
                        <li className="active">
                            <Link href="/blog">
                                All
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                Life Style
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                Technology
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                Entertaiment
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                Business
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                Others
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                Fashion
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="ps-blog__content">
                    <div className="ps-box--posts">
                        {posts && posts.length > 0
                            ? posts.map(post => {
                                  return (
                                      <PostHorizontal
                                          data={post}
                                          key={post.id}
                                      />
                                  );
                              })
                            : ''}
                    </div>
                    <div className="ps-pagination">
                        <ul className="pagination">
                            <li className="active">
                                <a href="#">1</a>
                            </li>
                            <li>
                                <a href="#">2</a>
                            </li>
                            <li>
                                <a href="#">3</a>
                            </li>
                            <li>
                                <a href="#">
                                    Next Page
                                    <i className="icon-chevron-right"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ post }) => ({ post });
export default connect(mapStateToProps)(BlogList);
