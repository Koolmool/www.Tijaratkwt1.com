import React from "react";
import { Box, Flex, Text, Button, useColorMode } from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";

const TopBar = () => {
  const { colorMode } = useColorMode();
  return (
    <Box width="100%" bg={colorMode === "dark" ? "gray.800" : "white"} px={4} py={2} boxShadow="md">
      <Flex justify="space-between" align="center">
        <Text fontSize="lg" fontWeight="bold">
          Tiجارت
        </Text>
        <Button colorScheme="teal">
          <FaUser />
        </Button>
      </Flex>
    </Box>
  );
};

export default TopBar;
