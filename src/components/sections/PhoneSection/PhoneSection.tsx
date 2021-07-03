import { Stack } from "@chakra-ui/react";
import React from "react";
import PhoneCard from "../../PhoneCard";

const PhoneSection: React.FC = () => {
  return (
    <Stack
      alignItems="center"
      direction="row"
      height={{ base: "85vh", md: "100vh" }}
      justifyContent={{ base: "center", md: "flex-end" }}
      paddingBottom={10}
      paddingRight={{ base: "0", md: "80px" }}
      width={{ base: "100%", md: "50%" }}
    >
      <PhoneCard />
    </Stack>
  );
};

export default PhoneSection;
