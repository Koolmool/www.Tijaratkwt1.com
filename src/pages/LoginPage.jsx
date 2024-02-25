import React from "react";
import Loader from "../components/Loader";
import { Box, Heading } from "@chakra-ui/react";

const LoginPage = () => {
  return (
    <>
      <Loader />
      <Box padding={10}>
        <Heading>Login Page</Heading>
        {/* Login form will go here */}
      </Box>
    </>
  );
};

export default LoginPage;
