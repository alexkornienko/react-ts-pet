import React, { ReactNode } from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";

import {
  DesktopOutlined,
  HomeOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import SearchPanel from "./SearchPanel";

interface IMovieNavigation {
  label: string;
  key: string;
  disabled?: boolean;
  icon?: ReactNode;
}

export const itemsNavigate: IMovieNavigation[] = [
  {
    label: "Главная",
    key: "/",
    disabled: false,
    icon: <HomeOutlined />,
  },
  {
    label: "Фильмы",
    key: "/movies",
    disabled: false,
    icon: <VideoCameraOutlined />,
  },
  {
    label: "Сериалы",
    key: "/serials",
    disabled: false,
    icon: <DesktopOutlined />,
  },
  {
    label: "Профиль",
    key: "/profile",
    disabled: false,
    icon: <UserOutlined />,
  },
];

const MovieLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const navigate = useNavigate();

  const handleChangeMenuItem: MenuProps["onClick"] = ({ key }) => navigate(key);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Header
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <SearchPanel />
        <Menu
          onClick={handleChangeMenuItem}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={itemsNavigate}
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
