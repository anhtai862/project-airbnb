import { CONFIG_URL } from "enum/airbnb.enum";
import { CurrentUser } from "interfaces/info-CurrentUser";
import axiosClient from "./axiosClient";

interface LoginValues {
  email: string;
  password: string;
}

const authAPI = {
  login: (values: LoginValues) => {
    return axiosClient.post<unknown, CurrentUser>(CONFIG_URL.LOGIN_URL, values);
  },
};

export default authAPI;
