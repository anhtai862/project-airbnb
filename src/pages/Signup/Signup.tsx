import { Button, TextInput } from "@mantine/core";
import { ISingup } from "interfaces/signup.interfaces";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRegister } from "slices/signup";
import { AppDispatch, RootState } from "store";

type Props = {};

const Signup = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const register = useSelector((state: RootState) => state.signup);

  const [registerState, setRegisterState] = useState<ISingup>({});
  const handleRegister = () => {
    dispatch(addRegister(registerState));
  };

  const onChageText = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const name = target.name;
    setRegisterState({ ...registerState, [name]: target.value });
  };

  return (
    <div className="bg-gray-300  items-center mt-24 m-auto flex flex-col max-w-md p-6 rounded-md drop-shadow-2xl ">
      <h1 className="my-3 text-4xl font-bold">Login</h1>
      <form>
        <TextInput
          type="text"
          label="Họ Và Tên"
          placeholder="Huỳnh Chí Hoàng"
          className="text-white"
          name="name"
          onChange={onChageText}
        />
        <TextInput
          type="text"
          label="Email"
          placeholder="Email@gmail.com"
          name="email"
          onChange={onChageText}
        />
        <TextInput
          type="password"
          label="Mật Khẩu"
          placeholder="Mật Khẩu"
          className="text-white"
          name="password"
          onChange={onChageText}
        />
        <TextInput
          type="text"
          label="Số Điện Thoại"
          placeholder="0090900900"
          className="text-white"
          name="phone"
          onChange={onChageText}
        />

        <TextInput
          type="text"
          label="birthday"
          placeholder="1998/05/11"
          className="text-white"
          name="birthday"
          onChange={onChageText}
        />

        <TextInput
          type="text"
          label="address"
          placeholder="191A Chường Trinh Quận 12"
          className="text-white"
          name="address"
          onChange={onChageText}
        />

        {/* Error từ API trả ra */}

        <Button
          type="submit"
          className="bg-violet-500 hover:bg-none mt-5 items-center"
          onClick={handleRegister}
        >
          Đăng Nhập
        </Button>
      </form>
    </div>
  );
};

export default Signup;
