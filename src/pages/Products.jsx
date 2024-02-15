import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Button colorScheme="teal" onClick={() => navigate("/")}>
        Return to Index
      </Button>
      <Text>Product Listing will be shown here.</Text>
    </Box>
  );
};

export default Products;
