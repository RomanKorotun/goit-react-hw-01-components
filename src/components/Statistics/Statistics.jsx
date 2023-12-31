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
      {title && <Title>{title}</Title>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <Item
            $length={stats.length}
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
