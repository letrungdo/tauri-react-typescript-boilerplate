import { extendTheme } from "@chakra-ui/react";
import { badgeStyle } from "./badge";
import { buttonStyle } from "./button";
import { checkboxStyle } from "./checkbox";
import { inputStyle } from "./input";
import { menuTheme } from "./menu";
import { modalTheme } from "./modal";
import { progressStyle } from "./progress";
import { radioStyle } from "./radio";
import { selectStyle } from "./select";
import { tableStyle } from "./table";
import { tabsStyle } from "./tabs";

const breakpoints = {
  sm: "320px",
  md: "667px",
  lg: "960px",
  xl: "1280px",
  xxl: "1920px",
};

const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: "var(--secondary-bg)",
        minHeight: "100vh",
        color: "var(--gray700)",
        WebkitTouchCallout: "none",
        WebkitTapHighlightColor: "transparent",
        fontSize: "1.4rem",
        fontFamily: "Inter, NotoSansCJKjp",
        fontWeight: 400,
      },
    },
  },
  fonts: {
    heading: "Inter, NotoSansCJKjp",
    body: "Inter, NotoSansCJKjp",
  },
  breakpoints,
  components: {
    Button: buttonStyle,
    Tabs: tabsStyle,
    Table: tableStyle,
    Select: selectStyle,
    Input: inputStyle,
    Badge: badgeStyle,
    Checkbox: checkboxStyle,
    Switch: {
      variants: {
        red: {
          track: {
            bg: "red",
          },
        },
      },
    },
    Radio: radioStyle,
    Progress: progressStyle,
    Container: {
      baseStyle: {
        mx: "4rem",
        maxW: "unset",
        w: "unset",
        mb: "2rem",
      },
    },
    Menu: menuTheme,
    Modal: modalTheme,
  },
});

export default theme;
