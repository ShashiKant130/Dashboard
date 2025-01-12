import React from "react";
import styled from "styled-components";
import { Typography } from "antd";
import { Menu } from "antd";
import { PieChartOutlined } from "@ant-design/icons";

const TextIconDiv = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: lightgray;
  border-radius: 0.25rem;
`;

const TextDiv = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  color: ${(props) =>
    props.isDarkMode ? "rgba(255, 255, 255, 0.4)" : "rgba(28, 28, 28, 0.4)"};
`;

const AccordionSection = (props) => {
  const { title, sectionData, isDarkMode } = props;

  return (
    <div>
      <TextDiv isDarkMode={isDarkMode}>{title}</TextDiv>
      <div>
        {sectionData?.map((ele) => {
          return ele.isAccordion ? (
            <Menu items={ele?.items} mode="inline" />
          ) : (
            <TextIconDiv>
              <PieChartOutlined />
              <Typography.Text>{ele?.text}</Typography.Text>
            </TextIconDiv>
          );
        })}
      </div>
    </div>
  );
};

export default AccordionSection;
