import { Avatar, Card, Image, Popover, Tag } from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";

type MeetCardProps = {
  isLoading?: boolean;
  title: string;
  username: string;
  description: string;
  avatar?: string;
  isPublic: boolean;
  timeInfo: string;
  cover?: string;
};

export const MeetCard = ({
  title,
  description,
  isLoading,
  isPublic,
  timeInfo,
  cover,
}: MeetCardProps) => {
  const renderTag = (isPublic: boolean) => {
    if (isPublic) {
      return <Tag color="success">Public</Tag>;
    } else {
      return <Tag color="default">Private</Tag>;
    }
  };

  const renderImage = (isLoading: boolean) => {
    if (isLoading) {
      return null;
    } else {
      return (
        <Image
          alt="cover"
          src={cover}
          style={{
            height: 220,
            width: "100%",
            objectFit: "cover",
          }}
        />
      );
    }
  };

  return (
    <Card
      variant="borderless"
      style={{
        width: "100%",
        height: "100%",
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
        borderRadius: "8px",
        overflow: "hidden",
      }}
      loading={isLoading}
      cover={renderImage(isLoading ?? true)}
      actions={[
        <Popover content="Going" key="going">
          <CheckOutlined />
        </Popover>,
        <Popover content="Not interested" key="not-going">
          <CloseOutlined />
        </Popover>,
        <EllipsisOutlined key="more" />,
      ]}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3 style={{ margin: 0 }}>{title}</h3>
            <p style={{ margin: 0, color: "gray", fontSize: "0.85rem" }}>
              {timeInfo}
            </p>
          </div>
          {renderTag(isPublic)}
        </div>
      </div>
      <p style={{ color: "gray", marginTop: "12px", lineHeight: "1.5" }}>
        {description}
      </p>
    </Card>
  );
};
