import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            My post
            <div className={s.newPost}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                <button>Add post</button>
                </div>
                New post
                </div>
                <Post message="Hello" likeCount="5"/>
                {/* <Post message="Hello" likeCount="5"/> */}
        </div>
    );
}
export default MyPosts;