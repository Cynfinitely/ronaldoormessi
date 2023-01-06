import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { doc, updateDoc, increment } from "firebase/firestore";
import db from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    ronaldoIncrement: () => {
      const ronaldoRef = doc(db, "ronaldoLikes", "1");

      updateDoc(ronaldoRef, {
        likes: increment(1),
      });

      console.log("You are Succ!");
    },
  },
  extraReducers: (builder) => {},
});

// Action creators are generated for each case reducer function
export const { ronaldoIncrement } = counterSlice.actions;

export default counterSlice.reducer;
