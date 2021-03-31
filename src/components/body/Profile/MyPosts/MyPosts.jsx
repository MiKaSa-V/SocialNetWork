import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                New post
                </div>
            <Post message="Hello" likeCount="5"/>
            <Post message="Hi" likeCount="25"/>
        </div>
    );
}
export default MyPosts;