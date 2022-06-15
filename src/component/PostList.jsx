import React from 'react';
import PostItem from './PostItem';

function PostList({ posts, ...props }) {
    return (
        <div>
            <h1 className='list-title'>
                {props.title}
            </h1>
            {posts.map(post =>
                <PostItem
                    title={post.title}
                    body={post.body}
                    key={post.id}
                    id={post.id}
                />
            )},
        </div>
    );
}

export default PostList;