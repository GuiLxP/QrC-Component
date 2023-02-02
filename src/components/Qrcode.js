import React from "react";
import { useQRCode } from "next-qrcode";
import { Box, ThemeProvider } from "@material-ui/core";

export default function Qrcode() {
  const { SVG } = useQRCode();
  return (
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: "#FFFFFF",
            dark: "#ABCDEF",
          },
        },
      }}
    >
      <div>
        <Box
          className="box shadow-2xl justify-center items-center flex"
          sx={{
            width: 492,
            height: 920,
            borderRadius: 60,
            bgcolor: "primary.main",
            "&:hover": {
              opacity: [0.9, 0.8, 0.7],
              backgroundColor: "primary.dark",
            },
          }}
        >
          <div className="rounded-full">
            <SVG
              text={"https://google.com/"}
              options={{
                level: "high",
                margin: 10,
                scale: 4,
                width: 460,
                color: {
                  dark: "#FFFFFF",
                  light: "#4583e7",
                },
              }}
            />
          </div>
          <h1 className=""></h1>
        </Box>
      </div>
    </ThemeProvider>
  );
}
