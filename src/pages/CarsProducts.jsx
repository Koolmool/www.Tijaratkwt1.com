import React from "react";
import Loader from "../components/Loader";
import { Box, Text } from "@chakra-ui/react";

const CarsProducts = () => {
  return (
    <>
      <Loader />
      <Box>
        <Text fontSize="2xl">Car Products</Text>
        {/* List of car products goes here */}
      </Box>
    </>
  );
};

export default CarsProducts;
