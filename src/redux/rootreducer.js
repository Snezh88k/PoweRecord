import { combineReducers } from "redux";
import { workoutReducer } from "./workreducer";
import { arrExerciseReducer } from "./addexercisereducer";
import { ListOfExercisesReducer } from "./ListOfExercises";

export const rootReducer = combineReducers({
  workoutReducer,
  arrExerciseReducer,
  ListOfExercisesReducer,
});
