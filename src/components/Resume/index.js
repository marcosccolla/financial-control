import React from "react";
import { Box, Card, BoxValue } from "./style";

export const Resume = (props) => {
  return (
    <Box>
      <Card>
        <h4>{props.title} </h4>
        <p>{props.icon} </p>
      </Card>
      <div>
        <BoxValue>{props.value} </BoxValue>
      </div>
    </Box>
  );
};
