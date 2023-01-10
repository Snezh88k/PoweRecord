import { ADDWORK, CLEANWORK, DELETE_EXERCISE } from "./types";

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

    case DELETE_EXERCISE:
      const { id } = action;
      const { workout } = state;
      const itemIndex = workout.findIndex((res) => res.id === id);

      const delExercise = [
        ...workout.slice(0, itemIndex),
        ...workout.slice(itemIndex + 1),
      ];
      return {
        ...state,
        workout: delExercise,
      };

    default:
      return state;
  }
};
