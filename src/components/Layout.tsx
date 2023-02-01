import { Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

function Layout({ children }: Props) {
  return (
    <Flex
      flexDir="column"
      className="arent-layout"
      w="100%"
      h="var(--app-height)"
      position="relative"
    >
      {children}
    </Flex>
  );
}

export default Layout;
