import LeftSideBar from "./Components/LeftSideBar/LeftSideBar";
import styled from "styled-components";
import RightSideBar from "./Components/RightSideBar/RightSideBar";
import MainSection from "./Components/MainSection/MainSection";
import OrderList from "./Components/OrderList/OrderList";
import { useState } from "react";
import { ConfigProvider, Layout } from "antd";

const LeftBarAndNavbarDiv = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  width: 100%;
`;

const VerticalDivider = styled.div`
  width: 0.0625rem;
  height: 100%;
  align-self: stretch;
  background-color: rgba(28, 28, 28, 0.2);
`;

const { Content } = Layout;

function App() {
  const [activeSection, setActiveSection] = useState("main");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  const handleOrderListClick = (navigateTo) => {
    setActiveSection(navigateTo);
  };

  // Define the theme settings for Ant Design
  const theme = isDarkMode
    ? {
        token: {
          colorPrimary: "#1890ff",
          colorBgBase: "#141414", // Dark background
          colorTextBase: "#ffffff", // White text
          colorLink: "#1890ff",
        },
      }
    : {
        token: {
          colorPrimary: "#1890ff",
          colorBgBase: "#ffffff", // Light background
          colorTextBase: "#000000", // Black text
          colorLink: "#1890ff",
        },
      };

  return (
    <ConfigProvider theme={theme}>
      <Content
        style={{
          background: isDarkMode ? "#000" : "#fff",
          color: isDarkMode ? "#fff" : "#000",
        }}
      >
        <LeftBarAndNavbarDiv>
          <LeftSideBar
            onOrderListClick={handleOrderListClick}
            isDarkMode={isDarkMode}
          />
          <MiddleSection>
            <VerticalDivider />
            {activeSection === "main" ? (
              <>
                <MainSection
                  handleThemeChange={handleThemeChange}
                  isDarkMode={isDarkMode}
                />
                <VerticalDivider />
              </>
            ) : (
              <OrderList
                handleThemeChange={handleThemeChange}
                isDarkMode={isDarkMode}
              />
            )}
          </MiddleSection>
          {activeSection === "main" && (
            <div>
              <RightSideBar isDarkMode={isDarkMode} />
            </div>
          )}
        </LeftBarAndNavbarDiv>
      </Content>
    </ConfigProvider>
  );
}

export default App;
