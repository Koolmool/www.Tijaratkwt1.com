import React from "react";
import Loader from "../components/Loader";
import { Box, Text } from "@chakra-ui/react";

const BikesProducts = () => {
  return (
    <>
      <Loader />
      <Box>
        <Text fontSize="2xl">Bike Products</Text>
        {/* List of bike products will be replaced with a new image */}
        <Image src="YOUR_NEW_IMAGE_URL" alt="Bikes" />
      </Box>
    </>
  );
};

export default BikesProducts;
