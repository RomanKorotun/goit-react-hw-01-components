import {
  Description,
  ProfileContainer,
  ProfileList,
  ProfileListItem,
  StatsLabel,
  StatsQuantity,
  UserAvatar,
  UserLocation,
  UserName,
  UserTag,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileContainer>
      <Description>
        <UserAvatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </Description>

      <ProfileList>
        <ProfileListItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity>{followers}</StatsQuantity>
        </ProfileListItem>
        <ProfileListItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity>{views}</StatsQuantity>
        </ProfileListItem>
        <ProfileListItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity>{likes}</StatsQuantity>
        </ProfileListItem>
      </ProfileList>
    </ProfileContainer>
  );
};
