import React from "react";
import { Box, Text } from "@chakra-ui/react";

const BikesProducts = () => {
  return (
    <Box>
      <Text fontSize="2xl">Bike Products</Text>
      {/* List of bike products will be replaced with a new image */}
      <Image src="https://via.placeholder.com/150?text=Bikes" alt="Bikes" />
    </Box>
  );
};

export default BikesProducts;
