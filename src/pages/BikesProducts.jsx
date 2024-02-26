import React from "react";
import Loader from "../components/Loader";
import { Box, Text } from "@chakra-ui/react";

const BikesProducts = () => {
  return (
    <>
      <Loader />
      <Box>
        <Text fontSize="2xl">Bike Products</Text>
        {/* Image of bike products */}
        <Image src="https://newimageurl.com/bike-image" alt="Bikes" />
      </Box>
    </>
  );
};

export default BikesProducts;
