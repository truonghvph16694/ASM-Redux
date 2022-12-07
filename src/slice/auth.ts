import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    user: null
  },
  reducers: {
    login: (state) => {
      state.user = state.user;
      state.isAuthenticated = true;
      console.log("LOGIN", state);
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    }
  }
});

export const { login, logout } = UserSlice.actions;
export const selectUser = (state :any) => state.user.isAuthenticated;
export default UserSlice.reducer;
