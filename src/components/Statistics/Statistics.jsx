import {
  Item,
  Label,
  Percentage,
  StatisticsList,
  StatisticsSection,
  Title,
} from './Statistics.styled';
import getRandomHexColor from './fn-random-color';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      <Title>{title}</Title>
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <Item
            data={stats}
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};
