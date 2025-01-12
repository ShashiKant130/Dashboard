import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  padding: 1.5rem;
`;

const InfoPanelTitleDiv = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
`;

const TitleDiv = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${(props) =>
    props.isDarkMode ? "rgba(255, 255, 255, 1)" : "rgba(28, 28, 28, 1)"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 10rem;
`;

const DescriptionDiv = styled.div`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  color: ${(props) =>
    props.isDarkMode ? "rgba(255, 255, 255, 0.4)" : "rgba(28, 28, 28, 0.4)"};
`;

const ContentDiv = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.5rem 0;
  align-items: flex-start;
`;

const InfoPanel = (props) => {
  const { title, data, isDarkMode } = props;

  return (
    <MainDiv>
      <InfoPanelTitleDiv>{title}</InfoPanelTitleDiv>
      {data?.map((ele, index) => {
        return (
          <ContentDiv key={title + "_" + index}>
            <div>{ele?.src}</div>
            <div>
              <TitleDiv isDarkMode={isDarkMode}>{ele?.title}</TitleDiv>
              {ele?.description && (
                <DescriptionDiv isDarkMode={isDarkMode}>
                  {ele?.description}
                </DescriptionDiv>
              )}
            </div>
          </ContentDiv>
        );
      })}
    </MainDiv>
  );
};

export default InfoPanel;
