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
            height: 300,
            width: "100%",
            objectFit: "cover",
          }}
        />
      );
    }
  };

  console.log("card id");

  return (
    <Card
      variant="borderless"
      style={{ width: 500 }}
      loading={isLoading}
      cover={renderImage(isLoading ?? true)}
      actions={[
        <Popover content="Going">
          <CheckOutlined color="#00ff00" key="im-going-btn" />
        </Popover>,
        <Popover content="Not interested">
          <CloseOutlined color="red" key="not-going-btn" />
        </Popover>,
        <EllipsisOutlined key="more-options" />,
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
            <p style={{ margin: 0, color: "gray" }}>{timeInfo}</p>
          </div>
          {renderTag(isPublic)}
        </div>
      </div>
      <p style={{ color: "gray", marginTop: "5px" }}>{description}</p>
    </Card>
  );
};
