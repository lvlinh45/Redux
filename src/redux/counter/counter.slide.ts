import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  name: string;
}

const initialState = {
  value: 96,
  name: "Eric",
  address: {
    name: "Ha Noi",
    code: 10000,
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 10;
    },
    decrement: (state) => {
      state.value -= 10;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
