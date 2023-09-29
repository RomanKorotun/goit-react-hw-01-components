import React from 'react';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
console.log(friends);

export const App = () => {
  return (
    <React.Fragment>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </React.Fragment>
  );
};
