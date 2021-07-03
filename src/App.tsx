import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import PhoneCard from "./components/PhoneCard";

function App() {
  return (
    <Stack
      backgroundColor="lightGradishViolet"
      height="100vh"
      padding={6}
      textAlign="center"
      width="100%"
    >
      <Box>
        <h1>chat app</h1>
        <PhoneCard />
      </Box>
    </Stack>
  );
}

export default App;
