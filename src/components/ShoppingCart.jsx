import React from "react";
import { Box, Button, VStack, Text } from "@chakra-ui/react";
import { FaShoppingBasket } from "react-icons/fa";

const ShoppingCart = () => {
  // Cart state and items would go here

  return (
    <Box position="fixed" right="0" p="4" m="4" bg="white" width="sm" height="full" boxShadow="md">
      <VStack spacing="4">
        <Button leftIcon={<FaShoppingBasket />} colorScheme="teal" variant="outline">
          View Cart
        </Button>
        {/* Cart items would be listed here */}
        <Text>Your cart is empty</Text>
      </VStack>
    </Box>
  );
};

export default ShoppingCart;
