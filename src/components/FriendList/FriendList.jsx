// import {
//   Avatar,
//   AvatarInfo,
//   FriendListContainer,
//   FriendListItem,
//   Name,
//   Status,
// } from './FriendList.styled';

// export const FriendList = ({ friends }) => {
//   return (
//     <FriendListContainer>
//       {friends.map(({ avatar, name, isOnline, id }) => (
//         <FriendListItem key={id}>
//           <Status $status={isOnline} />
//           <AvatarInfo>
//             <Avatar src={avatar} alt="User avatar" />
//             <Name>{name}</Name>
//           </AvatarInfo>
//         </FriendListItem>
//       ))}
//     </FriendListContainer>
//   );
// };

import { FriendListContainer } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      <FriendListItem list={friends} />
    </FriendListContainer>
  );
};
