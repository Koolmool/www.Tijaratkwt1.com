import React from "react";
import Loader from "../components/Loader";
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
    <>
      <Loader />
      <Flex direction={{ base: "column", md: "row" }} width="full" align="center" justifyContent="space-evenly" padding={10}>
        <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden" padding={6}>
          <Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0fGVufDB8fHx8MTcwNjI1MTAxNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product Image" borderRadius="md" />
          <Box p={6}>
            <Stack spacing={2}>
              <Heading size="xl">BIKES</Heading>
              <Text fontWeight="bold" fontSize="2xl">
                $199.99
              </Text>
              <Button colorScheme="blue" onClick={() => (window.location.href = "/products")}>
                View Products
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden" padding={6}>
          <Image src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0fGVufDB8fHx8MTcwNjI1MTAxNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Product Image" borderRadius="md" />

          <Box p={6}>
            <Stack spacing={2}>
              <Heading size="xl">CARS</Heading>
              <Text fontWeight="bold" fontSize="2xl">
                $299.99
              </Text>
              <Button colorScheme="blue" onClick={() => (window.location.href = "/products")}>
                View Products
              </Button>
            </Stack>
          </Box>
        </Box>
        <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden" padding={6}>
          <Heading size="xl">Item 3</Heading>
          <Text fontWeight="bold" fontSize="2xl">
            $99.99
          </Text>
          <Button colorScheme="blue" onClick={() => (window.location.href = "/products")}>
            View Item 3
          </Button>
        </Box>
        <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden" padding={6}>
          <Heading size="xl">Item 4</Heading>
          <Text fontWeight="bold" fontSize="2xl">
            $99.99
          </Text>
          <Button colorScheme="blue" onClick={() => (window.location.href = "/products")}>
            View Item 4
          </Button>
        </Box>
        <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden" padding={6}>
          <Heading size="xl">Item 5</Heading>
          <Text fontWeight="bold" fontSize="2xl">
            $99.99
          </Text>
          <Button colorScheme="blue" onClick={() => (window.location.href = "/products")}>
            View Item 5
          </Button>
        </Box>
        <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden" padding={6}>
          <Heading size="xl">Item 6</Heading>
          <Text fontWeight="bold" fontSize="2xl">
            $99.99
          </Text>
          <Button colorScheme="blue" onClick={() => (window.location.href = "/products")}>
            View Item 6
          </Button>
        </Box>
        <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden" padding={6}>
          <Heading size="xl">Item 7</Heading>
          <Text fontWeight="bold" fontSize="2xl">
            $99.99
          </Text>
          <Button colorScheme="blue" onClick={() => (window.location.href = "/products")}>
            View Item 7
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Index;
