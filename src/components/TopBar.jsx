import React from "react";
import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import SideMenu from "./SideMenu";

const TopBar = () => {
  const { colorMode } = useColorMode();
  return (
    <Box width="100%" bg={colorMode === "dark" ? "gray.800" : "white"} px={{ base: 2, md: 4 }} py={2} boxShadow="md">
      <Flex justify="space-between" align="center">
        <Text fontSize="lg" fontWeight="bold">
          Tiجارت
        </Text>
        <SideMenu />
      </Flex>
    </Box>
  );
};

export default TopBar;
