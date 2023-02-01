import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  overlay: {
    bg: "var(--blackAlpha500)",
  },
  dialog: {
    borderRadius: "6px",
    bg: "var(--white)",
    // maxW: "45rem", not working
    my: "auto",
    p: "4rem",
  },
  header: {
    fontSize: "2.4rem",
    fontWeight: "bold",
    textAlign: "center",
    whiteSpace: "nowrap",
    px: 0,
    py: 0,
  },
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
});
