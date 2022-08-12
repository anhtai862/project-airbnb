import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ACTION_KEY, ACTION_NAME } from "enum/airbnb.enum";
import { ISingup } from "interfaces/signup.interfaces";
import signupAPI from "services/signup";

interface RegisterState {
  data: ISingup;
  isLoading: boolean;
  error: string;
}

const initialState: RegisterState = {
  data: {} as ISingup,
  isLoading: false,
  error: "",
};

export const addRegister = createAsyncThunk(
  ACTION_KEY.REGISTER,
  async (signup: ISingup) => {
    try {
      const data = await signupAPI.userRegister(signup);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const registerSlice = createSlice({
  name: ACTION_NAME.REGISTER,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addRegister.pending, (state) => {
      return { ...state, isLoading: true };
    });
    builder.addCase(addRegister.fulfilled, (state, { payload }) => {
      return { ...state, isLoading: false, data: payload };
    });
    builder.addCase(addRegister.rejected, (state, { error }) => {
      return { ...state, isLoading: false, error: error.message as string };
    });
  },
});

export default registerSlice.reducer;
