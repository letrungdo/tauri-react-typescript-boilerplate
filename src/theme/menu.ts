import { menuAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  button: {
    // this will style the MenuButton component
    fontWeight: "medium",
  },
  list: {
    // this will style the MenuList component
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    p: "0.8rem 1.5rem",
  },
  groupTitle: {
    // this will style the text defined by the title prop
    // in the MenuGroup and MenuOptionGroup components
  },
  command: {
    // this will style the text defined by the command
    // prop in the MenuItem and MenuItemOption components
  },
  divider: {
    // this will style the MenuDivider component
  },
});

export const menuTheme = defineMultiStyleConfig({ baseStyle });
