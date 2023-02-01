export const tabsStyle = {
  variants: {
    radius: {
      tab: {
        border: "none",
        p: "1.4rem 3rem",
        _hover: {},
        _active: {
          background: "transparent",
        },
        _selected: {
          backgroundColor: "var(--secondary-bg)",
          borderRadius: "4px 4px 0 0",
        },
        fontSize: "1.6rem",
        color: "#000000CC",
        fontWeight: "bold",
        mt: "1.1rem",
      },
    },
  },
};
