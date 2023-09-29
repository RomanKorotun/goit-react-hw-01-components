import React from 'react';
import { Profile } from './Profile/Profile';
import user from './Profile/user.json';
console.log(user);

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
    </React.Fragment>
  );
};
