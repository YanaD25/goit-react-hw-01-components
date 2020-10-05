import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';



function FriendList ({friends}) {
          return (
        <ul className ={styles.FriendList}>
            {friends.map(friend =>(
            <li className={styles.item} key ={friend.id}>
                <span className={friend.isOnline ? styles.online : styles.offline}></span>
                <img className={styles.avatar} src={friend.avatar} alt={friend.name} width="48" />
                <p className={styles.name}>{friend.name}</p>
            </li>
            ))}
        </ul>
    )

}
FriendList.propTypes={
    friends: PropTypes.array,
  }
export default FriendList;
