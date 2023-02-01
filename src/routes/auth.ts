import { LF_COOKIE } from "@constants/app";
import jsCookies from "js-cookie";
import { redirect } from "react-router-dom";


export const authLoader = async () => {
    const lf = jsCookies.get(LF_COOKIE);
    if(lf) return null;
    return redirect("/login");
};