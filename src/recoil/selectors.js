import { selector } from "recoil";
import { isAuth, token } from "./atoms";

export const authToken = selector({
  key: "authToken",
  get: ({ get }) => ({
    isAuth: get(isAuth),
    token: get(token),
  }),
});
