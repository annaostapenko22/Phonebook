import Type from "../redux/types";
import { combineReducers } from "redux";

const initialState = { contacts: [], filter: "" };

export const contacts = (state = initialState.contacts, { type, payload }) => {
  switch (type) {
    case Type.ADD_CONTACT:
      return [...state, payload];
    case Type.DELETE_CONTACT:
      return state.filter(elem => elem.id !== payload);
    case Type.SET_ALL_CONTACTS:
      return payload;
    default:
      return state;
  }
};

export const filter = (state = initialState.filter, { type, payload }) => {
  switch (type) {
    case Type.SET_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter
});
