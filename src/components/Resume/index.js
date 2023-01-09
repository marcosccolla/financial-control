import React from "react";
import { Box, Card, BoxValue } from "./style";

export const Resume = ({ title, icon, value }) => {
  return (
    <Box>
      <Card>
        <h4>{title} </h4>
        <p>{icon} </p>
      </Card>
      <div>
        <BoxValue>R${value} </BoxValue>
      </div>
    </Box>
  );
};
