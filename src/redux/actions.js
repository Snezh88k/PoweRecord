import {
  EXERCISE,
  TEST,
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

export function testCreate(text, id) {
  return {
    type: TEST,
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

export function addExercise(text, id) {
  return {
    type: ADDEXERCISE,
    data: [text, id],
  };
}

export function deleteExercise(id) {
  return {
    type: DELETE_EXERCISE,
    id,
  };
}
