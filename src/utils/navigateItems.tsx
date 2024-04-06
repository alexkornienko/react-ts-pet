import {
  DesktopOutlined,
  HomeOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

import { IMovieNavigation } from "../types/movieNavigation";

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
