import { useForm, FieldErrors } from "react-hook-form";
import { TextInput, Button, Space } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppDispatch, RootState } from "store";
import { login } from "slices/auth";

interface LoginValues {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    defaultValues: { email: "", password: "" },
    // mode: cách để trigger validation, mặc định là onSubmit
    mode: "onTouched",
  });

  const dispatch = useDispatch<AppDispatch>();
  const { currentUser, isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const onSubmit = (values: LoginValues) => {
    dispatch(login(values));
  };

  const onError = (errors: FieldErrors<LoginValues>) => {
    console.log(errors);
  };

  // Kiểm tra currentUser có phải là object rỗng hay không, nếu không phải => user đã đăng nhập
  if (Object.keys(currentUser).length) {
    // Redirect user về trang Home
    return <Navigate to="/" replace />;
  }

  console.log(error);

  return (
    <>
      <div className="flex flex-col max-w-md ml-auto mr-auto mt-10 p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          className="space-y-12 ng-untouched ng-pristine ng-valid"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-sm">Email address</label>
              <TextInput
                type="text"
                placeholder="Email@gmail.com"
                error={errors.email?.message}
                {...register("email", {
                  required: {
                    value: true,
                    message: "Tài khoản không được để trống",
                  },
                })}
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline text-gray-400"
                >
                  Forgot password?
                </a>
              </div>

              <TextInput
                type="password"
                placeholder="Mật Khẩu"
                error={errors.password?.message}
                {...register("password", {
                  required: {
                    value: true,
                    message: "Mật khẩu không được để trống",
                  },
                  // pattern: {
                  //   value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  //   message:
                  //     "Mật khẩu ít nhất 8 kí tự, có ít nhất một chữ cái và một số",
                  // },
                })}
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              />
            </div>
            {error && <span>{error}</span>}
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
                disabled={isLoading}
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">
              Don't have an account yet?
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:underline text-violet-400"
              >
                Sign up
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

// redux-form/formik/react-final-form/react-hook-form
