import React from "react";
import styled from "styled-components";
import { Avatar, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import AccordionSection from "./AccordionSection";
import { dashboardSidebarData, pagesSidebarData } from "../../constants";

const MainDiv = styled.div`
  width: 15vw;
  padding: 0.75rem 1.5rem;
`;

const SecondDiv = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
`;

const ProfileDiv = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 0.75rem;
`;

const TextDiv = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: ${(props) => props.clr};
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0 0 1rem 1rem;
  > li {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.25rem;
    cursor: pointer;
  }
  > li::marker {
    color: rgba(28, 28, 28, 0.4);
  }
`;

const LeftSideBar = (props) => {
  const { onOrderListClick, isDarkMode } = props;

  return (
    <MainDiv>
      <ProfileDiv>
        <Avatar size="small" icon={<UserOutlined />} />
        <Typography.Text>Shashi Kant</Typography.Text>
      </ProfileDiv>

      <SecondDiv>
        <TextDiv clr={"rgba(28, 28, 28, 0.4)"}>Favorites</TextDiv>
        <TextDiv clr={"rgba(28, 28, 28, 0.2)"}>Recently</TextDiv>
      </SecondDiv>

      <Ul>
        <li onClick={() => onOrderListClick("main")}>Dashboard</li>
        <li onClick={() => onOrderListClick("order")}>OrderList</li>
      </Ul>

      <div>
        <AccordionSection
          isDarkMode={isDarkMode}
          title={"Dashboard"}
          sectionData={dashboardSidebarData}
        />
      </div>

      <div>
        <AccordionSection
          isDarkMode={isDarkMode}
          title={"Pages"}
          sectionData={pagesSidebarData}
        />
      </div>
    </MainDiv>
  );
};

export default LeftSideBar;
