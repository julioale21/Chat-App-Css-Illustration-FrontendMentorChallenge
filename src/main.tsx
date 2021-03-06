import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const theme = extendTheme({
  colors: {
    leftToRightGradient: "linear-gradient(to right, hsl(264, 100%, 61%),hsl(293, 100%, 63%))",
    rightToLeftGradient: "linear-gradient(to left, hsl(264, 100%, 61%),hsl(293, 100%, 63%))",
    topToBottomGradient: "linear-gradient(to bottom, hsl(293, 100%, 63%), hsl(264, 100%, 61%))",
    topToBootomGrayGradient: "linear-gradient(to bottom, #f7f5fa, #f9f4fa)",
    white: "hsl(0, 0%, 100%)",
    lightMagenta: "hsl(293, 100%, 63%)",
    lightViolet: "hsl(264, 100%, 61%)",
    lightGradishViolet: "hsl(270, 20%, 96%)",
    darkGrayishViolet: "hsl(270, 7%, 64%)",
    veryDarkDesaturedViolet: "hsl(271, 36%, 24%)",
    veryLightMagenta: "hsl(289, 100%, 72%)",
    bgMessageViolet: "hsl(272, 41%, 93%)",
    textMessageViolet: "hsl(276, 55%, 52%)",
    textPink: "hsl(300, 100%, 84%)",
  },
  styles: {
    global: {
      body: {
        fontFamily: "'Rubik', sans-serif",
      },
    },
  },
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root"),
);
