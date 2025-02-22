import {
  SettingOutlined,
  HomeOutlined,
  BellOutlined,
  EyeOutlined,
  PlusCircleOutlined,
  ToolOutlined,
} from "@ant-design/icons";

export const HOST_NAV_ITEMS = [
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
    key: "host-options",
    icon: <ToolOutlined />,
    label: "Host",
    children: [
      {
        key: "create-host",
        label: "Create Meet",
        icon: <PlusCircleOutlined />,
      },
      {
        key: "view-host",
        label: "View Meets",
        icon: <EyeOutlined />,
      },
      {
        key: "settings-host",
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
