import React from "react";
import { Stack } from "@chakra-ui/react";
import BackgroundImageLeft from "./components/BackgroundImageLeft";
import PhoneSection from "./components/sections/PhoneSection";
import DescriptionSection from "./components/sections/DescriptionSection";

function App() {
  return (
    <Stack
      backgroundColor="lightGradishViolet"
      height="100%"
      minHeight="100vh"
      padding={6}
      textAlign="center"
      width="100%"
    >
      <BackgroundImageLeft />
      <Stack direction={{ base: "column", md: "row" }} zIndex={1}>
        <PhoneSection />
        <DescriptionSection />
      </Stack>
    </Stack>
  );
}

export default App;
