import { Layout, Card } from "antd";
import { ReactNode } from "react";

const { Content } = Layout;

type LoginLayoutProps = {
  children: ReactNode;
};

export const RegisterLayout = ({ children }: LoginLayoutProps) => {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Content
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Card
          style={{
            width: 500,
            padding: 24,
            textAlign: "center",
            borderRadius: 12,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          {children}
        </Card>
      </Content>
    </Layout>
  );
};
