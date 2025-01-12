import {
  AntDesignOutlined,
  BellOutlined,
  ClockCircleOutlined,
  PicRightOutlined,
  StarOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { Typography, Input } from "antd";
import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftDiv = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;

const RightDiv = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
`;

const Divider = styled.div`
  height: 0.0625rem;
  align-self: stretch;
  background-color: rgba(28, 28, 28, 0.2);
`;

const OuterDiv = styled.div`
  display: flex;
  width: 100%;
`;

const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const { Search } = Input;

const Navbar = (props) => {
  const { handleThemeChange } = props;

  return (
    <OuterDiv>
      <InnerDiv>
        <MainDiv>
          <LeftDiv>
            <PicRightOutlined />
            <StarOutlined />
            <Typography.Text disabled>Dashboards</Typography.Text>/
            <Typography.Text>Default</Typography.Text>
          </LeftDiv>
          <RightDiv>
            <Search
              placeholder="Search"
              style={{
                width: 200,
              }}
            />
            <SunOutlined onClick={handleThemeChange} />
            <ClockCircleOutlined />
            <BellOutlined />
            <AntDesignOutlined />
          </RightDiv>
        </MainDiv>
        <Divider />
      </InnerDiv>
    </OuterDiv>
  );
};

export default Navbar;
