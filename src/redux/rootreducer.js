import { combineReducers } from "redux";
import { testReducer } from "./testreducer";
import { workReducer } from "./workreducer";
import { arrExerciseReducer } from "./addexercisereducer";

export const rootReducer = combineReducers({
  testReducer,
  workReducer,
  arrExerciseReducer,
});
