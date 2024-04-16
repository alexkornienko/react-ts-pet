import React from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";

import { IMovieNavigation } from "../types/movieNavigation";

const MovieLayout: React.FC<{
  items: IMovieNavigation[];
  children: React.ReactNode;
}> = ({ items, children }) => {
  const navigate = useNavigate();

  const handleChangeMenuItem: MenuProps["onClick"] = ({ key }) => navigate(key);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Header
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Menu
          onClick={handleChangeMenuItem}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ minWidth: 0 }}
        />
      </Layout.Header>
      <Layout.Content style={{ padding: "0 7rem" }}>{children}</Layout.Content>

      {/* TODO: create footer */}
      <Layout.Footer style={{ textAlign: "center" }}>
        Место для футера
      </Layout.Footer>
    </Layout>
  );
};

export default MovieLayout;
