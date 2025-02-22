import {
  theme,
  Layout,
  Menu,
  Button,
  Avatar,
  Dropdown,
  MenuProps,
  Divider,
} from "antd";
import { Header, Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { ReactNode, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  WarningOutlined,
  QuestionOutlined,
} from "@ant-design/icons";

import placeholder from "../../assets/placeholder.svg";
import { useNavigate } from "react-router-dom";
import { HOST_NAV_ITEMS } from "./config/config";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  const handleSettings = () => {
    console.log("Settings clicked");
  };

  const items: MenuProps["items"] = [
    {
      key: "profile",
      label: "Profile",
      icon: <UserOutlined />,
    },
    {
      key: "settings",
      label: "Settings",
      icon: <SettingOutlined />,
      disabled: false,
    },
    {
      key: "logout",
      label: "Logout",
      icon: <LogoutOutlined />,
      disabled: false,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div style={{ marginTop: "12px" }} className="demo-logo-vertical">
          <img width={"200"} src={placeholder} />
        </div>
        <Divider />
        <Menu
          theme="light"
          mode="inline"
          style={{
            marginTop: "45px",
          }}
          defaultSelectedKeys={["home"]}
          items={HOST_NAV_ITEMS}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          <Divider />
          <Menu theme="light" mode="inline">
            <Menu.Item key="help" icon={<WarningOutlined />}>
              Report an issue
            </Menu.Item>
            <Menu.Item key="contact" icon={<QuestionOutlined />}>
              Support
            </Menu.Item>
          </Menu>
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: "0 16px",
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Dropdown menu={{ items }} placement="bottomRight" arrow>
            <Avatar
              style={{
                cursor: "pointer",
                backgroundColor: "#d3d3d3",
              }}
              icon={<UserOutlined />}
            />
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            flex: 1,
            overflow: "auto",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
