import React from "react";
import { Box, Flex, Text, Input, useColorMode } from "@chakra-ui/react";
import SideMenu from "./SideMenu";

const TopBar = () => {
  const { colorMode } = useColorMode();
  return (
    <Box width="100%" bg={colorMode === "dark" ? "gray.800" : "white"} px={{ base: 2, md: 4 }} py={2} boxShadow="md">
      <Flex justify="space-between" align="center">
        <Text fontSize="lg" fontWeight="bold">
          Tiجارت
        </Text>
        <Input placeholder="Search products..." width={{ base: "100px", sm: "200px", md: "300px" }} mr={4} />
        <SideMenu />
      </Flex>
    </Box>
  );
};

export default TopBar;
