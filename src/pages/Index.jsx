import React from "react";
import { Box, Button, Flex, Heading, Image, Stack, Text, useToast } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleAddToCart = () => {
    // Handle adding to cart logic here
    toast({
      title: "Product added to cart!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Flex width="full" align="center" justifyContent="center" padding={10}>
      <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden" padding={6}>
        <Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0fGVufDB8fHx8MTcwNjI1MTAxNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product Image" borderRadius="md" />

        <Box p={6}>
          <Stack spacing={2}>
            <Heading size="xl">Product Title</Heading>
            <Text fontWeight="bold" fontSize="2xl">
              $299.99
            </Text>
            <Text fontSize="md" color="gray.600">
              This is the product description. It will tell you all about the features and benefits of the product. It is a great product that will meet your needs and exceed your expectations.
            </Text>
          </Stack>
        </Box>

        <Button leftIcon={<FaShoppingCart />} colorScheme="teal" variant="solid" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Box>
    </Flex>
  );
};

export default Index;
