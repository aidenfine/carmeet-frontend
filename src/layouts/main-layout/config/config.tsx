import {
  SettingOutlined,
  HomeOutlined,
  BellOutlined,
  EyeOutlined,
  PlusCircleOutlined,
  ToolOutlined,
} from "@ant-design/icons";
import { CREATE_MEET_ROUTE, HOME_ROUTE } from "src/routes/config";

export const HOST_NAV_ITEMS = [
  {
    key: `/${HOME_ROUTE}`,
    icon: <HomeOutlined />,
    label: "Home",
  },
  {
    key: "/notifications",
    icon: <BellOutlined />,
    label: "Notifications",
  },
  {
    key: "host-options",
    icon: <ToolOutlined />,
    label: "Host",
    children: [
      {
        key: `/${HOME_ROUTE}/${CREATE_MEET_ROUTE}`,
        label: "Create Meet",
        icon: <PlusCircleOutlined />,
      },
      {
        key: `/${HOME_ROUTE}/view-host`,
        label: "View Meets",
        icon: <EyeOutlined />,
      },
      {
        key: `/${HOME_ROUTE}/settings-host`,
        label: "Host Settings",
        icon: <SettingOutlined />,
      },
    ],
  },
];

export const REGULAR_USER_NAV_ITEMS = [
  {
    key: "home",
    icon: <HomeOutlined />,
    label: "Home",
  },
  {
    key: "notifications",
    icon: <BellOutlined />,
    label: "Notifications",
  },
  {
    key: "become-a-host",
    icon: <ToolOutlined />,
    label: "Become a host",
  },
];
