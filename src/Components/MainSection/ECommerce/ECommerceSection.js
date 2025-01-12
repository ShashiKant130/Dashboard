import React from "react";
import styled from "styled-components";
import ECommerceCard from "./ECommerceCard";

const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

const ECommerce = (props) => {
  const { isDarkMode } = props;

  return (
    <MainDiv>
      <ECommerceCard
        title={"Customers"}
        number={"3,781"}
        percentChange={"+11.01%"}
        cardColor={"#E3F5FF"}
        isDarkMode={isDarkMode}
      />
      <ECommerceCard
        title={"Orders"}
        number={"1,219"}
        percentChange={"-0.03%"}
        cardColor={"#F7F9FB"}
        isDarkMode={isDarkMode}
      />
      <ECommerceCard
        title={"Revenue"}
        number={"$695"}
        percentChange={"+15.03%"}
        cardColor={"#F7F9FB"}
        isDarkMode={isDarkMode}
      />
      <ECommerceCard
        title={"Growth"}
        number={"30.1%"}
        percentChange={"+6.08%"}
        cardColor={"#E5ECF6"}
        isDarkMode={isDarkMode}
      />
    </MainDiv>
  );
};

export default ECommerce;
