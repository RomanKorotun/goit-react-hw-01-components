import {
  Avatar,
  AvatarInfo,
  Item,
  Name,
  Status,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, status }) => {
  return (
    <Item>
      <Status $status={status} />
      <AvatarInfo>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{name}</Name>
      </AvatarInfo>
    </Item>
  );
};
