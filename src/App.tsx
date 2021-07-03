import React from "react";
import { Stack, Text, Link } from "@chakra-ui/react";
import BackgroundImageLeft from "./components/BackgroundImageLeft";
import PhoneSection from "./components/sections/PhoneSection";
import DescriptionSection from "./components/sections/DescriptionSection";
import BackgroundImageRight from "./components/BackgroundImageRight";

function App() {
  return (
    <Stack
      backgroundColor="white"
      overflow="hidden"
      padding={6}
      position="relative"
      textAlign="center"
      width="100%"
    >
      <BackgroundImageLeft />
      <BackgroundImageRight />
      <Stack direction="column">
        <Stack direction={{ base: "column", md: "row" }} zIndex={1}>
          <PhoneSection />
          <DescriptionSection />
        </Stack>
        <Stack paddingTop={{ base: "50px", lg: "0px" }} spacing={0} zIndex={1}>
          <Text fontSize="0.7rem" fontWeight="bold">
            Frontend Mentor Challenge.
          </Text>
          <Text fontSize="0.6rem">
            Solved by{" "}
            <Link isExternal href="https://github.com/julioale21">
              @julioale21
            </Link>
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;
