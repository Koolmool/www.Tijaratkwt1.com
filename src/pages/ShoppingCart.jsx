import React from "react";
import Loader from "../components/Loader";
import { Box, Text } from "@chakra-ui/react";

const ShoppingCart = () => {
  return (
    <>
      <Loader />
      <Box px={{ base: 4, md: 8 }} py={{ base: 6, md: 10 }}>
        <Text>Shopping Cart will be shown here.</Text>
      </Box>
    </>
  );
};

export default ShoppingCart;
