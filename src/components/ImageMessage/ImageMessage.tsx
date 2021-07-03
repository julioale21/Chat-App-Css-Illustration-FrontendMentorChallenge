import { Stack, Image } from "@chakra-ui/react";
import React from "react";

interface Props {
  images: string[];
  position?: "left" | "right";
}

const ImageMessage: React.FC<Props> = ({ images, position = "left" }) => {
  const left = position === "left";

  return (
    <Stack
      data-aos="zoom-in"
      data-aos-duration="1000"
      direction="row"
      justifyContent={`${left ? "flex-start" : "flex-end"}`}
      width="100%"
    >
      {images.map((item) => (
        <Image key={item} alt={item} borderRadius={10} src={item} width={10} />
      ))}
    </Stack>
  );
};

export default ImageMessage;
