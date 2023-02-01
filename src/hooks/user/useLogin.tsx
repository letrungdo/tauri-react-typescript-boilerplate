import { useBoolean } from "@chakra-ui/react";
import { LF_COOKIE } from "@constants/app";
import { routePath } from "@routes/path";
import { sleep } from "@utils/common";
import { logDev } from "@utils/logs";
import jsCookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useBoolean();
  const [isLoading, setLoading] = useBoolean();

  const onChangedEmail: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    setEmail(event.target.value);

  const changedPassword: React.ChangeEventHandler<HTMLInputElement> = (event) =>
    setPassword(event.target.value);

  const handleSignIn = async () => {
    logDev("handSignIn", email, password);
    setLoading.on();
    // TODO: remove when call api login
    await sleep(1000);
    jsCookies.set(LF_COOKIE, "1");

    navigate(routePath.Home, { replace: true });
  };

  return {
    email,
    password,
    onChangedEmail,
    changedPassword,
    showPassword,
    setShowPassword,
    handleSignIn,
    isLoading,
  };
}
