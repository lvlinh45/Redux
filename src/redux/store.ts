import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counter.slide";
import userReducer from "./user/user.slide";
// redux store: chứa tất cả state quản lý
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});

// 2 biến này khi code typecsript được gợi ý code
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
