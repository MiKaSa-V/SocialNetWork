import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div className={s.content}>
                <div>
                    <img src="https://picfiles.alphacoders.com/289/289691.jpg" alt="" />
                </div>
                <div>
                    ava
                </div>
                <MyPosts/>
                <MyPosts/>
            </div>
        </div>
    );
}
export default Profile;