import {
  EXERCISE,
  ADDEXERCISEINLIST,
  ADDWORK,
  ADDEXERCISE,
  CLEANWORK,
  DELETE_EXERCISE,
} from "./types";

export function exerciseCreate(text, id) {
  return {
    type: EXERCISE,
    data: { text, id },
  };
}

export function ListOfExercisesReducer(text, id) {
  return {
    type: ADDEXERCISEINLIST,
    text: { text, id },
  };
}

export function workCreate(text, id) {
  return {
    type: ADDWORK,
    data: { text, id },
  };
}

export function workClean() {
  return {
    type: CLEANWORK,
    data: {},
  };
}

export function addExercise(text, id, date) {
  return {
    type: ADDEXERCISE,
    data: [text, id, date],
  };
}

export function deleteExercise(id) {
  return {
    type: DELETE_EXERCISE,
    id,
  };
}
