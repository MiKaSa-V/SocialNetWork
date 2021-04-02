import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.picture}>
            <div>
                <img src="https://picfiles.alphacoders.com/289/289691.jpg" alt="" />
            </div>
            <div className={s.avaDescription}>
                ava + description
            </div>
        </div>
    );
}
export default ProfileInfo;