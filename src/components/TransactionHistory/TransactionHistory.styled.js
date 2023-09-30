import styled from 'styled-components';

export const Table = styled.table`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border-collapse: collapse;
`;

export const Th = styled.th`
  width: 33.33%;
  background-color: cornflowerblue;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid slategray;
  text-transform: uppercase;
`;

export const Td = styled.td`
  font-size: 12px;
  color: slategray;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid slategray;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: gainsboro;
  }
`;
