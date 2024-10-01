import React from "react";
import { Flex, Space, Typography } from "antd";
import NowAtCinema from "./NowAtCinema";

const HomePage = () => {
  return (
    // <Flex vertical>
    <>
      <Typography.Title>Home Page</Typography.Title>
      <NowAtCinema />
    </>
    // </Flex>
  );
};

export default HomePage;
