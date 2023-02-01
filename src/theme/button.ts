export const buttonStyle = {
  defaultProps: {
    minWidth: "1rem",
    px: 0,
  },
  baseStyle: {
    _active: {
      opacity: 0.7,
    },
    _focus: {
      boxShadow: "none",
    },
    fontWeight: "medium",
  },
  variants: {
    solid: {
      height: "unset",
    },
    blue: {
      fontSize: "1.6rem",
      lineHeight: 1.75,
      color: "var(--white)",
      bgColor: "var(--primary500)",
      borderRadius: "6px",
      p: "0.6rem 1.6rem",
      height: "unset",
      fontWeight: "bold",
    },
    gray: {
      fontSize: "1.6rem",
      lineHeight: 1.75,
      bgColor: "var(--gray200)",
      borderRadius: "6px",
      p: "0.6rem 1.6rem",
      height: "unset",
      fontWeight: "medium",
    },
    white: {
      fontSize: "1.6rem",
      lineHeight: 1.75,
      color: "var(--primary500)",
      borderRadius: "6px",
      border: "1px solid var(--gray200)",
      p: "0.6rem 1.6rem",
      height: "unset",
      fontWeight: "bold",
    },
    edit: {
      color: "var(--primary500)",
      fontWeight: "medium",
      bgColor: "transparent",
      fontSize: "1.4rem",
    },
  },
};
