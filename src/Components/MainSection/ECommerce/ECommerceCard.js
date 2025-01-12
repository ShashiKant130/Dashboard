import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  width: 7rem;
  height: 4rem;
  padding: 1.5rem;
  border-radius: 1rem;
  background-color: ${(props) =>
    props.isDarkMode ? "rgba(28, 28, 28, 1)" : props.bgClr};
`;

const TitleDiv = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  ${(props) => props.isDarkMode && `color: rgba(255, 255, 255, 1)`};
`;

const NumberAndPercentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NumberDiv = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 2.25rem;
  ${(props) => props.isDarkMode && `color: rgba(255, 255, 255, 1)`};
`;

const PercentDiv = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
  ${(props) => props.isDarkMode && `color: rgba(255, 255, 255, 1)`};
`;

const ECommerceCard = (props) => {
  const { title, number, cardColor, percentChange, isDarkMode } = props;

  return (
    <MainDiv bgClr={cardColor} isDarkMode={isDarkMode}>
      <TitleDiv isDarkMode={isDarkMode}>{title}</TitleDiv>
      <NumberAndPercentDiv>
        <NumberDiv isDarkMode={isDarkMode}>{number}</NumberDiv>
        <PercentDiv isDarkMode={isDarkMode}>{percentChange}</PercentDiv>
      </NumberAndPercentDiv>
    </MainDiv>
  );
};

export default ECommerceCard;
