import styled from 'styled-components';

export const StatisticsSection = styled.section`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  padding-top: 20px;
  border-radius: 5px;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const StatisticsList = styled.ul`
  list-style: none;
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-basis: ${props => `calc(100%/ ${props.length} )`};
`;

export const Label = styled.span`
  color: white;
`;

export const Percentage = styled.span`
  font-size: 30px;
  font-weight: 600;
  color: white;
`;
