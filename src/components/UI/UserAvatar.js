import React from 'react';
import styles from './UserAvatar.module.css'
const UserAvatar = ({onClick}) => {
    return (
        <div className={styles.user_avatar} onClick={onClick}>

            <img src='https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg' alt="User Avatar" />
        </div>
    );
};

export default UserAvatar;