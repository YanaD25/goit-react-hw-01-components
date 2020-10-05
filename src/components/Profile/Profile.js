import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import styles from './Profile.module.css';


function Profile({ user }) {
    const {name,  tag,  location, avatar, stats: {followers, views, likes} } = user;
    return (
<div className = {styles.profile}>
    <div>    
    <img 
      src={avatar}
      alt={name}
      className={name}
    />
    <p className = {styles.name}>{name}</p>
    <p className = {styles.text}>@{tag}</p>
    <p className = {styles.text}>{location}</p>
  </div>

  <ul className = {styles.stats}>
    <li className = {styles.item}>
      <span className = {styles.label}>Followers</span>
      <span className = {styles.quantity}>{followers}</span>
    </li>
    <li className = {styles.item}>
      <span className = {styles.label}>Views</span>
      <span className = {styles.quantity}>{views}</span>
    </li>
    <li className = {styles.item}>
      <span className = {styles.label}>Likes</span>
      <span className = {styles.quantity}>{likes}</span>
    </li>
  </ul>
</div>
    )
}

Profile.defaultProps = {
    avatar:
      'https://https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  };
Profile.propTypes = {
    location: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.object
  };
  
  export default Profile;