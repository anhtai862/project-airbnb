import { CurrentUser } from "interfaces/info-CurrentUser";
import axiosClient from "./axiosClient";

interface ILoginValues {
  taiKhoan: string;
  matKhau: string;
}

const loginAPI = {
  login: (values: ILoginValues) => {
    return axiosClient.post<unknown, CurrentUser>("auth/login", values);
  },
};

export default loginAPI;
