import {
  Avatar,
  AvatarInfo,
  Item,
  Name,
  Status,
} from './FriendListItem.styled';

export const FriendListItem = ({ list }) => {
  return (
    <>
      {list.map(({ avatar, name, isOnline, id }) => (
        <Item key={id}>
          <Status $status={isOnline} />
          <AvatarInfo>
            <Avatar src={avatar} alt="User avatar" />
            <Name>{name}</Name>
          </AvatarInfo>
        </Item>
      ))}
    </>
  );
};
