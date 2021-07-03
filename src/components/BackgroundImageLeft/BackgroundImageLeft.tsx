import { Stack } from "@chakra-ui/react";
import React from "react";

const BackgroundImageLeft: React.FC = () => {
  return (
    <Stack
      background="topToBottomGradient"
      borderRadius="0 0 270px 270px"
      height={{ base: "70%", lg: "125%" }}
      left={0}
      maxWidth={{ base: "400px", lg: "540px" }}
      position="absolute"
      top={0}
      transform={{ base: "translate(-50%, -30%)", lg: "translate(-18%, -39%)" }}
      width="100%"
      zIndex={0}
    />
  );
};

export default BackgroundImageLeft;
