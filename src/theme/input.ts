export const inputStyle = {
  variants: {
    borderRadius: {
      field: {
        borderRadius: "6px",
        bg: "transparent",
        fontSize: "1.6rem",
        _placeholder: {
          color: "var(--text400)",
          fontSize: "1.6rem",
        },
        border: "1px solid var(--gray200)",
        h: "4rem",
      },
    },
    noBorder: {
      field: {
        fontSize: "1.8rem",
        _placeholder: {
          color: "var(--text400)",
          fontSize: "1.8rem",
        },
        bg: "transparent",
      },
    },
  },
};
