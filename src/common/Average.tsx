import React from "react";
import { Typography } from "antd";

const Average = ({
  average,
  sizeSmall,
}: {
  average: number | undefined;
  sizeSmall?: boolean;
}) => {
  return (
    <div style={{ position: "relative" }}>
      {sizeSmall && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "4px",
            zIndex: 1,
          }}
        />
      )}
      <Typography.Title
        style={{
          marginTop: "8px",
          fontWeight: sizeSmall ? 500 : 900,
          fontSize: sizeSmall ? "2rem" : "",
          color:
            average && average >= 7.1
              ? "green"
              : average && average >= 5.1
              ? "orange"
              : "red",
          position: "relative",
          zIndex: 2,
          padding: "6px",
          boxShadow: sizeSmall ? "0px 2px 4px rgba(0, 0, 0, 0.3)" : "",
          textShadow: sizeSmall ? "2px 2px 6px rgba(0, 0, 0, 0.4)" : "",
        }}
      >
        {average?.toFixed(1)}
      </Typography.Title>
    </div>
  );
};

export default Average;
