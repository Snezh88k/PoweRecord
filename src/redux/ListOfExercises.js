import { ADDEXERCISEINLIST } from "./types";

const initialState = {
  list: [
    { text: "Жим штанги лежа горизонтально" },
    { text: "Жим штанги в наклоне" },
    { text: "Жим гантелей лежа" },
    { text: "Разведение рук с гантелями" },
    { text: "Пуловер" },
    { text: "Сведение рук на нижнем блоке кроссовера" },
    { text: "Сведение рук в тренажере бабочка" },
    { text: "Отжимания на брусьях" },
    { text: "Хаммер" },
    { text: "Отжимания" },
    { text: "Жим гантелей сидя" },
    { text: "Подъем гантелей перед собой" },
    { text: "Подъем гантелей к подбородку" },
    { text: "Подъемы гантелей в стороны" },
    { text: "Махи с гантелями" },
  ],
};

export const ListOfExercisesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDEXERCISEINLIST:
      return {
        ...state,
        list: [...state.list, action.text],
      };
    default:
      return state;
  }
};
