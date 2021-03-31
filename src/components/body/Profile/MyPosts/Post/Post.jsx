import React from 'react';
import './Post.css';

const Post = (props) => {
    return (
        <div>
            <div>{props.message}</div>
            <div>Like {props.likeCount}</div>
        </div>
    );
}
export default Post;