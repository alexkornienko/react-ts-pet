import React from "react";
import {
  Button,
  Col,
  Dropdown,
  Flex,
  Layout,
  Row,
  Space,
  Typography,
} from "antd";
import { useParams } from "react-router-dom";

import {
  EyeOutlined,
  MinusCircleOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";

import { useGetMoviePageQuery } from "../services/movieApi";
import InfoBlock from "./InfoBlock";

const items = [
  {
    key: "1",
    label: "Не интересно",
    icon: <MinusCircleOutlined />,
  },
  {
    key: "2",
    label: "Просмотрен",
    icon: <EyeOutlined />,
  },
];

const MoviePage = () => {
  const params = useParams<{ id: string }>();
  const { data } = useGetMoviePageQuery(params.id || "");

  return (
    <Layout.Content style={{ backgroundColor: "#fff", padding: "2rem 3rem" }}>
      <Row gutter={[40, 16]}>
        <Col span={6}>
          <Flex gap="middle" align="center">
            <img
              style={{ width: "100%" }}
              alt="example"
              src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
            />
          </Flex>
        </Col>

        <Col span={14}>
          <Flex gap="middle" vertical>
            <Typography.Title style={{ marginTop: "8px", fontWeight: 700 }}>
              {data?.original_title}
            </Typography.Title>
            <Space>
              <Button
                icon={<PlusSquareOutlined />}
                style={{ marginRight: "1rem" }}
              >
                Буду смотреть
              </Button>
              <Dropdown.Button menu={{ items, onClick: (e) => console.log(e) }}>
                Ещё
              </Dropdown.Button>
            </Space>
            <InfoBlock
              release_date={data?.release_date}
              production_countries={data?.production_countries}
              genres={data?.genres}
              tagline={data?.tagline}
              budget={data?.budget}
              revenue={data?.revenue}
              runtime={data?.runtime}
            />

            {data?.overview}
          </Flex>
        </Col>
        <Col span={4}>
          <Space direction="vertical">
            <Typography.Title
              style={{
                marginTop: "8px",
                fontWeight: 900,
                color:
                  data?.vote_average && data?.vote_average >= 7.1
                    ? "green"
                    : data?.vote_average && data?.vote_average >= 5.1
                    ? "orange"
                    : "red",
              }}
            >
              {data?.vote_average.toFixed(1)}
            </Typography.Title>
            {data?.overview}
          </Space>
        </Col>
      </Row>
    </Layout.Content>
  );
};

export default MoviePage;
