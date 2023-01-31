import { ADDWORK, CLEANWORK, DELETE_EXERCISE } from "./types";

const initialState = {
  workout: [],
};

export const workoutReducer = (state = initialState, action) => {
  switch (action.type) {
    //Добавляет упражнение в тренировку
    case ADDWORK:
      return {
        ...state,
        workout: [...state.workout, action.data],
      };

    //После добавления тренировки, очищает текущую
    case CLEANWORK:
      return {
        ...state,
        workout: [],
      };

    //Удаление упражнения из тренировки
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
