import { CONFIG_URL } from "enum/airbnb.enum";
import { ISingup } from "interfaces/signup.interfaces";
import axiosClient from "./axiosClient";

const signupAPI = {
  // add New User
  userRegister: (data: ISingup) => {
    return axiosClient.post<unknown, ISingup>(CONFIG_URL.REGISTER_URL, data);
  },
};

export default signupAPI;
