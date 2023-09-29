import styled from 'styled-components';

export const ProfileContainer = styled.div`
  max-width: 400px;
  background-color: white;
  /* border-radius: 5px; */
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 40px;
  padding-bottom: 20px;
`;

export const UserAvatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const UserName = styled.p`
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const UserTag = styled.p`
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
  color: slategray;
`;

export const UserLocation = styled.p`
  text-align: center;
  font-size: 20px;
  color: slategray;
`;

export const ProfileList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
`;

export const ProfileListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: silver;
  flex-basis: calc(100% / 3);
  border: 1px solid slategray;
`;

export const StatsLabel = styled.span`
  color: slategray;
`;

export const StatsQuantity = styled.span`
  font-weight: 700;
`;
