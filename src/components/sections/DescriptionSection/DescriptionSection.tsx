import { Stack, Text } from "@chakra-ui/react";
import React from "react";

const DescriptionSection: React.FC = () => {
  return (
    <Stack width={{ base: "100%", md: "50%" }}>
      <Stack
        alignItems={{ base: "center", md: "flex-start" }}
        direction="column"
        height="100%"
        justifyContent="center"
        width={{ base: "100%", md: "75%" }}
      >
        <Text fontSize={{ base: "2rem", md: "2.2rem" }} fontWeight="500">
          Simple booking
        </Text>
        <Text
          color="darkGrayishViolet"
          lineHeight="1.6"
          textAlign={{ base: "center", md: "start" }}
        >
          Stay in touch with our dog walkers through the chat interface. This makes it easy to
          discuss arrangements and make bookings. Once the walk has been completed you can rate your
          walker and book again all through the chat.
        </Text>
      </Stack>
    </Stack>
  );
};

export default DescriptionSection;
