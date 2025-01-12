import React from "react";
import styled from "styled-components";
import InfoPanel from "./InfoPanel";
import {
  activitiesPanelData,
  contactsPanelData,
  notificationsPanelData,
} from "../../constants";

const MainDiv = styled.div`
  width: 21vw;
  ${(props) => props.isDarkMode && `background-color: black`};
  ${(props) => props.isDarkMode && `color: white`}
`;

const RightSideBar = (props) => {
  const { isDarkMode } = props;

  return (
    <MainDiv isDarkMode={isDarkMode}>
      <InfoPanel
        title={"Notifications"}
        data={notificationsPanelData}
        isDarkMode={isDarkMode}
      />
      <InfoPanel
        title={"Activities"}
        data={activitiesPanelData}
        isDarkMode={isDarkMode}
      />
      <InfoPanel
        title={"Contacts"}
        data={contactsPanelData}
        isDarkMode={isDarkMode}
      />
    </MainDiv>
  );
};

export default RightSideBar;
