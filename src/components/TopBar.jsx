import React from "react";
import { Box, Flex, Text, Input, useColorMode, Button } from "@chakra-ui/react";
import SideMenu from "./SideMenu";

const TopBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [language, setLanguage] = React.useState("en");
  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ar" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("chakra-ui-direction", newLanguage === "en" ? "ltr" : "rtl");
    window.location.reload(); // Reload to apply language direction changes
  };

  return (
    <Box width="100%" bg={colorMode === "dark" ? "gray.800" : "white"} px={{ base: 2, md: 4 }} py={2} boxShadow="md">
      <Flex justify="space-between" align="center">
        <Text fontSize="lg" fontWeight="bold">
          {language === "en" ? "Tiجارت" : "تجارت"} // Example of text that would need to be translated
        </Text>
        <Input placeholder={language === "en" ? "Search products..." : "...بحث عن المنتجات"} width={{ base: "100px", sm: "200px", md: "300px" }} mr={4} />
        <Button onClick={toggleLanguage}>{language === "en" ? "عربي" : "English"}</Button>
        <SideMenu />
      </Flex>
    </Box>
  );
};
// Removed duplicate TopBar component declaration

export default TopBar;
