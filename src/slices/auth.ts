import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action } from "enum/airbnb.enum";
import { CurrentUser } from "interfaces/info-CurrentUser";
import loginAPI from "services/loginAPI";

interface ICurrentUser {
  currentUser: CurrentUser;
  isLoading: boolean;
  error?: string;
}

const initialState: ICurrentUser = {
  currentUser: JSON.parse(localStorage.getItem("user") as string) || {},
  isLoading: true,
  error: "",
};

export const login = createAsyncThunk("auth/login", async (values: any) => {
  try {
    const data = await loginAPI.login(values);
    // Lưu thông tin đăng nhập vào localStorage
    localStorage.setItem("user", JSON.stringify(data));
    return data;
  } catch (error) {
    throw error;
  }
});

const loginSlice = createSlice({
  name: Action.LOGIN,
  initialState,
  reducers: {
    logout: (state: ICurrentUser) => {
      localStorage.removeItem("user");
      return { ...state, currentUser: {} as CurrentUser };
    },
  },
  extraReducers: (builder) => {
    //login/pending
    builder.addCase(login.pending, (state) => {
      return { ...state, isLoading: true, error: "" };
    });
    //login/fulfilled
    builder.addCase(login.fulfilled, (state, { payload }) => {
      return { ...state, isLoading: false, currentUser: payload };
    }); //login/rejected
    builder.addCase(login.rejected, (state, { error }) => {
      return { ...state, isLoading: false, error: error.message };
    });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
