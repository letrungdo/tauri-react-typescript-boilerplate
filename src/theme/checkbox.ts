export const checkboxStyle = {
  variants: {
    blue: {
      control: {
        bg: "#fff",
        mb: 0,
        _checked: {
          borderColor: "transparent",
          bg: "#1795FE",
          _hover: {
            bg: "#1795FE !important",
            borderColor: "#1795FE !important",
          },
        },
      },
    },
  },
  sizes: {
    lg: {
      control: {
        w: "1.8rem",
        h: "1.8rem",
        borderRadius: "4px",
        borderColor: "#D4D4D5",
      },
      label: { fontSize: "1.4rem", fontWeight: "normal", ml: "1rem" },
      icon: { fontSize: "1rem" },
    },
  },
  defaultProps: {
    size: "lg",
    colorScheme: "blue",
  },
};
