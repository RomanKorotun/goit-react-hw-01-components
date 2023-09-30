import { FriendListContainer } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      <FriendListItem list={friends} />
    </FriendListContainer>
  );
};
