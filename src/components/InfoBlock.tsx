import React from "react";
import { Space, Typography } from "antd";
import { format, getYear } from "date-fns";

import { Genre, ProductionCountry } from "../types/moviePage";
import { minutesToTime } from "../utils/minutesToTime";

interface InfoBlockProps {
  release_date?: string;
  production_countries?: ProductionCountry[];
  genres?: Genre[];
  tagline?: string;
  budget?: number;
  revenue?: number;
  runtime?: number;
}

const InfoItem = ({
  title,
  data,
}: {
  title: string;
  data: string | number | undefined;
}) => (
  <Space>
    <Typography.Paragraph
      style={{ opacity: "0.6", marginRight: "2rem", width: "120px" }}
    >
      {title}
    </Typography.Paragraph>
    <Typography.Paragraph>{data}</Typography.Paragraph>
  </Space>
);

const InfoBlock = ({
  release_date,
  production_countries,
  genres,
  tagline,
  budget,
  revenue,
  runtime,
}: InfoBlockProps) => {
  return (
    <Space direction="vertical">
      <Typography.Title level={2} style={{ marginTop: "8px", fontWeight: 700 }}>
        О фильме
      </Typography.Title>
      <InfoItem
        title="Год производства"
        data={release_date && getYear(new Date(release_date))}
      />
      <InfoItem
        title="Страна"
        data={production_countries?.map((country) => country.name).join(", ")}
      />
      <InfoItem
        title="Жанр"
        data={genres?.map((genry) => genry.name).join(", ")}
      />
      <InfoItem title="Слоган" data={tagline} />
      <InfoItem title="Бюджет" data={budget} />
      <InfoItem title="Сборы" data={revenue} />
      <InfoItem
        title="Премьера в мире"
        data={release_date && format(new Date(release_date), "dd.MM.yyyy")}
      />
      <InfoItem
        title="Время"
        data={runtime && `${runtime} / ${minutesToTime(runtime)}`}
      />
    </Space>
  );
};

export default InfoBlock;
