import { Stack, Text, Image } from "@chakra-ui/react";
import React from "react";

const InputMessage: React.FC = () => {
  return (
    <Stack
      alignItems="center"
      backgroundColor="white"
      borderRadius="25px"
      direction="row"
      justifyContent="space-between"
      padding={1}
      paddingLeft={5}
      width="100%"
    >
      <Text color="gray.300" fontSize="0.6rem">
        Type a message...
      </Text>
      <Stack backgroundColor="veryDarkDesaturedViolet" borderRadius="full" width="30px">
        <Stack padding={2}>
          <Image src="https://icongr.am/fontawesome/chevron-right.svg?size=1&color=ffffff" />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default InputMessage;
