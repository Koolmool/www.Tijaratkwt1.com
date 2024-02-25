import React from "react";
import { Box } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Box
      className="loader"
      sx={{
        width: "120px",
        height: "20px",
        background: `radial-gradient(circle closest-side,#f03355 94%,#0000) 50% 50%/calc(50% + 10px) 70% repeat-x #ccc`,
        animation: "l9 1s infinite cubic-bezier(0.3,1,0,1)",
        "@keyframes l9": {
          "100%": { backgroundPosition: "calc(200% - 5px)" },
        },
      }}
    />
  );
};

export default Loader;
