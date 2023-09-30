import styled from 'styled-components';

export const FriendListContainer = styled.ul`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  list-style: none;
  background-color: white;
  /* border-radius: 5px; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1px;
  margin-bottom: 20px;
`;

export const FriendListItem = styled.li`
  position: relative;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 50px;
  border-radius: 5px;
  border: 1px solid slategray;
  box-shadow: 1px 1px 5px 1px;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    if (props.$status) {
      return 'green';
    } else {
      return 'red';
    }
  }};
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
`;

export const AvatarInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Avatar = styled.img`
  width: 90px;
  height: 90px;
`;

export const Name = styled.p`
  font-size: 30px;
  font-weight: 600;
`;
