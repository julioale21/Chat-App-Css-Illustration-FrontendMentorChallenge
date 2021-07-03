import { Stack } from "@chakra-ui/react";
import React from "react";

const BackgroundImageRight: React.FC = () => {
  return (
    <Stack
      background="topToBootomGrayGradient"
      borderRadius="270px 270px 0 0"
      bottom={0}
      height={{ base: "70%", lg: "85%" }}
      maxWidth={{ base: "400px", lg: "540px" }}
      position="absolute"
      right={0}
      transform={{ base: "translate(50%, 30%)", lg: "translateX(32%)" }}
      width="100%"
      zIndex={0}
    />
  );
};

export default BackgroundImageRight;
