import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({
  colors: {
    ...colors,
    background: "#000000", // Setting background color to black
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      // Setting default styles to use the new background color and improve responsiveness
      body: {
        bg: "background",
        padding: { base: "0", md: "4" },
      },
      html: {
        scrollBehavior: "smooth",
      },
    },
  },
});

const direction = localStorage.getItem("chakra-ui-direction") || "ltr";

const directionalTheme = extendTheme({
  ...theme,
  direction,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={directionalTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
