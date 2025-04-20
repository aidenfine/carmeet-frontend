import {
  Layout,
  Menu,
  Button,
  Avatar,
  Dropdown,
  MenuProps,
  Divider,
  Drawer,
  Typography,
} from "antd";
import {
  MenuOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "src/context/Auth";
import { HOST_NAV_ITEMS } from "./config/config";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { Title } = Typography;
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const isMobile = window.innerWidth < 768;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const userMenu: MenuProps["items"] = [
    {
      key: "profile",
      label: "Profile",
      icon: <UserOutlined />,
    },
    {
      key: "settings",
      label: "Settings",
      icon: <SettingOutlined />,
    },
    {
      key: "logout",
      label: "Logout",
      icon: <LogoutOutlined />,
      onClick: handleLogout,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Header
        style={{
          background: "#fff",
          padding: "0 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          overflowX: "hidden",
        }}
      >
        {isMobile ? (
          <>
            <Title level={3}>CarScene</Title>
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setDrawerVisible(true)}
              style={{
                fontSize: 18,
                color: "black",
                display: "inline-flex",
                position: "absolute",
                top: "20px",
                right: "20px",
              }}
            />
            <Drawer
              title="CarScene"
              placement="top"
              onClose={() => setDrawerVisible(false)}
              open={drawerVisible}
              width="100%"
              height="100%"
              style={{ padding: 0 }}
            >
              <Menu
                mode="inline"
                items={HOST_NAV_ITEMS}
                onClick={() => setDrawerVisible(false)}
              />
              <Divider />
              <Menu
                mode="vertical"
                items={userMenu}
                onClick={() => setDrawerVisible(false)}
              />
            </Drawer>
          </>
        ) : (
          <>
            <Menu
              mode="horizontal"
              items={HOST_NAV_ITEMS}
              style={{ flex: 1 }}
            />
            <Dropdown menu={{ items: userMenu }} placement="bottom">
              <Avatar
                style={{ cursor: "pointer", backgroundColor: "#d3d3d3" }}
                icon={<UserOutlined />}
              />
            </Dropdown>
          </>
        )}
      </Layout.Header>

      <Layout.Content
        style={{
          margin: "24px 16px",
          padding: 24,
          background: "#fff",
          borderRadius: "8px",
          overflow: "auto",
          flex: 1,
        }}
      >
        {children}
      </Layout.Content>
    </Layout>
  );
};
