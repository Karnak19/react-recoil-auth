import { selector } from "recoil";
import { isAuth, token, user } from "./atoms";

export const auth = selector({
  key: "authToken",
  get: ({ get }) => ({
    isAuth: get(isAuth),
    token: get(token),
    user: get(user),
  }),
  set: ({ set }, value) => ({
    setAuth: set(isAuth, value),
  }),
});
