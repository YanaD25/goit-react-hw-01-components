import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './Friendlist/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import friends from '../friends.json';
import statistic from '../statistical-data.json';
import transactions from '../transactions.json';
import user from  '../user.json';


export default function App() {
    return (
      <>
        <Profile user = {user} />
        <Statistics stats = {statistic} />
        <FriendList friends = {friends}/>
        <TransactionHistory items = {transactions}/>
      </>
    );
  }


