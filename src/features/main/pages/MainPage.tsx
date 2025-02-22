import { Row, Col } from "antd";
import { MeetCard } from "../components/MeetCard";

const meets = [
  {
    title: "GT2RS meet",
    username: "username",
    description: "Welcome to the Porsche-only car meet",
    isPublic: false,
    isLoading: false,
    timeInfo: "02/22/25, 9:00pm - 11:00pm",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/Porsche_991_GT2_RS_%2841654760692%29.jpg",
  },
  {
    title: "Mustang meet up",
    username: "username",
    description: "mustang meet",
    isPublic: true,
    isLoading: false,
    timeInfo: "02/22/25, 9:00pm - 11:00pm",
    cover:
      "https://hips.hearstapps.com/hmg-prod/images/2024-ford-mustang-gt-111-64e661d67a26a.jpg?crop=0.731xw:0.548xh;0,0.353xh&resize=1200:*",
  },
  // {
  //   title: "GT2RS meet",
  //   username: "username",
  //   description: "Welcome to the Porsche-only car meet",
  //   isLoading: true,
  //   isPublic: false,
  //   timeInfo: "02/22/25, 9:00pm - 11:00pm",
  // },
];

export const MainPage = () => {
  return (
    <Row gutter={[16, 16]} justify="center">
      {meets.map((meet, index) => (
        <Col key={index} xs={24} sm={24} md={12} lg={8} xl={8}>
          <MeetCard {...meet} />
        </Col>
      ))}
    </Row>
  );
};
