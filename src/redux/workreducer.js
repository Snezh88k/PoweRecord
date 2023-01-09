import { ADDWORK, CLEANWORK } from "./types";

const initialState = {
  workout: [],
};

export const workReducer = (state = initialState, action) => {
  console.log("Work Reducer>", action);

  switch (action.type) {
    case ADDWORK:
      return {
        ...state,
        workout: [...state.workout, action.data],
      };
    case CLEANWORK:
      return {
        ...state,
        workout: [],
      };

    default:
      return state;
  }
};
