import React from "react";
import styled from "styled-components";
import ECommerce from "./ECommerce/ECommerceSection";
import ProjectionChart from "./ProjectionsChart";
import RevenueChart from "./RevenueChart";
import TopSellingProducts from "./TopSellingProducts";
import TotalSalesChart from "./TotalSalesChart";
import Navbar from "../Navbar";

const InnerDiv = styled.div`
  padding: 1rem 1rem 8rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ECommerceTextDiv = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
`;

const RowDiv = styled.div`
  display: flex;
  gap: 1rem;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavbarDiv = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MainSection = (props) => {
  const { handleThemeChange, isDarkMode } = props;

  return (
    <MainDiv>
      <NavbarDiv>
        <Navbar handleThemeChange={handleThemeChange} />
      </NavbarDiv>
      <InnerDiv>
        <ECommerceTextDiv>eCommerce</ECommerceTextDiv>
        <RowDiv>
          <ECommerce isDarkMode={isDarkMode} />
          <ProjectionChart isDarkMode={isDarkMode} />
        </RowDiv>
        <>
          <RevenueChart isDarkMode={isDarkMode} />
        </>
        <RowDiv>
          <TopSellingProducts isDarkMode={isDarkMode} />
          <TotalSalesChart isDarkMode={isDarkMode} />
        </RowDiv>
      </InnerDiv>
    </MainDiv>
  );
};

export default MainSection;
