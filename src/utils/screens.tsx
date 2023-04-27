import { useMediaQuery } from "@chakra-ui/react";

export default function screens() {
  const [isMobile] = useMediaQuery("(max-width: 767px)");
  return { isMobile };
}
