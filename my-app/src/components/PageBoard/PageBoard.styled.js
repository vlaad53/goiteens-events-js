import styled from "styled-components";

export const Board = styled.div`
  padding: 40px;
`;

export const Title = styled.h1`
  text-align: center;
  background-color: #cfe2ff;
  padding: 10px;
  border-radius: 6px;
`;

export const EventList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;
`;