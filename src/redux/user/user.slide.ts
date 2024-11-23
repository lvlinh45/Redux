import { createSlice } from "@reduxjs/toolkit";

import { createAsyncThunk } from "@reduxjs/toolkit";

// Redux thunk là middleware để call API trước khi dispatch
// đây là 1 action của redux vì sẽ được gọi tại view thông qua keyword là dispatch
export const fetchListUsers = createAsyncThunk(
  // chỉ là tên
  "users/fetchListUsers",
  async (userId, thunkAPI) => {
    const res = await fetch("http://localhost:8000/users");
    const data = await res.json();
    return data;
  }
);
const initialState: {
  listUsers: IUser[];
} = {
  listUsers: [],
};
interface IUser {
  id: number;
  name: string;
  email: string;
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  // reducer ám chỉ data nội bộ
  reducers: {},
  // extraReducers Khi sử dụng với thunk tức là gọi API. TH2 là muốn lắng nghe action của 1 slide khác
  extraReducers: (builder) => {
    // như switch case, nếu match thì hoạt động
    builder.addCase(fetchListUsers.fulfilled, (state, action) => {
      state.listUsers = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = userSlice.actions;

export default userSlice.reducer;
