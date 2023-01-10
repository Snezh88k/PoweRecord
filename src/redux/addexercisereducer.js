import { ADDEXERCISE } from "./types";

const initialState = {
  dayExercise: [],
};

export const arrExerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDEXERCISE:
      return {
        ...state,
        dayExercise: [...state.dayExercise, action.data],
      };

    default:
      return state;
  }
};
