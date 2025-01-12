import React from "react";
import styled from "styled-components";
import {
  topSellingProductsHeader,
  topSellingProductsData,
} from "../../constants";

const MainDiv = styled.div`
  background-color: ${(props) =>
    props.isDarkMode ? "rgba(28, 28, 28, 1)" : "#f7f9fb"};
  padding: 1.5rem;
  border-radius: 1rem;
  width: 70%;
`;

const TitleDiv = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
`;

const HeaderMainDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderTitleDiv = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
  color: ${(props) =>
    props.isDarkMode ? "rgba(255, 255, 255, 1)" : "rgba(28, 28, 28, 0.4)"};
  padding: 0.75rem 0;
  text-align: center;
  flex: 1;
`;

const Divider = styled.div`
  height: 0.125rem;
  align-self: stretch;
  background-color: rgba(28, 28, 28, 0.4);
`;

const TextDiv = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
  text-align: center;
  flex: 1;
  ${(props) => props.isDarkMode && "color: rgba(255, 255, 255, 1)"};
`;

const DataDiv = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
  padding: 0.75rem 0;
  display: flex;
  justify-content: space-between;
`;

const TopSellingProducts = (props) => {
  const { isDarkMode } = props;
  const getHeaderTitle = () => {
    return (
      <HeaderMainDiv>
        {topSellingProductsHeader?.map((ele, index) => (
          <HeaderTitleDiv
            isDarkMode={isDarkMode}
            key={ele?.title + "_" + index}
          >
            {ele?.title}
          </HeaderTitleDiv>
        ))}
      </HeaderMainDiv>
    );
  };

  const getData = () => {
    return (
      <>
        {topSellingProductsData?.map((ele, index) => (
          <DataDiv key={index}>
            <TextDiv isDarkMode={isDarkMode}>{ele?.name}</TextDiv>
            <TextDiv isDarkMode={isDarkMode}>{ele?.price}</TextDiv>
            <TextDiv isDarkMode={isDarkMode}>{ele?.quantity}</TextDiv>
            <TextDiv isDarkMode={isDarkMode}>{ele?.amount}</TextDiv>
          </DataDiv>
        ))}
      </>
    );
  };

  return (
    <MainDiv isDarkMode={isDarkMode}>
      <TitleDiv>Top Selling Products</TitleDiv>
      {getHeaderTitle()}
      <Divider />
      {getData()}
    </MainDiv>
  );
};

export default TopSellingProducts;
