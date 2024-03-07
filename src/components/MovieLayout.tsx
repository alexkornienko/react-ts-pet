import React from "react";
import { Layout, Menu } from "antd";

import { IMovieNavigation } from "../types/movieNavigation";

const MovieLayout: React.FC<{
  items: IMovieNavigation[];
  children: React.ReactNode;
}> = ({ items, children }) => {
  return (
    <Layout>
      <Layout.Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Layout.Header>
      <Layout.Content style={{ padding: "0 48px" }}>{children}</Layout.Content>

      {/* TODO: create footer */}
      <Layout.Footer style={{ textAlign: "center" }}>
        Место для футера
      </Layout.Footer>
    </Layout>
  );
};

export default MovieLayout;
