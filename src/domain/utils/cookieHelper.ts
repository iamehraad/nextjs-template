import Cookies from "js-cookie";
import { browserStorage } from "@/utils/statics/browserStorage";

export const setAccessToken = (token: string) => {
  Cookies.set(browserStorage.cookies.jwtToken, token, {
    expires: 2,
  });
};

export const deleteCookie = (name: string) => {
  Cookies.remove(name);
};
