import { configureStore } from "@reduxjs/toolkit";
import ronaldoCounterReducer from "./slices/ronaldoCounterSlice";
import messiCounterReducer from "./slices/messiCounterReducer";

export const store = configureStore({
  reducer: {
    ronaldoCounter: ronaldoCounterReducer,
    messiCounter: messiCounterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
