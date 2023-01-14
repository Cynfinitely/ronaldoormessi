import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { doc, updateDoc, increment } from "firebase/firestore";
import db from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export interface CounterState {
  messiValue: number;
  ronaldoValue: number;
  status: string;
  error: any;
}

const initialState: CounterState = {
  messiValue: 0,
  ronaldoValue: 0,
  status: "idle",
  error: null,
};

export const fetchMessiLikes = createAsyncThunk("getMessiLikes", async () => {
  const messiCol: any = collection(db, "messiLikes");
  const messiSnapshot: any = await getDocs(messiCol);
  const messiList = messiSnapshot.docs.map((doc: any) => doc.data());
  return messiList[0].likes;
});

export const fetchRonaldoLikes = createAsyncThunk(
  "getRonaldoLikes",
  async () => {
    const ronaldoCol: any = collection(db, "ronaldoLikes");
    const ronaldoSnapshot: any = await getDocs(ronaldoCol);
    const ronaldoList = ronaldoSnapshot.docs.map((doc: any) => doc.data());
    return ronaldoList[0].likes;
  }
);

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
    ronaldoIncrement: () => {
      const ronaldoRef = doc(db, "ronaldoLikes", "1");

      updateDoc(ronaldoRef, {
        likes: increment(1),
      });

      console.log("You are Succ!");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessiLikes.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchMessiLikes.fulfilled, (state, action) => {
        state.status = "successful";
        state.messiValue = action.payload;
      })
      .addCase(fetchMessiLikes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchRonaldoLikes.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchRonaldoLikes.fulfilled, (state, action) => {
        state.status = "successful";
        state.ronaldoValue = action.payload;
      })
      .addCase(fetchRonaldoLikes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const { messiIncrement, ronaldoIncrement } = counterSlice.actions;

export default counterSlice.reducer;
