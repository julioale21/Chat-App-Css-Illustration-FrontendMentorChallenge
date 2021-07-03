import { Stack, Box, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  quantity: Number;
  message: String;
}
const AdvertisingMessage: React.FC<Props> = ({ quantity, message }) => {
  return (
    <Stack direction="row" justifyContent="flex-start" width="100%">
      <Stack
        alignItems="center"
        background="rightToLeftGradient"
        borderRadius="12px 12px 12px 6px"
        direction="row"
        justifyContent="space-between"
        padding="0.35rem"
        paddingX={3}
        width="75%"
      >
        <Box border="1px" borderColor="veryLightMagenta" borderRadius="full" height={4} width={4} />
        <Text color="textPink" fontSize="0.5rem">
          {message}
        </Text>
        <Text color="white" fontWeight="bold">
          ${quantity}
        </Text>
      </Stack>
    </Stack>
  );
};

export default AdvertisingMessage;
