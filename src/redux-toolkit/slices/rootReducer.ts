import { AnyAction, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import projectSlice from "./projectSlice";

const rootReducer = combineReducers({
  project: projectSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const combinedReducer = (
  state: RootState | undefined,
  action: AnyAction
): RootState => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload
    };
  }
  return rootReducer(state, action);
};

export default combinedReducer;
