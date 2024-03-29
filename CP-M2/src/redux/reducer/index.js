// Importa las actions types que necesites acá:
import {
  CREATE_HOUSE,
  DELETE_HOUSE,
  GET_ALL_HOUSES,
  GET_HOUSE,
} from "../actions";

const initialState = {
  houses: [],
  house: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_HOUSES:
      return {
        ...state,
        houses: action.payload,
      };

    case GET_HOUSE:
      return {
        ...state,
        house: action.payload,
      };

    case CREATE_HOUSE:
      return {
        ...state,
        houses: [...state.houses, action.payload],
      };

    case DELETE_HOUSE:
      return {
        ...state,
        houses: state.houses.filter((house) => house.id !== action.payload),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
