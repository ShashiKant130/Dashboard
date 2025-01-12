import React from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import { Input } from "antd";
import {
  ArrowsAltOutlined,
  FilterOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import OrderListTable from "./OrderListTable";

const MainDiv = styled.div`
  width: 100%;
`;

const TitleDiv = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding-bottom: 1rem;
`;

const InnerDiv = styled.section`
  padding: 1.5rem;
`;

const ActionDiv = styled.div`
  background-color: ${(props) =>
    props.isDarkMode ? "rgba(28, 28, 28, 0.4)" : "#f7f9fb"};
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  border-radius: 0.5rem;
`;

const ImageDiv = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavbarDiv = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const { Search } = Input;

const OrderList = (props) => {
  const { handleThemeChange, isDarkMode } = props;
  return (
    <MainDiv>
      <NavbarDiv>
        <Navbar handleThemeChange={handleThemeChange} />
      </NavbarDiv>
      <InnerDiv>
        <TitleDiv>Order List</TitleDiv>
        <ActionDiv isDarkMode={isDarkMode}>
          <ImageDiv>
            <PlusOutlined />
            <FilterOutlined />
            <ArrowsAltOutlined />
          </ImageDiv>
          <Search
            placeholder="Search"
            style={{
              width: 200,
            }}
          />
        </ActionDiv>
        <OrderListTable isDarkMode={isDarkMode} />
      </InnerDiv>
    </MainDiv>
  );
};

export default OrderList;
