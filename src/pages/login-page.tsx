import {
  Button,
  Flex,
  Img,
  Input,
  InputGroup,
  InputRightElement,
  Text
} from "@chakra-ui/react";
import useLogin from "@hooks/user/useLogin";

const LoginPage = () => {
  const {
    onChangedEmail,
    changedPassword,
    showPassword,
    setShowPassword,
    handleSignIn,
    isLoading,
  } = useLogin();

  return (
    <Flex
      w="100%"
      h="100%"
      position="absolute"
      overflowX="hidden"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        p="5rem 4rem 4.5rem 4rem"
        w="95%"
        maxW="40.6rem"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        borderRadius="6px"
        boxShadow="0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)"
        bgColor="var(--primary-bg)"
      >
        <Flex alignItems="center">
          <Img src="/img/logo.svg" />
          <Text ml="1.2rem" fontWeight="bold" fontSize="1.6rem">
            Tauri App
          </Text>
        </Flex>
        <Text mt="5rem" mr="auto">
          Email
        </Text>
        <Input variant="borderRadius" onChange={onChangedEmail} mt="0.8rem" />
        <Text mt="2.4rem" mr="auto">
          Password
        </Text>
        <InputGroup mt="0.8rem">
          <Input
            variant="borderRadius"
            onChange={changedPassword}
            type={showPassword ? "text" : "password"}
          />
          <InputRightElement width="4.5rem" h="100%" alignItems="center">
            <Img
              src={showPassword ? "/img/icon/eye.svg" : "/img/icon/hide.svg"}
              className="button"
              onClick={setShowPassword.toggle}
            />
          </InputRightElement>
        </InputGroup>
        <Button
          variant="blue"
          onClick={handleSignIn}
          marginTop="3.2rem"
          isLoading={isLoading}
          _hover={{}}
        >
          Login
        </Button>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
