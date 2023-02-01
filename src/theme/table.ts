export const tableStyle = {
  variants: {
    simple: {
      table: {
        border: "none",
      },
      thead: {
        border: "none",
        background: "var(--blackAlpha100)",
      },
      tbody: {
        "tr:nth-of-type(even):not(:hover)": {
          bgColor: "var(--globalBg)",
        },
        "tr:hover": {
          bgColor: "var(--primary100)",
          ".img-arrow": {
            opacity: 1,
          },
        },
        tr: {
          cursor: "pointer",
          ".img-arrow": {
            opacity: 0,
          },
        },
      },
      th: {
        fontSize: "1.4rem",
        lineHeight: "2.4rem",
        padding: "0.8rem 0.4rem",
        pl: "2.3rem",
        fontWeight: "bold",
        textTransform: "unset",
      },
      td: {
        fontSize: "1.4rem",
        lineHeight: "2.4rem",
        padding: "0.8rem 0.4rem",
        pl: "2.3rem",
      },
    },
    simpleDetail: {
      table: {
        border: "none",
      },
      thead: {
        border: "none",
        background: "var(--blackAlpha100)",
      },
      tbody: {
        "tr:nth-of-type(even)": {
          bgColor: "var(--globalBg)",
        },
      },
      th: {
        fontSize: "1.4rem",
        lineHeight: "2.4rem",
        padding: "0.8rem 0.4rem",
        pl: "2.3rem",
        fontWeight: "bold",
        textTransform: "unset",
      },
      td: {
        fontSize: "1.4rem",
        lineHeight: "2.4rem",
        padding: "0.8rem 0.4rem",
        pl: "2.3rem",
      },
    },
  },
};
