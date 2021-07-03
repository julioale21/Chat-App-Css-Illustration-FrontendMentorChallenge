import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import avatar from "../../assets/avatar.jpg";
import ImageMessage from "../ImageMessage";
import Messsage from "../Message";
import img1 from "../../assets/dog-image-1.jpg";
import img2 from "../../assets/dog-image-2.jpg";
import img3 from "../../assets/dog-image-3.jpg";
import "./index.css";
import AdvertisingMessage from "../AdvertisingMessage";
import InputMessage from "../InputMessage";

const PhoneCard: React.FC = () => {
  return (
    <Stack
      alignItems="center"
      backgroundColor="white"
      border="1px"
      borderColor="gray.200"
      borderRadius={32}
      height={507}
      minWidth={250}
      shadow="md"
      width={250}
    >
      <Stack
        backgroundColor="white"
        borderRadius={16}
        height="28px"
        top={0}
        width="138px"
        zIndex={1}
      ></Stack>
      <Stack
        alignItems="center"
        backgroundColor="#f1f2f5"
        borderRadius="20px"
        direction="column"
        height="462"
        marginY={5}
        minWidth="230px"
        paddingX={3}
        width="230px"
      >
        <Stack
          background="leftToRightGradient"
          borderRadius="20px 20px 7px 7px"
          className="top-card"
          direction="row"
          height="64px"
          marginTop={-6}
          paddingTop={2}
          paddingX={2}
          spacing={0}
          width="230px"
          zIndex={0}
        >
          <img
            alt="arrow"
            src="https://icongr.am/fontawesome/angle-left.svg?size=20&color=ffffff"
          />
          <Stack justifyContent="center" marginX={0} paddingX={0}>
            <img alt="avatar" className="avatar" height={35} src={avatar} width={35} />
          </Stack>
          <Stack direction="row" justifyContent="space-between" width="100%">
            <Stack direction="column" justifyContent="center" paddingX={2} spacing={0}>
              <Text color="gray.200" fontSize={12}>
                Samuel Green
              </Text>
              <Text color="gray.200" fontSize={9} opacity="50%">
                Available to Walk
              </Text>
            </Stack>
            <Stack direction="column" float="right" justifyContent="center">
              <img alt="" src="https://icongr.am/fontawesome/ellipsis-v.svg?size=10&color=ffffff" />
            </Stack>
          </Stack>
        </Stack>

        <Messsage message="That sounds great. I'd be happy with that" />
        <Messsage message="Could you send over some pictures of your dog. please?" />
        <ImageMessage images={[img1, img2, img3]} position="right" />
        <Messsage message="Here are a few pictures. She's a happy girl!" position="right" />
        <Messsage message="Can you make it?" position="right" />
        <Messsage message="She looks so happy! The time we discussed works. How long shall I take her out for?" />
        <AdvertisingMessage message="30 minute walk" quantity={25} />
        <AdvertisingMessage message="1 hour walk" quantity={49} />

        <InputMessage />
      </Stack>
    </Stack>
  );
};

export default PhoneCard;
