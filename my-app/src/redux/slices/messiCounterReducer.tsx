import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { doc, updateDoc, increment } from "firebase/firestore";
import db from "../../firebase/firebase";

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
    messiIncrement: () => {
      const messiRef = doc(db, "messiLikes", "1");

      updateDoc(messiRef, {
        likes: increment(1),
      });
      console.log("GJ!");
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { messiIncrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
