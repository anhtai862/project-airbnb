import { FieldErrors, useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppDispatch, RootState } from "store";

interface LoginValues {
  taiKhoan: string;
  matKhau: string;
}

const login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    defaultValues: { taiKhoan: "", matKhau: "" },
    mode: "onTouched",
  });
  const dispatch = useDispatch<AppDispatch>();
  const { currentUser, isLoading, error } = useSelector(
    (state: RootState) => state.login
  );

  // const onSubmit = (values: LoginValues) => {
  //   dispatch(login(values));
  // };

  const onError = (errors: FieldErrors<LoginValues>) => {
    console.log(errors);
  };

  if (Object.keys(currentUser).length) {
    // Redirect user về trang Home
    return <Navigate to="/" replace />;
  }
  return (
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm text-gray-400">Sign in to access your account</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Tai Khoan
            </label>
            <input
              type="text"
              placeholder="hoangtiu862"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              {...register("taiKhoan", {
                required: {
                  value: true,
                  message: "Tài khoản không được để trống",
                },
              })}
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
            <input
              type="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100"
              {...register("matKhau", {
                required: {
                  value: true,
                  message: "Mật Khẩu không được để trống",
                },
              })}
            />
            {error && <span>{error}</span>}
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="button"
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
  );
};

export default login;
