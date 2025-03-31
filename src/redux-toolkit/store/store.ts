import { configureStore } from "@reduxjs/toolkit";
import {
  nextReduxCookieMiddleware,
  wrapMakeStore,
} from "next-redux-cookie-wrapper";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "../slices/rootReducer";
import { projectSliceInitialState } from "../slices/projectSlice";

const makeStore = wrapMakeStore(() => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      const middleware = getDefaultMiddleware().prepend(
        nextReduxCookieMiddleware({
          subtrees: [
            {
              subtree: `project`,
              cookieName: `_adminTemplate_data`,
              defaultState: projectSliceInitialState,
              compress: true,
            },
          ],
          secure: false,
          sameSite: false,
        })
      );
      return middleware;
    },
    devTools: process.env.NODE_ENV === "development",
  });
  return store;
});

export const wrapper = createWrapper(makeStore);

type Store = ReturnType<typeof makeStore>;

// Infer the `ReduxRootState` and `ReduxAppDispatch` types from the store itself
export type RootState = ReturnType<Store["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = Store["dispatch"];
