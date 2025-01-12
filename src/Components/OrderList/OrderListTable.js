import { CalendarOutlined, UserOutlined } from "@ant-design/icons";
import { Checkbox, Pagination } from "antd";
import React from "react";
import styled from "styled-components";
import { orderListData } from "../../constants";

const MainDiv = styled.div`
  padding: 1.5rem 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 0.625rem;
  border-bottom: 0.0625rem solid rgba(28, 28, 28, 0.05);
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
  color: ${(props) =>
    props.isDarkMode ? "rgba(255, 255, 255, 0.4)" : "rgba(28, 28, 28, 0.4)"};
`;

const Td = styled.td`
  padding: 0.625rem;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
  border-bottom: 0.0625rem solid rgba(28, 28, 28, 0.05);
`;

const PaginationDiv = styled.div`
  padding: 1rem 0;
`;

const Status = styled.td`
  text-align: center;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.125rem;
  border-bottom: 0.0625rem solid rgba(28, 28, 28, 0.05);
  color: ${(props) => {
    switch (props.status) {
      case "In Progress":
        return "#8A8CD9";
      case "Complete":
        return "#4AA785";
      case "Pending":
        return "#59A8D4";
      case "Approved":
        return "#FFC555";
      case "Rejected":
        return "rgba(28, 28, 28, 0.4)";
      default:
        return "";
    }
  }};
`;

const OrderListTable = (props) => {
  const { isDarkMode } = props;
  return (
    <MainDiv>
      <Table>
        <thead>
          <tr>
            <Th>
              <Checkbox />
            </Th>
            <Th isDarkMode={isDarkMode}>Order ID</Th>
            <Th isDarkMode={isDarkMode}>User</Th>
            <Th isDarkMode={isDarkMode}>Project</Th>
            <Th isDarkMode={isDarkMode}>Address</Th>
            <Th isDarkMode={isDarkMode}>Date</Th>
            <Th isDarkMode={isDarkMode}>Status</Th>
          </tr>
        </thead>
        <tbody>
          {orderListData?.map((row, index) => (
            <tr key={index}>
              <Td>
                {row?.isCheckboxEnabled ? (
                  <Checkbox checked={row?.isChecked} />
                ) : (
                  <></>
                )}
              </Td>
              <Td>{row?.id}</Td>
              <Td>
                <UserOutlined /> {row?.user}
              </Td>
              <Td>{row?.project}</Td>
              <Td>{row?.address}</Td>
              <Td>
                <CalendarOutlined /> {row?.date}
              </Td>
              <Status status={row?.status}>
                <li>{row?.status}</li>
              </Status>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginationDiv>
        <Pagination defaultCurrent={1} total={50} align="end" />
      </PaginationDiv>
    </MainDiv>
  );
};

export default OrderListTable;
