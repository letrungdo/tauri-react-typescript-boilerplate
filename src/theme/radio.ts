export const radioStyle = {
  variants: {
    blue: {
      control: {
        w: "1.6rem",
        h: "1.6rem",
        border: "2px solid #00000099 !important",
        bg: "#fff",
        _checked: {
          bg: "transparent",
          border: "2px solid #1795FE !important",
          _before: {
            bg: "#1795FE",
            w: "0.8rem",
            h: "0.8rem",
          },
        },
        _hover: {
          bg: "transparent !important",
          borderColor: "#1795FE !important",
        },
      },
      label: {
        fontSize: "1.4rem",
        fontWeight: "normal",
        display: "flex",
        ml: "1rem",
      },
      icon: { fontSize: "1rem" },
    },
  },
  sizes: {
    lg: {
      control: {
        w: "1.6rem",
        h: "1.6rem",
        border: "1px solid #D6D6D7",
        bg: "#fff",
        _checked: {
          bg: "transparent",
          borderColor: "#D6D6D7",
          _before: {
            bg: "#0C0C0C",
            w: "0.8rem",
            h: "0.8rem",
          },
        },
        _focus: {
          boxShadow: "none",
        },
        _hover: {
          bg: "transparent !important",
          borderColor: "#D6D6D7 !important",
        },
      },
      label: {
        fontSize: "1.8rem",
        fontWeight: "normal",
        color: "#000000CC",
      },
    },
  },
  defaultProps: {
    size: "lg",
  },
};
