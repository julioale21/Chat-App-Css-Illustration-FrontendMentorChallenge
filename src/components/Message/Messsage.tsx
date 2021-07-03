import { Stack, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  message: string;
  position?: "left" | "right";
}
const Messsage: React.FC<Props> = ({ message, position = "left" }) => {
  const left = position === "left";

  return (
    <Stack direction="row" justifyContent={`${left ? "flex-start" : "flex-end"}`} width="100%">
      <Stack
        alignSelf={`${left ? "self-start" : "self-end"}`}
        backgroundColor={`${left ? "bgMessageViolet" : "white"}`}
        borderRadius={`${left ? "12px 12px 12px 6px" : "12px 12px 6px 12px"}`}
        data-aos="zoom-in"
        data-aos-duration="1000"
        maxWidth="65%"
        padding="0.55rem"
        paddingRight="1.4rem"
      >
        <Text
          color={`${left ? "textMessageViolet" : "gray.500"}`}
          fontSize="0.45rem"
          textAlign="justify"
        >
          {message}
        </Text>
      </Stack>
    </Stack>
  );
};

export default Messsage;
