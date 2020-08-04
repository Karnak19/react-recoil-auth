import { atom } from "recoil";

export const isAuth = atom({
  key: "isAuth",
  default: false,
});

export const token = atom({
  key: "token",
  default: "",
});

export const user = atom({
  key: "user",
  default: {},
});
