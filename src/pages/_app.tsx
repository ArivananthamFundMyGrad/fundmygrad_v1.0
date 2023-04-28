import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  components: {
   Drawer:{
    parts: ['dialog', 'header', 'body'],
    variants: {
      mobileDrawer:{
        dialog:{
          minW:'370px',
          maxW:"720px",
        }
      },
      tabletDrawer:{
        dialog:{
          minW:'720px',
          maxW:"1034px",
        }
      },
      desktopDrawer:{
        dialog:{
          minW:'1034px',
          maxW:"1034px",
        }
      },
      secondary: {
        dialog: {
          minW: "1000px",
          maxW: "1000px",
        }
      },
      sidebardrawer: {
        dialog: {
          minW: "80px",
          maxW: "80px",
        }
      }
    },  
   }
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
